import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import FirstLayout from './pages/FirstLayout';
import Home from './pages/Home';
import Players from './pages/Players';
import Staff from './pages/Staff';
import Matches from './pages/Matches';
import AllLayout from './pages/AllLayout';
import LayoutNav from './pages/LayoutNav';

const App=()=>{
  return(
    <>

     <Router>
      <Routes>
        <Route path='/' element={<FirstLayout />} >
        <Route index element={<Home />} />
        <Route path='players' element={<Players />} />
        <Route path='/players/:id' element={<AllLayout />} />
        <Route path='staff' element={<Staff />} />
        <Route path='matches' element={<Matches />} />
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App;