import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const RequestModal = () => {
  const currentDate = format(new Date(), "P");
  console.log(currentDate);
  const { user } = useContext(AuthContext);

  const handleRequestFood = (e) => {
    e.preventDefault();
    const food_name = e.target.food_name.value;
    const food_image = e.target.food_image.value;
    const food_id = e.target.food_id.value;
    const request_date = e.target.request_date.value;
    const donator_name = e.target.donator_name.value;
    const donator_email = e.target.donator_email.value;
    const user_email = user?.email;
    const pickup_location = e.target.pickup_location.value;
    const expire_date = e.target.expire_date.value;
    const additional_notes = e.target.additional_notes.value;
    console.log(food_name, food_image, food_id, request_date, user_email);
    const requestData = {
      food_name,
      food_image,
      food_id,
      donator_name,
      donator_email,
      user_email,
      pickup_location,
      expire_date,
      request_date,
      additional_notes,
    };
    console.log(requestData);
  };
  return (
    <div>
      <div className="bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
          <form onSubmit={handleRequestFood}>
            {/* Food Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food Name
              </label>
              <input
                type="text"
                value="Momos"
                name="food_name"
                readOnly
                className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* Food Image */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food Image
              </label>
              <input
                type="text"
                value="https://avatars.githubusercontent.com/u/80270685?v=4"
                name="food_image"
                readOnly
                className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* Food ID */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food ID
              </label>
              <input
                type="text"
                value="123546"
                name="food_id"
                readOnly
                className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* Donator Information */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Donator Name
                </label>
                <input
                  type="text"
                  value="Ranju"
                  name="donator_name"
                  readOnly
                  className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Donator Email
                </label>
                <input
                  type="text"
                  value="ranju@gmail.com"
                  name="donator_email"
                  readOnly
                  className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            {/* User Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                User Email
              </label>
              <input
                type="text"
                value="raju@gmail.com"
                name="user_email"
                readOnly
                className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* Pickup Location */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                value="joypurhat"
                name="pickup_location"
                readOnly
                className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* Expire Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Expire Date
              </label>
              <input
                type="text"
                value="2/10/2025"
                name="expire_date"
                readOnly
                className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* Request Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Request Date
              </label>
              <input
                type="text"
                value={currentDate}
                name="request_date"
                readOnly
                className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {/* Additional Notes */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Additional Notes
              </label>
              <textarea
                rows="3"
                name="additional_notes"
                placeholder="Enter any additional notes here..."
                className="w-full mt-1 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            {/* Request Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
            >
              Request Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
