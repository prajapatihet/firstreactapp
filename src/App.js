import './App.css';

function App() {
  let name = "Het";
  let l = [10, 20, 30];
  return (
    <div className="App">
      <h1>Welcome, {name} to the Website</h1>
      {l.map((v) => {
        return (
          <div>{v}</div>
        )
      })}
    </div>
  );
}

export default App;
