import './App.css';

function App() {

  const title = 'Welcome to Elvion-Rhart';
  const likes = 50;
  const person = {name: 'chros', age: 25};

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>random : {Math.floor(Math.random() * 10 + 1)}</p>
      </div>
    </div>
  );
}

export default App;
