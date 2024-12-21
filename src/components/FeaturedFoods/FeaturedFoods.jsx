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
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={`https://source.unsplash.com/400x300/?${food.name.toLowerCase()}`}
              alt={food.name}
              className="w-full h-48 object-cover transition-all duration-300 ease-in-out"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {food.name}
              </h3>
              <p className="text-gray-600 mt-2">{food.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Quantity: {food.quantity}</span>
                <Link
                  to="/available-foods"
                  className="text-teal-600 hover:underline"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
