import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
