import React from 'react'
import style from './Hero.module.css'

function Hero() {


  

    const bgimg = 'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
        <div className={`${style.main}`}>
          <div className={style.text}>
            <div className={style.title}>Gamasta</div>
            <div className={style.desc}>we provide best service internationally....</div>
          </div>
          <div className={style.btn}>Book your match now</div>

            <img src={bgimg} className={`img-fluid ${style.bgimg}`} />
    </div>
  )
}

export default Hero