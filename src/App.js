import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Test from './views/test/test';
import {Spinner} from './components/globals/index';
import Loadable from 'react-loadable';
import {asyncLoadable} from './helper/util';
import './App.css';

const LoadableLandingPage = Loadable({
  loader: () => import('./landingPage/landingPage'),
  loading: () => <Spinner />,
  delay: 500,
})

const LoadableChatRoom = Loadable({
  loader: () => import('./views/chatRoom/index'),
  loading: () => <Spinner />,
  delay: 500,
})

const LoadablePhotoGallery = Loadable({
  loader: () => import('./views/photoGallery'),
  loading: () => <Spinner />,
  delay: 500,
})


const AsyncLandingPage = asyncLoadable(LoadableLandingPage);
const AsyncChatRoom = asyncLoadable(LoadableChatRoom);
const AsyncPhotoGallery = asyncLoadable(LoadablePhotoGallery);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={AsyncLandingPage} />
            <Route exact path='/chatRoom' component={AsyncChatRoom} />
            <Route exact path='/photoGallery' component={AsyncPhotoGallery} />
            <Route exact path='/test' component={Test} />
          </Switch>
        </ Router>
      </div>
    );
  }
}

export default App;
