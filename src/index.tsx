import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Content from './Content';
import store from "./Store/index";
import './todo.css';
import TopNav from './TopNav';

console.log(store);
ReactDOM.render(
  <Provider store={store}>
  <div>
  <TopNav/>
  <Content/>
  </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
