import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  },[dispatch])


  return (
    <div className="App">
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
