import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home/Home.js'
import Users from './Pages/Users.js'
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Navbar from './components/Nav/Navbar.js'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </Provider>
  )
}
export default App