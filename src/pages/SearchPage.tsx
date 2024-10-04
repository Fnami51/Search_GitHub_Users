import { useSearchContext } from 'src/hooks/useSearchContext';
import * as s from './SearchPage.styled';
import { getUsers } from 'src/api/getUsers';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
    const { setResult } = useSearchContext()
    let navigate = useNavigate();

    async function handleSubmit(event: any) {
        event.preventDefault();
        try {
            const username = event.target.elements.formUsername.value;
            const data = await getUsers(username);
            setResult(data);
            navigate('/result')
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <s.Background>
            <s.Form id="formSearch" onSubmit={handleSubmit}>
                <s.Input type="text" name="username" id="formUsername" placeholder="Username in GitHub" />
                <s.Button id="formEnter" type="submit">
                    🔎
                </s.Button>
            </s.Form>
        </s.Background>
    );
}

export default SearchPage;
