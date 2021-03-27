import './App.css';
import Navbar from './Components/Navbar'
import Home from './Home'

function App() {

  const title = 'Welcome to Elvion-Rhart';
  const likes = 50;
  const person = {name: 'chros', age: 25};

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>random : {Math.floor(Math.random() * 10 + 1)}</p>
        <Home/>
      </div>
    </div>
  );
}

export default App;
