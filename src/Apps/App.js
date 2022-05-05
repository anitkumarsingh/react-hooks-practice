import './App.css';
import Counter from '../components/Hooks/useState';
import Reducer from '../components/Hooks/useReducer';

const  App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <Reducer/>
      </header>
    </div>
  );
}

export default App;
