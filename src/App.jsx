import './App.css'
import MainContainer from './mainContainer'
import NavBar from './navBar'
import Footer from './Footer';

function App() {
  return (
    <>
    <div id="container">
      <div id="navbar">
       <NavBar />
       </div> 
      <div id="main-section">
       <MainContainer />
      </div>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </>
  );
}

export default App
