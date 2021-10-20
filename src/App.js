import './App.css';
import FruitContainer from './component/FruitContainer';
import {Provider} from 'react-redux';//rpovides the redux store to the react application
import store from './Redux/Store';
import HooksFruitContainer from './component/hooksFruitContainer';
import VegetableContainer from './component/vegetableContainer';
function App() {
  return (
   <Provider store= {store}>
     <div>
     <FruitContainer/>
     <hr/>
     <HooksFruitContainer/>
     <hr/>
     <VegetableContainer/>
   </div>
   </Provider>// store= {store} is in app.js because it will allow almost all component to access store from redux.
   
  );
}

export default App;
