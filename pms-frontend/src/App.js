import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/Navigation/Navbar';
import Home from './Components/Pages/Home';
import Create from './Components/Pages/Create';
import TeacherDetails from './TeacherDetails';
import NotFound from './NotFound';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar></NavigationBar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/teachers/">
              <Route path=":id" element={<TeacherDetails/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
