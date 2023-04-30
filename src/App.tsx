import { useState } from 'react'
import './App.css'
import styles from './body.module.css'
import Header from './components/header/Header'
import LeftBar from './components/leftbar/LeftBar'
import CalendarCom from './components/calendar/CalendarCom'

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import ClientComp from './components/client/ClientComp'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<CalendarCom />} />
        <Route path='/client' element={<ClientComp />} />
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
    </div>
  )
}