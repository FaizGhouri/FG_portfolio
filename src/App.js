import './App.css';
import FullPage from './Components/fullPage/FullPage';
import WebHeader from './Components/Header/Header';


function App() {
  return (
    <div className="App">

      <div className='relative fixed top'>
        <WebHeader />
      </div>

      <FullPage />

    </div>
  );
}

export default App;
