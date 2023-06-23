import './App.css';
import Footer from './Footer';
import Header from './Header';
import Content from '../pages/Content';

function App({children}) {
  return (
    <div id="wrap">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;
