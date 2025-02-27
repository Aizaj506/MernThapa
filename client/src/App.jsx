import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import Logout from './pages/Logout'
import AdminLayout from './components/layouts/Admin-Layout'
import Users from './pages/Admin/users'
import UpdateSingleUser from './pages/Admin/UpdateSingleUser'
import Contacts from './pages/Admin/contacts'
import Services from './pages/Admin/Services'

const App = () => {

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path='admin' element={<AdminLayout />}>
              <Route path='users' element={<Users />} />
              <Route path='users/:id/edit' element={<UpdateSingleUser />} />
              <Route path='contacts' element={<Contacts />} />
              <Route path='services' element={<Services />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
