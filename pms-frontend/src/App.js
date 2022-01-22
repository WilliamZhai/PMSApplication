import './App.css';
import Navbar from './Navbar';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import TeacherDetails from './TeacherDetails';
import NotFound from './NotFound';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
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
