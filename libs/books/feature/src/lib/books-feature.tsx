import { useEffect, useState } from 'react';
import { getBooks } from '@goodmood/books/data-access';
import { Books } from '@goodmood/books/ui';

/* eslint-disable-next-line */
export interface BooksFeatureProps {}

export function BooksFeature(props: BooksFeatureProps) {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);
  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={book => alert(`Added ${book.title}`)} />
    </>
  );
}

export default BooksFeature;
