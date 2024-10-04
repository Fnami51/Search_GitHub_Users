import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import SearchProvider from './context/SearchContext';
import GlobalStyles from './GlobalStyle';

const App = () => {
  return (
    <SearchProvider>
        <GlobalStyles />
        <Routes>
            <Route path="/" element={<SearchPage />} />
        </Routes>
    </SearchProvider>
  );
};

export default App;
