import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'; // 웹브라우저에서 라우팅하는 보편적인 방법
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// index.html #root 를 가져와 렌더링 시켜준다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // jsx : js에서 html을 사용할 수 있게 확장된 것
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); // <App /> : app.js 를 가져옵니다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
