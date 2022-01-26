import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './Pages/HomePage';
import CreatePage from './Pages/CreatePage';
import AdministrationPage from './Pages/AdministrationPage';
import NotFoundPage from './Pages/NotFoundPage';

import NavigationBar from './Components/Navigation/Navbar';
import TeacherDetails from './TeacherDetails';

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
            <Route path="*" element={<NotFoundPage/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
