import "./App.css"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { CreateRecipes } from './pages/Create-recipe';
import { SavedRecipes } from './pages/Saved-recipes';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/createrecipe" element={<CreateRecipes/>} />
          <Route path="/savedrecipe" element={<SavedRecipes/>} />
          </Routes>      
          </Router>
    
    </div>
  );
}

export default App;
