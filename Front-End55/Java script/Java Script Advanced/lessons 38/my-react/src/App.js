import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import MainContent from './Components/MainContent';


const App = () => {
  return (
    <div className="MainClases">
    	  <Header />
			 <NavBar />
       <MainContent />
	</div>
  );
}



export default App;
