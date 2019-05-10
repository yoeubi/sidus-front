import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Join from './components/Join';
import JoinForm from './components/JoinForm';
import List from './components/List';
import Detail from './components/Detail';
import withLogo from './HOC/withLogo';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={withLogo(List)} />
        <Route exact path="/logo" component={Main} />
        <Route path="/join" component={Join} />
        <Route path="/join-next" component={JoinForm} />
        <Route path="/item/:id" component={Detail} />
      </Switch>
    </div>
  );
};

export default App;
