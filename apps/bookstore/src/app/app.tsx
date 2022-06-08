import { BooksFeature } from '@goodmood/books/feature';
import { Link, Routes, Route, Navigate  } from 'react-router-dom';

import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@goodmood/ui';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path="/books" element={<BooksFeature />} />
          <Route path="/" element={<Navigate to="/books" />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
