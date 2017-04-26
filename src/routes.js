//Setting up routes, tell it what valid rout our app has and appropriate components to show
import React from 'react';
import {Route, IndexRoute} from 'react-router'; //Route obj - define a match between a url and comp.

import App from './components/app';

const Greeting = () => {
  return <div>Heyll </div>;
};

export default (
  <Route path="/" component={App}> // when we are on this /, we show app component ex: google.com/ - remders app comp
    <Route path="greet" component={Greeting}/> //Greeting component is passed to App comp as children. this.props.children
    <Route path="greet2" component={Greeting}/>
    <Route path="greet3" component={Greeting}/>

  </Route>
);
