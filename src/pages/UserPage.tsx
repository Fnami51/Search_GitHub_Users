import { useSearchContext } from 'src/hooks/useSearchContext';
import * as s from './UserPage.styled';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { getRepos } from 'src/api/getRepos'; 
import { GitHubRepository } from 'src/intefaces/ReposInterface';
import RepoItem from 'src/components/RepoItem';

function UserPage() {
    const { resultSearch } = useSearchContext();
    const location = useLocation();
    const { id } = location.state || {};
    const [repos, setRepos] = useState<GitHubRepository[]>([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState<string | null>(null); 

    const user = useMemo(() => {
        return resultSearch?.items.find(user => user.id === id) || null;
    }, [resultSearch, id]);

    const fetchRepos = async (reposUrl: string) => {
        try {
            const data = await getRepos(reposUrl); 
            setRepos(data);
        } catch (error) {
            console.error('Error fetching repositories:', error);
            setError('Failed to fetch repositories'); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        if (user && user.repos_url) {
            setLoading(true); 
            fetchRepos(user.repos_url);
        }
    }, [user]);

    return (
        <s.Background>
            <s.Box>
                {user ? (
                    <>  
                        <s.UserInfo>
                            <s.Image src={user.avatar_url} alt={`${user.login} avatar`} />
                            <s.TextBox>
                                <s.Name>{user.login}</s.Name>
                                {user.site_admin? (
                                    <s.Attribute style={{color: 'yellow'}}>Site admin</s.Attribute>
                                ) : null}
                                <s.Attribute>Type user: {user.type}</s.Attribute>
                                <s.AttributeLink href={user.html_url}>{user.html_url}</s.AttributeLink>
                            </s.TextBox>
                        </s.UserInfo>

                        <s.Title>Reprositories</s.Title>

                        <s.List>
                            {loading && <p>Loading repositories...</p>}
                            {error && <p>{error}</p>}
                            {repos.map((repo) => (
                                <RepoItem repo={repo} /> 
                            ))}
                        </s.List>
                    </>
                ) : (
                    <p>User not found</p>
                )}
            </s.Box>
        </s.Background>
    );
}

export default UserPage;
