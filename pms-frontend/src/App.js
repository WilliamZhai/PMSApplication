import './App.css';
import NavigationBar from './Components/Navigation/Navbar';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import TeacherDetails from './TeacherDetails';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

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
