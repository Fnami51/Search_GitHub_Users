import { createContext, ReactNode, useState } from "react";
import { GitHubResponse } from "src/intefaces/UsersInterface";

interface SearchContextType {
    resultSearch: GitHubResponse | undefined;
    setResult: React.Dispatch<React.SetStateAction<GitHubResponse | undefined>>;
}

export const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProviderProps {
    children: ReactNode;
}

function SearchProvider({ children }: SearchProviderProps) {
    const [resultSearch, setResult] = useState<GitHubResponse | undefined>(undefined);

    return (
        <SearchContext.Provider value={{ resultSearch, setResult }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;
