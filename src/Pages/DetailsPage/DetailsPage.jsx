import { useState } from "react";
import RequestModal from "../../components/RequestModal/RequestModal";

const DetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="pt-10 pb-20">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden ">
          {/* Food Image */}
          <div className="relative">
            <img
              src=""
              alt=""
              className="w-full h-64 object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-4xl font-bold">
              {name}
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-teal-700 mb-6">Barger</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Food Details */}
              <div className="space-y-2">
                <p>
                  <span className="font-semibold ">Quantity:</span> 10
                </p>
                <p>
                  <span className="font-semibold ">Food Status:</span> Available
                </p>
                <p>
                  <span className="font-semibold ">Pickup Location:</span>{" "}
                  Joypurhat
                </p>
                <p>
                  <span className="font-semibold ">Expire Date:</span>{" "}
                  11/12/2025
                </p>
                <p>
                  <span className="font-semibold ">Additional Notes:</span>{" "}
                  Clicking on the add button the data will be saved on a
                  collection (food collection) and the added food will be shown
                </p>
              </div>

              {/* Right Column: Donator Information */}
              <div className="bg-teal-50 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
                <img
                  src=""
                  alt=""
                  className="w-16 h-16 rounded-full border-2 border-teal-500"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-teal-600">
                    Donator Info
                  </h3>
                  <p>
                    <span className="font-semibold text-gray-700">Name:</span>{" "}
                    Mukit
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Email:</span>{" "}
                    mukit@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Request Food Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded shadow-lg transform transition-transform hover:scale-105 mt-6"
            >
              Request Food
            </button>
          </div>
        </div>
      </div>

      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      ></RequestModal>
    </div>
  );
};

export default DetailsPage;
