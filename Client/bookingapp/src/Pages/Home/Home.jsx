import React from 'react'
import Navbar from '../../Components/Navbars/Navbar'
import Header from '../../Components/Navbars/Header'

import PropertyCard from '../../Pages/Home/Homepage'
import Navbar2 from '../../Components/Navbars/Navbar2'
import Header2 from '../../Components/Navbars/Header2'
import Header3 from '../../Components/Navbars/Header3'

function Home() {
  return (
    <div>
    <div>
    <Navbar/>
    <Header3/>
      {/* <Header/> */}
      <Header2/>
      {/* <Navbar2/> */}
      <PropertyCard/>
    </div>
      
    </div>
  )
}

export default Home






