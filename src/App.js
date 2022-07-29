import './App.css';
// import Register from './components/Register';
// import SideBar from './components/SideBar';
import {BrowserRouter} from 'react-router-dom'
import MainPage from './components/MainPage';

function App() {
  return (
<BrowserRouter>
<MainPage />
</BrowserRouter>
  );
}

export default App;
