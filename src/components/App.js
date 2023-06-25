import './App.css';
import Footer from './Footer';
import Header from './Header';

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