import './App.css';

function App() {
  let name = "Het";
  let l = [10, 20, 30];
  let obj = {
    'name': 'Het',
    'learning': 'React',
    'desc': 'I am learning React.'
  }
  let status = true;
  return (
    <div className="App">
      <h1>Welcome, {name} to the Website</h1>
      {
        l.map((v) => {
          return (
            <div>{v}</div>
          );
        })
      }
      <div>{obj.name}</div>
      <div>{10 + 20}</div>
      {(status) ? <h1 style={{ color: "red" }}>Welcome</h1> : <h1>Not Welcome</h1>}
    </div>
  );
}

export default App;
