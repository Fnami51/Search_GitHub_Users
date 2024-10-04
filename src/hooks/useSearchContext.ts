import { useContext } from "react";
import { SearchContext } from "src/context/SearchContext";

export function useSearchContext() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useItems must be used within an ItemsProvider');
      }
    return context
};