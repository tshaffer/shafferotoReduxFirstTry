import { combineReducers } from 'redux';
import PhotosReducer from './reducer_photos';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  photos: PhotosReducer,
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
