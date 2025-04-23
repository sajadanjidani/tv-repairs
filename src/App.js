import './App.css';

import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import About from './component/about/about';
import BlogContainer from './component/blogContainer/blogContainer';
import Contact from './component/contact/contact';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <BlogContainer></BlogContainer>
      <Contact></Contact>
    </div>
  );
}

export default App;
