import { useState, useMemo, useEffect } from 'react';
import { useSearchContext } from 'src/hooks/useSearchContext';
import * as s from './ResultPage.styled';
import { Link } from 'react-router-dom';
import UserItem from '../components/UserItem'; 
import { getRepos } from 'src/api/getRepos';
import { useRepoCache } from 'src/context/RepoCacheContext'; 
import { GitHubUser } from 'src/intefaces/UsersInterface';

function ResultPage() {
    const { resultSearch } = useSearchContext(); 
    const users = resultSearch?.items || []; 

    const { cachedRepos, setCachedRepos } = useRepoCache(); 

    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState('default');
    const [sortedUsers, setSortedUsers] = useState(users);
    const usersPerPage = 10;

    const totalPages = Math.ceil(users.length / usersPerPage);

    const currentUsers = useMemo(() => {
        const startIndex = (currentPage - 1) * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        return sortedUsers.slice(startIndex, endIndex);
    }, [currentPage, sortedUsers]);

    const fetchAndCacheRepos = async (user: GitHubUser) => {
        if (cachedRepos[user.repos_url]) {
            return cachedRepos[user.repos_url]; 
        }
        const repos = await getRepos(user.repos_url);
        setCachedRepos(user.repos_url, repos); 
        return repos;
    };

    useEffect(() => {
        const fetchAndSortUsers = async () => {
            if (sortOrder === 'default') {
                setSortedUsers(users);
                return;
            }

            const usersWithRepoCount = await Promise.all(users.map(async (user) => {
                const repos = await fetchAndCacheRepos(user);
                return { ...user, repoCount: repos.length };
            }));

            const sorted = usersWithRepoCount.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.repoCount - b.repoCount;
                } else if (sortOrder === 'desc') {
                    return b.repoCount - a.repoCount;
                }
                return 0;
            });

            setSortedUsers(sorted);
        };

        fetchAndSortUsers();
    }, [sortOrder, users]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(event.target.value);
    };

    return (
        <s.Background>
            <s.SortDropdown onChange={handleSortChange} value={sortOrder}>
                <option value="default">Default</option>
                <option value="asc">Ascending order of repositories</option>
                <option value="desc">Descending order of repositories</option>
            </s.SortDropdown>

            <s.ResultList>
                {currentUsers.map((user) => (
                    <Link key={user.id} to={`/user/${user.login}`} state={{id: user.id}}>
                        <UserItem user={user}/>
                    </Link>
                ))}
            </s.ResultList>

            <s.Pagination>
                <s.Button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </s.Button>
                <p> Page {currentPage} of {totalPages} </p>
                <s.Button onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                </s.Button>
            </s.Pagination>
        </s.Background>
    );
}

export default ResultPage;
