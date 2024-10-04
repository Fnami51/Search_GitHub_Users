import { GitHubUser } from "src/intefaces/UsersInterface";
import * as s from './UserItem.styled';

interface UserItemProps{
    user: GitHubUser
}

function UserItem({user}: UserItemProps) {
    console.log(user)

    return (
        <s.Background>
            <s.Image src={user.avatar_url} />
            <s.Name>{user.login}</s.Name>
        </s.Background>
    );
}

export default UserItem;
