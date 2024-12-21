import { Link } from "react-router-dom";

const Home = () => {
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
    <div>
      <div className="bg-gray-100">
        {/* Banner Section */}
        <div
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://source.unsplash.com/1600x900/?food)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white text-center pt-32">
            <h1 className="text-5xl font-bold">
              Welcome to Food Share Platform
            </h1>
            <p className="text-xl mt-4">
              Sharing food for a better world. Join us today!
            </p>
            <Link
              to="/login"
              className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Featured Foods Section */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-4xl font-semibold text-center text-blue-600">
            Featured Foods
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFoods.map((food, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/400x300/?${food.name.toLowerCase()}`}
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {food.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{food.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-600">
                      Quantity: {food.quantity}
                    </span>
                    <Link
                      to="/available-foods"
                      className="text-blue-600 hover:underline"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Sections */}
        <div className="bg-gray-200 py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-3xl font-semibold text-gray-800">
                How It Works
              </h3>
              <p className="text-gray-600 mt-4">
                Food sharing is simple! Donate, request, and enjoy food while
                reducing food waste.
              </p>
              <Link
                to="/how-it-works"
                className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-3xl font-semibold text-gray-800">
                Join Our Community
              </h3>
              <p className="text-gray-600 mt-4">
                Be part of a community that shares food and reduces food waste.
                Sign up and get started!
              </p>
              <Link
                to="/register"
                className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>

        {/* Show All Button */}
        <div className="text-center py-8">
          <Link
            to="/available-foods"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Show All Available Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
