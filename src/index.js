import React from 'react';
import ReactDOM from 'react-dom';

// Storeを作成するための関数
import { createStore } from 'redux';
// 作成したStoreを全Compornentに提供する関数
import { Provider } from 'react-redux';

import './index.css';

// ReducerをImport
import reducer from './reducers';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

// Storeの作成
const store = createStore(reducer);

ReactDOM.render(
  // ProviderでAppをラップし、store（Reducerの集まり）を渡す
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
