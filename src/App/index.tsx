import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { Navigation } from "../Components/Navigation";
import { Home } from "../Pages/Home";
import { Admin } from "../admin/Admin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { About } from "../Pages/About";
import { Amenities } from "../Pages/Amenities";
import { Events } from "../Pages/Events";
import { Contact } from "../Pages/Contact";
import apis from "../Api";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../Components/Footer";

let events: any;
let Data

const fetchEventsData = async () => {
  Data = await apis.getAllEvents()
  const DataFormatted = Data.data.data
  events = DataFormatted
  console.log('data fetched')
}

try {
  await fetchEventsData()
  console.log(events)
} catch(err){
  console.log(err)
}

export default function App() {
  const [message, setMessage] = useState("");

  const queryClient = new QueryClient()

  Data = React.useMemo(() => events, [])

  return (
      <>
        <div className="App">

          {/* background */}
          <>
            <div className="d-none d-lg-block largeBackground position-fixed" style={{zIndex: '-1', position: 'absolute'}}/>
            <div className="d-none d-md-block d-lg-none mediumBackground position-fixed" style={{zIndex: '-1', position: 'absolute'}}/>
            <div className="d-block d-md-none smallBackground position-fixed" style={{zIndex: '-1', position: 'absolute'}}/>
          </>

          {/* end background */}
          
          <Navigation events={Data}/>


          <div className="d-none d-lg-flex justify-content-center flex-column">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/admin' element={<Admin />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/amenities' element={<Amenities />}/>
              <Route path='/events' element={<Events events={Data}/>}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
          </div>


          <Footer />

        </div>
      </>
  );
}