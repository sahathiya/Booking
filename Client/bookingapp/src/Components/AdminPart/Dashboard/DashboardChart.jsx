// import React, { useEffect, useState } from 'react'
// import { LineChart } from '@mui/x-charts/LineChart';
// import axiosInstance from '../../../Axios/axiosinstance';
// import { useSelector } from 'react-redux';
// function DashboardChart() {
//   const allbookings=useSelector((state)=>state.admin.bookings)
//   console.log("allbookings.....count",allbookings.length);
//   const allusers=useSelector(state=>state.admin.users)
//   console.log("allusers...count",allusers.length);

//   const[bookings,setbookings]=useState(0)
//   const[cancel,setCancel]=useState(0)
//     const [totalRevenew,setTotalRevenew]=useState(0)
//     const [dailyRevenue, setDailyRevenue] = useState([]);
// console.log("dailyRevenue",dailyRevenue);

//     console.log("totalRevenew",totalRevenew);
//     const x1Labels = dailyRevenue.map((item) => item.day) || [];
//   const dailyData = dailyRevenue.map((item) => item.revenue) || [];
//     useEffect(()=>{
//         const fetch=async()=>{
//             const res=await axiosInstance.get(`/totalRevenew`)
//             console.log("res",res);

//             setTotalRevenew(res.data.revenew)

//             const response=await axiosInstance.get(`/dailyrevenew`)
//             console.log("reeeeeee",response);
//             setDailyRevenue(response.data.dailyRevenue)

//             const ressss=await axiosInstance.get('/cancelled')
//             console.log("ressss",ressss);

//             setCancel(ressss.data.count)

//             const ress=await axiosInstance.get('/totalbookings')
//             console.log("ress",ress);

//             setbookings(ress.data.count)
//         }
//         fetch()
//     },[])
//   return (
//     <>
//        {/* Line Chart */}
//        <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//             <h2 className="text-gray-500 text-sm font-semibold uppercase">
//               Total bookings
//             </h2>
//             <p className="text-3xl font-extrabold text-gray-800 mt-2">
//               {bookings}
//             </p>
//           </div>

//           <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//             <h2 className="text-gray-500 text-sm font-semibold uppercase">
//               Total Guest
//             </h2>
//             <p className="text-3xl font-extrabold text-gray-800 mt-2">
//              {allusers.length}
//             </p>
//           </div>

//           <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
//             <h2 className="text-gray-500 text-sm font-semibold uppercase">
//               Cancelled bookings
//             </h2>
//             <p className="text-3xl font-extrabold text-gray-800 mt-2">
//              {cancel}
//             </p>
//           </div>
//           </div>
//             <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
//               Revenew Overview
//             </h3>
//             <h1 className="text-2xl font-bold">Total Revenue: ₹{totalRevenew[0]?totalRevenew[0].totalRevenuew:0}</h1>

//           {dailyData.length > 0 ? (
//               <LineChart
//                 width={400}
//                 height={300}
//                 series={[{ data: dailyData, label: "Daily Revenue" }]}
//                 xAxis={[{ scaleType: "point", data: x1Labels }]}
//               />
//             ) : (
//               <p className="text-gray-500">No data available for the chart</p>
//             )}
//           </div>
//     </>
//   )
// }

// export default DashboardChart

import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import axiosInstance from "../../../Axios/axiosinstance";
import { useSelector } from "react-redux";
import { PieChart } from "@mui/x-charts/PieChart";

function DashboardChart() {
  const allbookings = useSelector((state) => state.admin.bookings);
  const allusers = useSelector((state) => state.admin.users);

  const [bookings, setBookings] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [dailyRevenue, setDailyRevenue] = useState([]);
console.log("totalRevenue",totalRevenue[0].totalRevenuew);

  const x1Labels = dailyRevenue.map((item) => item.day) || [];
  const dailyData = dailyRevenue.map((item) => item.revenue) || [];
 const data= [
    {   label: "Total bookings",value: 1000 },//bookings
    {   label: "Total revenuew",value: totalRevenue[0].totalRevenuew} ,
    
  ]


  useEffect(() => {
    const fetchData = async () => {
      const revenueRes = await axiosInstance.get(`/totalRevenew`);
      setTotalRevenue(revenueRes.data.revenew);

      const dailyRes = await axiosInstance.get(`/dailyrevenew`);
      setDailyRevenue(dailyRes.data.dailyRevenue);

      const cancelRes = await axiosInstance.get("/cancelled");
      setCancel(cancelRes.data.count);

      const bookingsRes = await axiosInstance.get("/totalbookings");
      setBookings(bookingsRes.data.count);
    };

    fetchData();
  }, []);

  return (
    // <div className="p-4 sm:p-6 md:p-8 lg:p-10">
    //   {/* Cards Section */}
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    //     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
    //       <h2 className="text-gray-500 text-sm font-semibold uppercase">
    //         Total Bookings
    //       </h2>
    //       <p className="text-3xl font-extrabold text-gray-800 mt-2">
    //         {bookings}
    //       </p>
    //     </div>

    //     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
    //       <h2 className="text-gray-500 text-sm font-semibold uppercase">
    //         Total Guests
    //       </h2>
    //       <p className="text-3xl font-extrabold text-gray-800 mt-2">
    //         {allusers.length}
    //       </p>
    //     </div>

    //     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
    //       <h2 className="text-gray-500 text-sm font-semibold uppercase">
    //         Cancelled Bookings
    //       </h2>
    //       <p className="text-3xl font-extrabold text-gray-800 mt-2">{cancel}</p>
    //     </div>

    //     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
    //       <h2 className="text-gray-500 text-sm font-semibold uppercase">
    //         Total Revenue
    //       </h2>
    //       <p className="text-3xl font-extrabold text-gray-800 mt-2">
    //         ₹{totalRevenue[0] ? totalRevenue[0].totalRevenuew : 0}
    //       </p>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     <PieChart
    //       series={[
    //         {
    //           data: [
    //             { id: 0, value: 10, label: "series A" },
    //             { id: 1, value: 15, label: "series B" },
    //             { id: 2, value: 20, label: "series C" },
    //           ],
    //           innerRadius: 30,
    //           outerRadius: 100,
    //           paddingAngle: 5,
    //           cornerRadius: 5,
    //           startAngle: -45,
    //           endAngle: 225,
    //           cx: 150,
    //           cy: 150,
    //         },
    //       ]}
    //     />
    //     {/* Chart Section */}
    //     <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
    //       <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
    //         Revenue Overview
    //       </h3>
    //       {dailyData.length > 0 ? (
    //         <div className="overflow-auto">
    //           <LineChart
    //             width={600} // Adjust width for responsiveness
    //             height={300}
    //             series={[{ data: dailyData, label: "Daily Revenue" }]}
    //             xAxis={[{ scaleType: "point", data: x1Labels }]}
    //           />
    //         </div>
    //       ) : (
    //         <p className="text-gray-500 text-center">
    //           No data available for the chart
    //         </p>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
  {/* Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    {/* Card 1: Total Bookings */}
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h2 className="text-gray-500 text-sm font-semibold uppercase">
        Total Bookings
      </h2>
      <p className="text-3xl font-extrabold text-gray-800 mt-2">{bookings}</p>
    </div>

    {/* Card 2: Total Guests */}
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h2 className="text-gray-500 text-sm font-semibold uppercase">
        Total Guests
      </h2>
      <p className="text-3xl font-extrabold text-gray-800 mt-2">{allusers.length}</p>
    </div>

    {/* Card 3: Cancelled Bookings */}
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h2 className="text-gray-500 text-sm font-semibold uppercase">
        Cancelled Bookings
      </h2>
      <p className="text-3xl font-extrabold text-gray-800 mt-2">{cancel}</p>
    </div>

    {/* Card 4: Total Revenue */}
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h2 className="text-gray-500 text-sm font-semibold uppercase">
        Total Revenue
      </h2>
      <p className="text-3xl font-extrabold text-gray-800 mt-2">
        ₹{totalRevenue[0] ? totalRevenue[0].totalRevenuew : 0}
      </p>
    </div>
  </div>

  {/* Chart Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Pie Chart */}
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300 flex justify-center items-center ">
      <PieChart
        series={[
          {
            data,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 225,
            cx: 150,
            cy: 150,
            
          },
        ]}
      />
    </div>

    {/* Line Chart */}
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
        Revenue Overview
      </h3>
      {dailyData.length > 0 ? (
        <div className="overflow-auto">
          <LineChart
            width={600} // Adjust width for responsiveness
            height={300}
            series={[{ data: dailyData, label: "Daily Revenue" }]}
            xAxis={[{ scaleType: "point", data: x1Labels }]}
          />
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          No data available for the chart
        </p>
      )}
    </div>
  </div>
</div>

  );
}

export default DashboardChart;
