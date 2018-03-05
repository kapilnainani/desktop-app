import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ToolClickReducer from './reducer_tool_click';
const rootReducer = combineReducers({
  books: BooksReducer,
  clickedTool: ToolClickReducer
});

export default rootReducer;
