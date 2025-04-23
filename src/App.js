import './App.css';

import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import About from './component/about/about';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
    </div>
  );
}

export default App;
