

import Home  from './containers/Home/Home';
import AddArticle from './containers/AddArticle/AddArticle'
import Contact from './containers/Contact/Contact';
import Article from './containers/Article/Article'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/ecrire" exact element={<AddArticle/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path="/articles/:slug" element={<Article/>}/>
      </Routes>
    </>
  );
}

export default App;
