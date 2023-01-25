import React from 'react'
import About from '../../../components/About/About'
import AvailableMatches from '../../../components/AvailableMatches/AvailableMatches'
import BlogList from '../../../components/BlogList/BlogList'
import Contact from '../../../components/contact/Contact'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/Hero/Hero'

function Home() {
  return (
    <React.Fragment>
        <Hero />
        <AvailableMatches />
        <About />
        <BlogList />
        <Contact />
        <Footer />
    </React.Fragment>
  )
}
export default Home