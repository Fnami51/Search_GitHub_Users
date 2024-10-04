import * as s from './RepoItem.styled';
import { GitHubRepository } from "src/intefaces/ReposInterface";

interface RepoItemProps{
    repo: GitHubRepository
}

function RepoItem({repo}: RepoItemProps) {

    return (
        <s.Background>
            <s.Name>{repo.name}</s.Name>
            <s.Attribute>HEAD: {repo.default_branch}</s.Attribute>
            <s.Attribute>{repo.private? 'Private': 'Public'}</s.Attribute>
            <s.AttributeLink href={repo.html_url}>{repo.html_url}</s.AttributeLink>
        </s.Background>
    );
}

export default RepoItem;
