import {combineReducers} from 'redux';
import PhotosReducer from './reducer_photos';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import ActivePhoto from './reducer_active_photo';

const rootReducer = combineReducers({
    photos: PhotosReducer,
    books: BooksReducer,
    activeBook: ActiveBook,
    activePhoto: ActivePhoto
});

export default rootReducer;
