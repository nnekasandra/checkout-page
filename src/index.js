import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Form from './App.js'
import Shop from './shop.js'
import  './style.css'
class App extends React.Component{
    render(){
        return(
            <div className="align">
              <Form/>
              <Shop/>
            </div>
        );
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.body
);

reportWebVitals();
