import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const featuredFoods = [
    {
      name: "Pizza",
      image: "pizza.jpg",
      description: "Delicious and fresh pizza",
      quantity: 20,
    },
    {
      name: "Burger",
      image: "burger.jpg",
      description: "Juicy and tasty burger",
      quantity: 15,
    },
    {
      name: "Pasta",
      image: "pasta.jpg",
      description: "Creamy and savory pasta",
      quantity: 10,
    },
    {
      name: "Salad",
      image: "salad.jpg",
      description: "Healthy and fresh salad",
      quantity: 25,
    },
    {
      name: "Cake",
      image: "cake.jpg",
      description: "Sweet and delicious cake",
      quantity: 5,
    },
    {
      name: "Sushi",
      image: "sushi.jpg",
      description: "Fresh sushi rolls",
      quantity: 30,
    },
  ];
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto py-16 px-4">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-teal-600">
        Featured Foods
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredFoods.map((food, index) => (
          <div
            key={index}
            className="rounded shadow-md p-4 flex flex-col  hover:shadow-xl  bg-white  overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={food?.image}
              alt="food"
              className="w-full h-60 object-cover rounded mb-4"
            />

            <div className="mb-2 gap-10 flex justify-between items-center">
              <h2 className="text-xl font-semibold ">{food?.foodName}</h2>
              <p className="text-green-500 bg-green-100 px-3 text-sm rounded-full">
                {food?.status}
              </p>
            </div>
            <p className="text-gray-600 mb-1">Quantity: {food?.foodQuantity}</p>
            <p className="text-gray-600 mb-4">
              Expire Date: {food?.expireDate}
            </p>

            <div className="flex">
              <Link to={`/food/${food?._id}`}>
                <button className="mt-auto bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
