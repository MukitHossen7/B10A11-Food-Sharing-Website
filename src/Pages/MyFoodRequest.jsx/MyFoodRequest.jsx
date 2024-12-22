const MyFoodRequest = () => {
  const foodRequests = [
    {
      id: 1,
      foodImage: "https://via.placeholder.com/150",
      foodName: "Fresh Apples",
      donorName: "John Doe",
      pickupLocation: "123 Main St, Cityville",
      expireDate: "2024-12-31",
      requestDate: "2024-12-21",
      additionalNotes: "Handle with care.",
    },
    {
      id: 2,
      foodImage: "https://via.placeholder.com/150",
      foodName: "Bread Loaves",
      donorName: "Jane Smith",
      pickupLocation: "456 Elm St, Townsville",
      expireDate: "2024-12-30",
      requestDate: "2024-12-20",
      additionalNotes: "Freshly baked.",
    },
    // Add more food request objects here
  ];
  return (
    <div>
      <div className="w-11/12 md:w-11/12 lg:11/12  xl:container mx-auto pb-20 pt-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-teal-600">
          My Food Requests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodRequests.map((food) => (
            <div
              key={food.id}
              className="relative  rounded-lg  shadow-md p-6 transform transition-transform hover:scale-105"
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {food.foodName}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-bold">Donor Name:</span> {food.donorName}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-bold">Pickup Location:</span>{" "}
                {food.pickupLocation}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-bold">Expire Date:</span>{" "}
                {food.expireDate}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-bold">Request Date:</span>{" "}
                {food.requestDate}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Additional Notes:</span>{" "}
                {food.additionalNotes}
              </p>
              <div className="absolute top-2 right-2 bg-teal-100 text-teal-600 text-xs px-2 py-1 rounded-full">
                Requested
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
