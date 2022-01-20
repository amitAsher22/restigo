/////// CSS 

import './App.css';
///// COMPONENTS
import ShowItems from './components/ShowItems';
import Suppliers from './components/Supliers';

/// images 
import restigo from './images/restigo.png'

function App() {

  return (
    <div className="App">
      <div className='coverLogo'>
        <img className='logo' src={restigo} alt='restigo logo' />
      </div>
      <Suppliers/>
      <ShowItems/>
      
    </div>
  );
}

export default App;


