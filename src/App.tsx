import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import SearchProvider from './context/SearchContext';
import GlobalStyles from './GlobalStyle';
import ResultPage from './pages/ResultPage';
import UserPage from './pages/UserPage';
import { RepoCacheProvider } from './context/RepoCacheContext';

const App = () => {
  return (
    <SearchProvider>
      <RepoCacheProvider>
        <GlobalStyles />
        <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </RepoCacheProvider>
    </SearchProvider>
  );
};

export default App;
