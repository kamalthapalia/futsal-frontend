import React from 'react'
import AvailableMatches from '../../../components/AvailableMatches/AvailableMatches'
import {Statstics , MatchesPlayed } from '../Statstics/Statstics';
import wel from './Welcome.module.css'

function Welcome(){
  return(
    <section className={wel.section}>
    <div className="container">
      
    </div>
    </section>
  )
}


function Dash({setShowPopup , setBookDate , setPrice}) {
  return (
    <section>
      {/* <Booking /> */}
      <Welcome />
      <Statstics />
     <AvailableMatches setShowPopup={setShowPopup} setBookDate={setBookDate} setPrice={setPrice}/> 
     <MatchesPlayed />
    </section>
  )
}

export default Dash