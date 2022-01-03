import './App.css';
import Navbar from "./components/layout/Navbar";
import UserItem from './components/users/UserItem';
function App() {
     const siteLogo = {
          title: "Github Profile Finder",
          icon: "fab fa-github"
     }
     return (
          <div className='App '>
               <Navbar logo={siteLogo}></Navbar>
               <UserItem></UserItem>
          </div>
     );
}

export default App;
