import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Pages'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </DataProvider>
  )
}

export default App
