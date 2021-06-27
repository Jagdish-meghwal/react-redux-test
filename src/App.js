import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './Components/styles.css'

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="row">
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
