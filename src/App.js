import { Provider } from 'react-redux';
import './App.css';
import HomePage from './Components/layout/HomePage';
import store from './Utils/store';

function App() {

  return (
    <Provider store={store}>
    <HomePage />
    </Provider>
  );
}

export default App;
