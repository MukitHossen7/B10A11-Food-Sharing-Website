import { FaEdit, FaTrash } from "react-icons/fa";
const foods = [
  {
    id: 1,
    name: "Pizza",
    image: "https://via.placeholder.com/150",
    quantity: 2,
    location: "New York",
    expiry: "2024-12-30",
    status: "available",
    additional_notes:
      "Clicking on the add button the data will be saved on a collection",
  },
  {
    id: 1,
    name: "Pizza",
    image: "https://via.placeholder.com/150",
    quantity: 2,
    location: "New York",
    expiry: "2024-12-30",
    status: "available",
    additional_notes:
      "Clicking on the add button the data will be saved on a collection",
  },
  {
    id: 1,
    name: "Pizza",
    image: "https://via.placeholder.com/150",
    quantity: 2,
    location: "New York",
    expiry: "2024-12-30",
    status: "available",
    additional_notes:
      "Clicking on the add button the data will be saved on a collection",
  },
];

const ManageMyFoods = () => {
  return (
    <div>
      <div className="pt-10 pb-20 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="max-w-7xl mx-auto bg-white shadow-sm  rounded-lg p-5">
          <h2 className="text-2xl font-bold text-teal-600 mb-5">
            Manage My Foods
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="bg-teal-500 text-white">
                  <th className="px-4 py-2">Food Image</th>
                  <th className="px-4 py-2">Food Name</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Pickup Location</th>
                  <th className="px-4 py-2">Expired Date</th>
                  <th className="px-4 py-2">Food Status</th>
                  <th className="px-4 py-2">Additional Notes</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {foods.map((food) => (
                  <tr key={food.id} className="odd:bg-teal-100 even:bg-white">
                    <td className="px-4 py-2">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-16 h-16 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2">{food.name}</td>
                    <td className="px-4 py-2">{food.quantity}</td>
                    <td className="px-4 py-2">{food.location}</td>
                    <td className="px-4 py-2">{food.expiry}</td>
                    <td className="px-4 py-2">{food.status}</td>
                    <td className="px-4 py-2">
                      {food.additional_notes.slice(0, 25)}..
                    </td>
                    <td className="px-4 py-5 flex items-end space-x-3">
                      <button className="text-white bg-teal-500 hover:bg-teal-600 px-3 py-2 rounded-md flex items-center">
                        <FaEdit className="mr-2" /> Update
                      </button>
                      <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md flex items-center">
                        <FaTrash className="mr-2" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMyFoods;
