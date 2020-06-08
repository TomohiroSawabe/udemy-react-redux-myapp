// 使用するReducerをImport
import count from './count';

// 全Reducerを統合するためのライブラリをImportする
import { combineReducers } from 'redux';

// ImportしたReducerを結合
export default combineReducers({ count });
