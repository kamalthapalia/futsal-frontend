import React from 'react'
import AvailableMatches from '../../../components/AvailableMatches/AvailableMatches'
import wel from './Welcome.module.css'

function Welcome(){
  const username = "kamalthapalia";
  return(
    <section className={wel.section}>
    <div className="container">
      <div className={wel.main}>
        <span className={wel.welcome}>WELCOME!!!</span><br />
        <span className={wel.name}>@{username}</span>
        <div className={wel.desc}>You can play <span className={wel.no}>10</span> more matches to get a free bonus booking.</div>
      </div>
    </div>
    </section>
  )
}


function Dash() {
  return (
    <section>
      {/* <Booking /> */}
      <Welcome />
     <AvailableMatches /> 
    </section>
  )
}

export default Dash