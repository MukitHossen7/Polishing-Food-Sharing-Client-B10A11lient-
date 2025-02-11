import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosInstance from "../../CustomHooks/useAxiosInstance";
import { FadeLoader } from "react-spinners";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [foodRequest, setFoodRequest] = useState([]);
  const axiosInstance = useAxiosInstance();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    requestMyFood();
  }, []);
  const requestMyFood = async () => {
    const { data } = await axiosInstance.get(
      `/request-foods?email=${user?.email}`
    );
    setFoodRequest(data);
    setLoading(false);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#2df1f7" />
      </div>
    );
  }
  return (
    <div>
      <div className="w-11/12 md:w-11/12 lg:11/12  xl:container mx-auto pb-20 pt-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-teal-600">
          My Food Requests
        </h2>
        {foodRequest.length === 0 && (
          <div className="text-center text-gray-700 text-xl lg:text-2xl">
            You haven&apos;t made any food requests yet.
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodRequest.map((food) => (
            <div
              key={food._id}
              className="relative rounded-md shadow-md p-4 transform transition-transform hover:scale-105"
            >
              <img
                src={food?.food_image}
                alt="food image"
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-800">
                {food?.food_name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-bold">Donor Name:</span>{" "}
                {food.donator_name}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-bold">Pickup Location:</span>{" "}
                {food?.pickup_location}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-bold">Expire Date:</span>{" "}
                {food?.expire_date}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-bold">Request Date:</span>{" "}
                {food?.request_date}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Additional Notes:</span>{" "}
                {food?.additional_notes}
              </p>
              <div className="absolute top-2 right-2 bg-teal-100 text-teal-600 text-xs px-2 py-1 rounded-full">
                {food?.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
