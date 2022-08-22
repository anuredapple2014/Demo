
import React from 'react';
import { Provider } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Home from './src/Home';
import store from './Redux/store';


const App = (props) => {

  
 
  

  return (
    <Provider store={store}>
    <Home />
    </Provider>
  );
};



export default App;
