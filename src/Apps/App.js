import './App.css';
import Counter from '../components/Hooks/useState';
import Reducer from '../components/Hooks/useReducer';
import Effect from '../components/Hooks/useEffect';
import RefTutorial from '../components/Hooks/useRef';

const  App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <Reducer/>
        <br/>
        <Effect/>
        <br/>
        <RefTutorial/>
      </header>
    </div>
  );
}

export default App;
