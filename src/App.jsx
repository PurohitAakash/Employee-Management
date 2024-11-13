
import './App.css'
import EmployeeComponent from './Components/EmployeeComponent'
import Footer from './Components/Footer'
import HeaderComponent from './Components/HeaderComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
         <Routes>
          {/* //http://localhost:3000 */}
          <Route path='/' element = {  <ListEmployeeComponent />  }> </Route>
          {/* //http://localhost:3000/employees */}
          <Route path='/employees' element = { <ListEmployeeComponent />}></Route>
          {/* //http://localhost:3000/add-employee */}
          <Route path='/add-employee' element = { <EmployeeComponent /> } ></Route>
          {/* //https://localhost:3000/edit-employee */}
          <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
         </Routes>
        <Footer/>
      </BrowserRouter>
    </>
   
  )
}

export default App
