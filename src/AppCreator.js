import React from 'react';
import { useState } from 'react';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pregnancy from './components/Pregnancy';
import Birth from './components/Birht';
import NewBirth from './components/NewBirth';
import SittingBaby from './components/SittingBaby';
import Birthday from './components/Birthday';
import MiniFamily from './components/MiniFamily';
import Form from './components/Form';


function AppCreator() {

  const [language, setLanguage] = useState('TR')

  const callBackFromParent = (propFromChild) => {
    setLanguage(propFromChild);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <App state={language} callBackFromParent={callBackFromParent} />} />
        <Route path="/Hamilelik" exact render={() => <Pregnancy state={language} callBackFromParent={callBackFromParent} />} />
        <Route path="/Doğum" exact render={() => <Birth state={language} callBackFromParent={callBackFromParent} />}  />
        <Route path="/Yenidoğan" exact render={() => <NewBirth state={language} callBackFromParent={callBackFromParent} />}  />
        <Route path="/Oturabilen Bebek" exact render={() => <SittingBaby state={language} callBackFromParent={callBackFromParent}  />}  />
        <Route path="/Yaş Günü" exact render={() => <Birthday state={language} callBackFromParent={callBackFromParent}  />}  />
        <Route path="/Mini Aile" exact render={() => <MiniFamily state={language} callBackFromParent={callBackFromParent}  />}  />
        <Route path="/Bize Ulaşın" exact render={() => <Form state={language} callBackFromParent={callBackFromParent}  />}  />
      </Switch>
    </BrowserRouter>
  );
}

export default AppCreator;
