import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoRemoveCircle } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { MdOutlineCheckCircle } from "react-icons/md";
import { useState, useEffect } from "react";
function Detailes() {
  const { id } = useParams();
  const allproperties = useSelector((state) => state.admin.properties);
  const SelectedProperty = allproperties.filter((item) => item._id === id);
  console.log("SelectedProperty", SelectedProperty);
  const savedVerifyState = localStorage.getItem("verify") === "true";
  const [verify, setVerify] = useState(savedVerifyState);
  useEffect(() => {
    localStorage.setItem("verify", verify);
  }, [verify]);
  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl h-1/4 hover:bg-gray-100 dark:border-gray-700  ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={SelectedProperty[0].images[0]}
          alt="property"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {SelectedProperty[0].Propertyname}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {SelectedProperty[0].description}
          </p>
          <div className="flex justify-start gap-4 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded">
              <IoRemoveCircle />
              <span>Remove</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded"
              onClick={() => setVerify(!verify)}
            >
              {verify ? (
                <MdOutlineCheckCircle className="text-green-400" />
              ) : (
                <MdVerified className="text-white" />
              )}
              <span>{verify ? "Verified" : "Verify"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailes;
