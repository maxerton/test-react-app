import './App.css';
import Counter from './components/UI/Counter/Counter';

function App() {
  return (
    <div className="App" >
      <h1>React App</h1>
      
      <Counter title='1 Count'></Counter>
      <Counter title='2 count' start={ 2 }></Counter>
      <Counter title='3 count'></Counter>
    </div>
  );
}

export default App;
