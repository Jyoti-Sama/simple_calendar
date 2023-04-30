import { useState } from 'react'
import './App.css'
import styles from './body.module.css'
import Header from './components/header/Header'
import LeftBar from './components/leftbar/LeftBar'
import CalendarCom from './components/calendar/CalendarCom'

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import ClientComp from './components/client/ClientComp'
import ClientDetailPage from './components/client/ClientDetailPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<CalendarCom />} />
        <Route path='/clients' element={<ClientComp />} />
        <Route path="/client/:client_id" element={<ClientDetailPage />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

const Root = () => {
  return (
    <div className={styles['container']}>
      <Header />
      <LeftBar />
      <Outlet />
      <Footer />
    </div>
  )
}

const Footer = () => {
  return (
    <footer
      style={{
        height: "30px",
        display: "flex",
        alignItems: "center",
        padding: "0 0 0 20px",
        fontSize: "11px",
        opacity: 0.5
      }}
    >
      © 2023 Simple Calendar · Terms · Privacy & Security · Support · Licensed Content
    </footer>
  )
}