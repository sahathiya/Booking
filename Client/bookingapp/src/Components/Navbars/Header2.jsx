// import React from 'react'
// import SearchingProperty from '../Search/SearchingProperty'

// function Header2() {
//   return (
//     <div>
//       <div className="bg-blue-900  ">
//         <div className="container ml-[130px] flex flex-col gap-2 mx-auto">
//           <h1 className="text-5xl text-white font-bold ">Find your next stay</h1>
//           <p className="text-2xl text-white">
//             Search low prices on hotels for your dream vacation...
//           </p>
//         </div>
        
//         <br/>
//         <SearchingProperty/>
//       </div>
      
//     </div>
//   )
// }

// export default Header2



// import React from 'react';
// import SearchingProperty from '../Search/SearchingProperty';

// function Header2() {
//   return (
//     <div>
//       <div className="bg-blue-900 px-4 py-8">
//         <div className="container text-center md:text-left ml-24 ">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold ">
//             Find your next stay
//           </h1>
//           <p className="text-xl sm:text-2xl text-white mt-2">
//           Search low prices on hotels, homes and much more...
//           </p>
//         </div>
        
//         <br />
//         <div className="mx-auto mt-4">
//           <SearchingProperty />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header2;


import React from 'react';
import SearchingProperty from '../Search/SearchingProperty';

function Header2() {
  return (
    <div>
      <div className="bg-blue-900 px-4 py-8">
        <div className="container flex  justify-evenly mx-auto  text-center md:text-left">
          <div className='w-1/2'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
            Find your next stay
          </h1>
          <p className="text-xl sm:text-2xl text-white mt-2">
            Search low prices on hotels, homes and much more...
          </p>
          </div>
          <div className='w-1/5'>
              
          </div>

        </div>

        <div className="mx-auto mt-6 md:mt-8">
          <SearchingProperty />
        </div>
      </div>
    </div>
  );
}

export default Header2;
