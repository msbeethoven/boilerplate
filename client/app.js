import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <div>Hello world! </div>
</Provider>,
  document.getElementById('app')
);

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(

//   <div> Hello world! </div>,
//   document.getElementById('app')
// )
