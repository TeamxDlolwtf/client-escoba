
import { Routes,Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import { useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import NavBar from './components/NavBar/NavBar';
import Test from './pages/Test/Test';
function App() {
  const location = useLocation();

  const viewHeader = useCallback((location)=>{
      if(location.pathname !== '/'){
        return <NavBar />
      }
  },[]);

  return (
    <>
      {
        viewHeader(location)
      }
    <Routes>
      <Route 
        path='/'
        element={<LandingPage />}
        />

      <Route 
        path='/home'
        element={<Home />}
        />

      <Route 
        path='/test'
        element={<Test />}
      />
      
    </Routes>
        </>
  );
}

export default App;
