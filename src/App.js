
import Login from './components/login/login';
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './components/login/home';




const App = () => {
  

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
  );
};

export default App;