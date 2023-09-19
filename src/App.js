import logo from './logo.svg';
import Tracks from './components/Tracks';
import Header from './components/Header';
import Card from './components/Card';
import Table from './components/Table';
import Merch from './components/Merch';
import Suscribe from './components/Subscribe';
import Footer from './components/Footer';
import Ghost from './components/Ghost';
function App() {
  return (
    <div className="bg-[#121212] ">
  <Header/>
  <Card/>
  <Tracks/>
  <Merch/>
  <Table/>
  <Suscribe/>
  <Footer/>
 
    </div>
  );
}

export default App;
