import './App.css';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Home from './Components/Home';
import SuperHeroes from './Components/SuperHeroes';
import RQSuperHeroes from './Components/RQSuperHeroes';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/superheroes">SuperHeroes</Link>
            </li>
            <li>
              <Link to="/rqsuperheroes">RQSuperHeroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          
          <Route path="/superheroes" element={<SuperHeroes />} />
          <Route path="/rqsuperheroes" element={<RQSuperHeroes />} />
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
