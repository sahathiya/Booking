import React, { useEffect, useState } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import axiosInstance from '../../../Axios/axiosinstance';
function DashboardChart() {
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
            
        }
        fetch()
    },[])
  return (
    <>
       {/* Line Chart */}
       <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300">
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



