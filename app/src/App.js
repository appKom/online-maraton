import logo from './logo.svg';
import './App.css';
import HeaderResponsive from './components/Header';

function App() {

  const links = [
    { label: 'Sponsorer', link: '/' },
    { label: 'Om arrangementet', link: '/' },
    { label: 'Ledertavle', link: '/' },
  ];

  return (
    <HeaderResponsive links={links}/>
  );
}

export default App;
