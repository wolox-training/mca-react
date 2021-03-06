/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import i18next from 'i18next';

import { Book } from 'interfaces/interfaces';
import { actionCreators, useDispatch, useSelector } from 'contexts/BookContext';
import { getBooks } from 'services/BooksService';

import styles from './styles.module.scss';

function BookList() {
  const { isLoading, data, isError } = useQuery('books', getBooks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const page = data?.data?.page || [];
  const books = useSelector(state => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.setBooks(page));
  }, [page, dispatch]);

  return (
    <>
      {isError ? (
        <span>{i18next.t('Global:error')}</span>
      ) : isLoading ? (
        <span>{`${i18next.t('Global:loading')}...`}</span>
      ) : (
        books?.map(({ id, image_url, title, author }: Book) => (
          <Link to={`/books/${id}`} key={id}>
            <div className={styles.bookContainer}>
              <div className={styles.book}>
                <img
                  src={image_url}
                  alt={`${i18next.t('Global:imageBook')}`}
                  className={`m-bottom-4 ${styles.bookImage}`}
                />
                <div className={styles.bookCaption}>
                  <p className={`m-bottom-2 ${styles.bookTitle}`}>{title}</p>
                  <span>{author}</span>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
}

export default BookList;
