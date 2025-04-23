import './App.css';

import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import About from './component/about/about';
import BlogContainer from './component/blogContainer/blogContainer';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <BlogContainer></BlogContainer>
    </div>
  );
}

export default App;
