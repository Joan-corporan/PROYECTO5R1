
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { MainRouter } from './router/MainRouter'
import  'react-toastify/dist/ReactToastify.css' ;
import { ToastContainer} from 'react-toastify';


function App() {
  

  return (
    <div className='bgi'>
      <Navbar/>
      <MainRouter/>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
