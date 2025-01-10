// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { IoMdStar ,IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import axiosInstance from '../../../Axios/axiosinstance'
// function Reviews() {
 

// const[Reviews,setReviews]=useState([])
// const rating=Reviews.map((item,index)=>item.rating[index])
// console.log("rating",rating);

// const fullStars = Math.floor(rating); // Integer part for full stars
// console.log("fullStars",fullStars);

//   const halfStars = Math.ceil(rating - fullStars); // Remainder for half stars
//   const emptyStars = 5 - fullStars - halfStars; // The remaining stars are empty
//  useEffect(()=>{
//   const fetch=async()=>{
//     const res=await axiosInstance.get(`/reviews`)
//   console.log("resres",res);
//   setReviews(res.data.reviews)
  
//   }
//   fetch()
//  },[])
  
//   return (
//     <div>
      


//   {Reviews.map((item)=>(
//     <article>
//       <div class="flex items-center mb-4">
//         <img class="w-10 h-10 me-4 rounded-full" src={item.guest.profileImage} alt=""/>
//         <div class="font-medium ">
//             <p>{item.guest.firstname} {item.guest.lastname} <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
//         </div>
//     </div>
//     <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
//     {/* <IoMdStar className='text-yellow-500 text-xl' /> */}
//     {[...Array(fullStars)].map((_, index) => (
//         <IoMdStar key={`full-${index}`} className="text-yellow-500 text-xl" />
//       ))}

//       {/* Render half stars */}
//       {[...Array(halfStars)].map((_, index) => (
//         <IoMdStarHalf key={`half-${index}`} className="text-yellow-500 text-xl" />
//       ))}

//       {/* Render empty stars */}
//       {[...Array(emptyStars)].map((_, index) => (
//         <IoMdStarOutline key={`empty-${index}`} className="text-yellow-500 text-xl" />
//       ))}
//     </div>
//     <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
//     <p class="mb-2 text-gray-500 dark:text-gray-400">{item.guest.comment}</p>
    
    
//     <aside>
//         <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
//         <div class="flex items-center mt-3">
//             <a href="#" class="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
//             <a href="#" class="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Remove</a>
//         </div>
//     </aside>
// </article>
//   ))}
    

//     </div>
//   )
// }

// export default Reviews



import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../Axios/axiosinstance'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';


function Reviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const res = await axiosInstance.get(`/reviews`)
      console.log("resres", res);
      setReviews(res.data.reviews)
    }
    fetch()
  }, [])
const handleRemove=async(reviewId)=>{
  const response =await axiosInstance.delete(`/removereview/${reviewId}`)
  alert(response.data.message)

}
  return (
    <div>
      {reviews.map((item) => {
        // Calculate the stars for each review
        const rating = item.rating; // Assuming each item has a 'rating' field
        const fullStars = Math.floor(rating); // Integer part for full stars
        const halfStars = rating % 1 !== 0 ? 1 : 0; // If the rating has a decimal, add half star
        const emptyStars = 5 - fullStars - halfStars; // The remaining stars are empty

        return (
          <article key={item._id} className="mb-6">
            <div className="flex items-center mb-4">
              {item.guest.profileImage?(
                <img className="w-10 h-10 me-4 rounded-full" src={item.guest.profileImage} alt="" />
              ):(
                <div 
        className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg"
      >
        {item.guest.firstname ? item.guest.firstname.slice(0, 1) : item.guest.email.slice(0, 1)}
      </div>
              )}
              
              <div className="font-medium">
                <p>{item.guest.firstname} {item.guest.lastname} <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
              </div>
            </div>
            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              {/* Render full stars */}
              {[...Array(fullStars)].map((_, index) => (
                <IoMdStar key={`full-${index}`} className="text-yellow-500 text-xl" />
              ))}

              {/* Render half star */}
              {halfStars === 1 && (
                <IoMdStarHalf key="half" className="text-yellow-500 text-xl" />
              )}

              {/* Render empty stars */}
              {[...Array(emptyStars)].map((_, index) => (
                <IoMdStarOutline key={`empty-${index}`} className="text-yellow-500 text-xl" />
              ))}
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>Reviewed in {new Date(item.createdAt).toLocaleDateString()}</p>

            </footer>
            <p className="mb-2 text-gray-500 dark:text-gray-400">{item.comment}</p>
            <aside>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.likes.length} people found this helpful</p>
              <div className="flex items-center mt-3">
              <button className='text-blue-500 hover:text-blue-800'>Edit</button>
                <button className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 "
                onClick={()=>handleRemove(item._id)}
                >Remove</button>
              </div>
            </aside>
          </article>
        );
      })}
    </div>
  )
}

export default Reviews;
