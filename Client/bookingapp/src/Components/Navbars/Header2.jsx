import React from 'react'
import SearchingProperty from '../Search/SearchingProperty'

function Header2() {
  return (
    <div>
      <div className="bg-blue-900 pb-16">
        <div className="container ml-[270px] flex flex-col gap-2">
          <h1 className="text-5xl text-white font-bold ">Find your next stay</h1>
          <p className="text-2xl text-white">
            Search low prices on hotels for your dream vacation...
          </p>
        </div>
        
      </div>
      <SearchingProperty/>
    </div>
  )
}

export default Header2


