import React, { useEffect, useState } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import axiosInstance from '../../../Axios/axiosinstance';
import { useSelector } from 'react-redux';
function DashboardChart() {
  const allbookings=useSelector((state)=>state.admin.bookings)
  console.log("allbookings.....count",allbookings.length);
  const allusers=useSelector(state=>state.admin.users)
  console.log("allusers...count",allusers.length);
  
  const[bookings,setbookings]=useState(0)
  const[cancel,setCancel]=useState(0)
    const [totalRevenew,setTotalRevenew]=useState(0)
    const [dailyRevenue, setDailyRevenue] = useState([]);
console.log("dailyRevenue",dailyRevenue);

    console.log("totalRevenew",totalRevenew);
    const x1Labels = dailyRevenue.map((item) => item.day) || [];
  const dailyData = dailyRevenue.map((item) => item.revenue) || [];
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axiosInstance.get(`/totalRevenew`)
            console.log("res",res);
            
            setTotalRevenew(res.data.revenew)

            const response=await axiosInstance.get(`/dailyrevenew`)
            console.log("reeeeeee",response);
            setDailyRevenue(response.data.dailyRevenue)
            

            const ressss=await axiosInstance.get('/cancelled')
            console.log("ressss",ressss);
            
            setCancel(ressss.data.count)


            const ress=await axiosInstance.get('/totalbookings')
            console.log("ress",ress);
            
            setbookings(ress.data.count)
        }
        fetch()
    },[])
  return (
    <>
       {/* Line Chart */}
       <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">
              Total bookings
            </h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">
              {bookings}
            </p>
          </div>

          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">
              Total Guest
            </h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">
             {allusers.length}
            </p>
          </div>

          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">
              Cancelled bookings
            </h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">
             {cancel}
            </p>
          </div>
          </div>
            <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
              Revenew Overview
            </h3>
            <h1 className="text-2xl font-bold">Total Revenue: ₹{totalRevenew[0]?totalRevenew[0].totalRevenuew:0}</h1>
           

          {dailyData.length > 0 ? (
              <LineChart
                width={400}
                height={300}
                series={[{ data: dailyData, label: "Daily Revenue" }]}
                xAxis={[{ scaleType: "point", data: x1Labels }]}
              />
            ) : (
              <p className="text-gray-500">No data available for the chart</p>
            )}
          </div>
    </>
  )
}

export default DashboardChart



