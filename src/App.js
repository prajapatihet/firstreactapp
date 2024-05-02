import './App.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <h1 className='text-danger'>Welcome to Page</h1>
      </div>
      {/* <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;

function Card() {
  return (
    <div className='cardItems'>Card div</div>
  )
}
