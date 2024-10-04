import { createContext, ReactNode, useContext, useState } from 'react';
import { GitHubRepository } from 'src/intefaces/ReposInterface';

interface RepoCacheContextType {
    cachedRepos: { [key: string]: GitHubRepository[] };
    setCachedRepos: (url: string, repos: GitHubRepository[]) => void;
}

const RepoCacheContext = createContext<RepoCacheContextType | undefined>(undefined);

export const useRepoCache = () => {
    const context = useContext(RepoCacheContext);
    if (!context) {
        throw new Error('useRepoCache must be used within a RepoCacheProvider');
    }
    return context;
};

interface RepoCacheProviderProps {
    children: ReactNode;
}

export function RepoCacheProvider({ children }: RepoCacheProviderProps) {
    const [cachedRepos, setCachedReposState] = useState<{ [key: string]: GitHubRepository[] }>({});

    const setCachedRepos = (url: string, repos: GitHubRepository[]) => {
        setCachedReposState((prev) => ({
            ...prev, 
            [url]: prev[url] ? [...prev[url], ...repos] : repos,
        }));
    };

    return (
        <RepoCacheContext.Provider value={{ cachedRepos, setCachedRepos }}>
            {children}
        </RepoCacheContext.Provider>
    );
};
