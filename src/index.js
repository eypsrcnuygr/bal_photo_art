import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pregnancy from './components/Pregnancy';
import Birth from './components/Birht';
import NewBirth from './components/NewBirth';
import SittingBaby from './components/SittingBaby';
import Birthday from './components/Birthday';
import MiniFamily from './components/MiniFamily';
import Form from './components/Form';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Hamilelik" exact component={Pregnancy} />
        <Route path="/Doğum" exact component={Birth} />
        <Route path="/Yenidoğan" exact component={NewBirth} />
        <Route path="/Oturabilen Bebek" exact component={SittingBaby} />
        <Route path="/Yaş Günü" exact component={Birthday} />
        <Route path="/Mini Aile" exact component={MiniFamily} />
        <Route path="/Bize Ulaşın" exact component={Form} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
