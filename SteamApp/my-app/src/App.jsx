// import React from 'react';
// import './App.css'
// import Navbar from './components/Navbar'
// import Panel from './components/Panel';
// import Games from './components/Games'
// import { datafunc } from './redux/slices/dataSlice';
// import { useDispatch } from 'react-redux';



// function App() {
//   const dispatch = useDispatch()
//   dispatch(datafunc())
//   return (
//     <div className="App">

//           <div className='Navbar'>
//             <Navbar />
//           </div>
//           <div className='container'>
//             <div className="section one">
//               <Panel />
//             </div>
//             <div className="section two">
//               <Games />
//             </div>
//           </div>
//     </div>
//   )
// }

// export default App



import React, { useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/jsx/Navbar';
import Details from './pages/details/details';
import Footer from './components/jsx/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { datafunc } from './redux/slices/dataSlice';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(datafunc());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router>
        <div className='Navbar'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games/:id' element={<Details />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
