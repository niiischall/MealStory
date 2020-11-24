import React, { useState } from 'react';
import { 
  createStore, 
  combineReducers 
} from 'redux';
import { Provider } from 'react-redux';
import { 
  composeWithDevTools 
}  from 'redux-devtools-extension';            

import Navigator    from './navigation/Navigator'; 
import SplashScreen from './screens/SplashScreen';
import Reducer      from './store/reducer/reducer';

const combinedReducer = combineReducers({
  reducer: Reducer
});
const store = createStore(combinedReducer, composeWithDevTools());

const App = (props) => {
  const [introScreen, setIntroScreen] = useState(true);

  const removeIntroScreen = () => {
    setIntroScreen(false);
  }

  let content = null;
  if(introScreen){
    content = (
      <SplashScreen removeScreen = {removeIntroScreen} />
    );
  }else{
    content = (
      <Navigator />
    )
  }

  return (
    <Provider store = {store}>
      {content}
    </Provider>
  );
}

export default App;
