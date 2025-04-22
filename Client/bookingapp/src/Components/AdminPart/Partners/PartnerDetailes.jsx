/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AllPartners } from "../../../Features/adminSlice";
import axiosInstance from "../../../Axios/axiosinstance";
function PartnerDetailes() {
  const [properties, setProperties] = useState([]);
  const [revenuew, setRevenuew] = useState([]);
  console.log("partner revenuew", revenuew);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const partners = useSelector((state) => state.admin.partners);
  const selectedpartner = partners.filter((item) => item._id === id);

  useEffect(() => {
    const fetch = async () => {
      const res = await axiosInstance.get(
        `/propertyByPartner/${selectedpartner[0]._id}`
      );
      console.log("response of partner propery");
      setProperties(res.data.propertypartner);

      const response = await axiosInstance.get(`/revenuewpartner`);

      setRevenuew(response.data.result);
    };
    fetch();
  }, []);

  const handleRemove = async (partnerid) => {
    console.log("partnerid", partnerid);

    const res = await axiosInstance.delete(`/deletepartner/${partnerid}`);
    if (res.status === 200) {
      const updatedPartners = partners.filter((item) => item._id !== partnerid);

      dispatch(AllPartners(updatedPartners));
      navigate(`/partnerslist`);
    } else {
      console.error("Failed to delete the partner.");
    }
  };
  return (
    <>
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center pb-6">
          {selectedpartner[0]?.profileImage ? (
            <img
              className="w-28 h-28 mb-4 rounded-full shadow-lg ring-4 ring-blue-300"
              src={selectedpartner[0].profileImage}
              alt={selectedpartner[0].firstname || "Partner"}
            />
          ) : (
            <div className="w-28 h-28 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md">
              {selectedpartner[0]?.firstname
                ? selectedpartner[0]?.firstname.slice(0, 1)
                : selectedpartner[0]?.email.slice(0, 1)}
            </div>
          )}
          <h5 className="mb-2 text-2xl font-semibold text-blue-900 capitalize">
            {selectedpartner[0]?.firstname || "Unknown Partner"}
          </h5>
          <p className="mb-1 text-md text-gray-700">
            {selectedpartner[0]?.email}
          </p>
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 text-sm text-white bg-blue-900 rounded-full shadow-sm">
              {selectedpartner[0]?.admin ? "Administrator" : "Partner"}
            </span>

            {properties.length === 0 && (
              <button
                onClick={() => handleRemove(selectedpartner[0]._id)}
                className="text-white bg-red-600 rounded-full py-1 px-3 text-sm hover:bg-red-200"
              >
                Delete
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto border-t border-gray-200 mt-6 pt-4 ">
          <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 sm:p-6 transition-shadow duration-300">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">
              Total Revenue
            </h2>
            <p className="text-3xl font-extrabold text-gray-800 mt-2">
            ₹{revenuew.find((item) => item._id === id)?.revenuew || 0}
            </p>
          </div>
          <h3 className="text-lg font-medium text-blue-900 mb-4">Properties</h3>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-blue-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Property Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            {properties.length > 0 ? (
              properties.map((item, index) => (
                <tbody key={index}>
                  <tr className="bg-white border-b hover:bg-blue-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <img src={item.images[0]} className="h-20 w-20 rounded-md"/><span>{item.Propertyname}</span> 
                     
                    </th>
                    <td className="px-6 py-4">{item.type}</td>
                    <td className="px-6 py-4">₹{item.pricePerNight}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No properties available.
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default PartnerDetailes;
