import { useEffect, useState } from "react";
import RequestModal from "../../components/RequestModal/RequestModal";
import { useParams } from "react-router-dom";
import useAxiosInstance from "../../CustomHooks/useAxiosInstance";

const DetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [food, setFood] = useState({});
  const { id } = useParams();
  const axiosInstance = useAxiosInstance();
  useEffect(() => {
    handleFoodDetail();
  }, []);

  const handleFoodDetail = () => {
    axiosInstance.get(`/all-foods/${id}`).then((response) => {
      setFood(response.data);
    });
  };
  const {
    foodImg,
    foodName,
    expireDate,
    donator,
    foodQuantity,
    location,
    status,
    additionalNotes,
  } = food || {};
  return (
    <div className="pt-10 pb-20">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden ">
          {/* Food Image */}
          <div className="relative">
            <img
              src={foodImg}
              alt="image"
              className="w-full h-72 lg:h-96 object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl lg:text-4xl font-bold">
              {foodName}
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-teal-700 mb-6">
              {foodName}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Food Details */}
              <div className="space-y-2">
                <p>
                  <span className="font-semibold ">Quantity:</span>{" "}
                  {foodQuantity}
                </p>
                <p>
                  <span className="font-semibold ">Food Status:</span> {status}
                </p>
                <p>
                  <span className="font-semibold ">Pickup Location:</span>{" "}
                  {location}
                </p>
                <p>
                  <span className="font-semibold ">Expire Date:</span>{" "}
                  {expireDate}
                </p>
                <p>
                  <span className="font-semibold ">Additional Notes:</span>{" "}
                  {additionalNotes}
                </p>
              </div>

              {/* Right Column: Donator Information */}
              <div className="bg-teal-50 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
                <img
                  src={donator?.donatorImage}
                  alt=""
                  className="w-16 h-16 rounded-full border-2 border-teal-500"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-teal-600">
                    Donator Info
                  </h3>
                  <p>
                    <span className="font-semibold text-gray-700">Name:</span>{" "}
                    {donator?.donatorName}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Email:</span>{" "}
                    {donator?.donatorEmail}
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
        food={food}
        onClose={() => setIsModalOpen(false)}
      ></RequestModal>
    </div>
  );
};

export default DetailsPage;
