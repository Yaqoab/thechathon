import { ChakraProvider } from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom';
import DashBoard from './components/dashboard';
// import Footer from './components/footer';
import Home from './components/home';
import Layout from './components/layout';
import Login from './components/login';
// import Navbar from './components/navbar';
import Register from './components/register';

function App() {
  return (
    <div className='app'>
    
      <ChakraProvider>
        <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="register" element={<Register />} />
           <Route path="login" element={<Login />} />
           <Route path="dashboard" element={<DashBoard />} />
         </Route>
         
        </Routes>
     </ChakraProvider>
     
    </div>
    
  );
}

export default App;
