/* eslint-disable no-unused-vars */


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
  const [totalRevenue, setTotalRevenue] = useState([]);
  const [dailyRevenue, setDailyRevenue] = useState([]);
console.log("totalRevenue",totalRevenue.totalRevenuew)

  const x1Labels = dailyRevenue.map((item) => item.day) || [];
  const dailyData = dailyRevenue.map((item) => item.revenue) || [];
 const data= [
    {   label: "Total bookings",value: 1000 },//bookings
    {   label: "Total revenue",value: totalRevenue.totalRevenuew} ,
    
  ]


  useEffect(() => {
    const fetchData = async () => {
      const revenueRes = await axiosInstance.get(`/totalRevenew`);
      console.log("revenueRes",revenueRes);
      
      setTotalRevenue(revenueRes.data.revenew[0]);

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
    

  

    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h2 className="text-gray-500 text-sm font-semibold uppercase">
        Total Bookings
      </h2>
      <p className="text-3xl font-extrabold text-gray-800 mt-2">{bookings}</p>
    </div>

    
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h2 className="text-gray-500 text-sm font-semibold uppercase">
        Total Guests
      </h2>
      <p className="text-3xl font-extrabold text-gray-800 mt-2">{allusers.length}</p>
    </div>

    
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h2 className="text-gray-500 text-sm font-semibold uppercase">
        Cancelled Bookings
      </h2>
      <p className="text-3xl font-extrabold text-gray-800 mt-2">{cancel}</p>
    </div>

    
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h2 className="text-gray-500 text-sm font-semibold uppercase">
        Total Revenue
      </h2>
      <p className="text-3xl font-extrabold text-gray-800 mt-2">
        {/* ₹{totalRevenue[0] ? totalRevenue[0].totalRevenuew : 0} */}
       {totalRevenue.totalRevenuew}
      </p>
    </div>
  </div>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300 flex justify-center items-center h-[500px]">
      
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

   
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
      <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
        Revenue Overview
      </h3>
      {dailyData.length > 0 ? (
        <div className="overflow-auto">
          <LineChart
            width={600} 
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
