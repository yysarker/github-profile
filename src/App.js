import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from './components/users/Users';
function App() {
     const siteLogo = {
          title: "Github Profile Finder",
          icon: "fab fa-github"
     }
     return (
          <div className='App '>
               <Navbar logo={siteLogo}></Navbar>
               <div className="container">
                    <Users></Users>
               </div>
          </div>
     );
}

export default App;
