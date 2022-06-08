import { BooksFeature } from '@goodmood/books/feature';
import { Link, Routes, Route } from 'react-router-dom';

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
          <Route path="/feature" element={<BooksFeature />} />
        </Routes>
        <h1>Welcome to BooksFeature</h1>
      </Main>
    </>
  );
}

export default App;
