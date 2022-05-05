import './App.css';
import Counter from '../components/Hooks/useState';
import Reducer from '../components/Hooks/useReducer';
import Effect from '../components/Hooks/useEffect';

const  App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <Reducer/>
        <br/>
        <Effect/>
      </header>
    </div>
  );
}

export default App;
