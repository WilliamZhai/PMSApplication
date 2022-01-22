import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/Navigation/Navbar';
import HomePage from './Components/Pages/HomePage';
import CreatePage from './Components/Pages/CreatePage';
import TeacherDetails from './TeacherDetails';
import AdministrationPage from './Components/Pages/AdministrationPage';
import NotFound from './NotFound';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar></NavigationBar>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/teachers/">
              <Route path=":id" element={<TeacherDetails/>}/>
            </Route>
            <Route path="/administration" element={<AdministrationPage/>}/>
            <Route path="*" element={<NotFound/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
