import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import AppLayout from './components/Layout'

import SearchPage from './pages/Search'
import ItemsListPage from './pages/List'
import ItemPreviewPage from './pages/Preview'
import NotFoundPage from './pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop useLocation={useLocation} />
      <Routes>
        <Route
          path='/'
          element={
            <AppLayout />
          }
        >
          <Route index element={<SearchPage />} />
          <Route path='/items' element={<ItemsListPage />} />
          <Route path='/item/:id' element={<ItemPreviewPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
