import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import mystore from './redux/store';
import {Provider} from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={mystore}>
        <BrowserRouter>
            <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
