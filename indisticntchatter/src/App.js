import logo from './logo.svg';
import './App.css';
import navbar from './Comp/navbar';
import { Route } from 'react-router-dom';
import nav from './Comp/navbar';

function App() {
  return (
    <div className="App">
      <Route path="/" component={nav} />
    </div>
  );
}

export default App;
