import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch, FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [layout, setLayout] = useState(3);
  useEffect(() => {
    // Fetch available foods from the API
    axios.get("https://server-side-navy.vercel.app/movies").then((response) => {
      setFoods(response.data);
    });
  }, []);

  const toggleLayout = () => {
    setLayout((prev) => (prev === 3 ? 2 : 3));
  };
  console.log(layout);
  return (
    <div className="pb-20 pt-10">
      <div className=" w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-teal-600">
          Available Foods
        </h1>

        <div className="flex flex-col gap-6 lg:flex-row justify-between items-center mb-6">
          <button className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
            <FaSort /> Sort by Expire Date
          </button>

          <div className="flex items-center gap-2 border rounded px-2  shadow-md">
            <FaSearch className="text-teal-500" />
            <input
              type="text"
              placeholder="Search food name"
              className="outline-none px-2 py-1 bg-transparent"
            />
          </div>

          <button
            onClick={toggleLayout}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
          >
            Toggle Layout
          </button>
        </div>

        <div className={`grid sm:grid-cols-1 lg:grid-cols-${layout} gap-6 `}>
          {foods.map((food, idx) => (
            <div
              key={idx}
              className="rounded shadow-md p-4 flex flex-col  hover:shadow-xl transition-shadow"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-32 object-cover rounded mb-4"
              />

              <div className="mb-2 gap-10 flex justify-between items-center">
                <h2 className="text-xl font-semibold ">Momos</h2>
                <p className="text-green-500 bg-green-100 px-3 text-sm rounded-full">
                  Available
                </p>
              </div>
              <p className="text-gray-600 mb-1">Quantity: 10</p>
              <p className="text-gray-600 mb-4">Expire Date: 10/12/2025</p>

              <div className="flex">
                <Link to={`/details/${1}`}>
                  <button className="mt-auto bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
