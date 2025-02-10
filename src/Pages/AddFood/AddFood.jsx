import { format } from "date-fns";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "./../../Provider/AuthProvider";
import useAxiosInstance from "../../CustomHooks/useAxiosInstance";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FadeLoader } from "react-spinners";
const AddFood = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (foodData) => {
      await axiosInstance.post(`/all-foods`, foodData);
    },
    onSuccess: () => {
      Swal.fire({
        title: "Food Added Successfully",
        text: "You clicked the button!",
        icon: "success",
      });
    },
  });
  const handleAddFood = async (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImg = e.target.photo.value;
    const foodQuantity = parseInt(e.target.foodQuantity.value);
    const location = e.target.pickupLocation.value;
    const expireDate = format(new Date(startDate), "P");
    const status = e.target.status.value;
    const additionalNotes = e.target.additionalNotes.value;
    const addFoodData = {
      foodName,
      foodImg,
      foodQuantity,
      location,
      expireDate,
      additionalNotes,
      status,
      donator: {
        donatorImage: user?.photoURL,
        donatorName: user?.displayName,
        donatorEmail: user?.email,
      },
    };
    await mutateAsync(addFoodData);
  };
  if (isPending) {
    return (
      <div className="flex justify-center items-center py-20">
        <FadeLoader color="#2df1f7" loading={true} />
      </div>
    );
  }
  return (
    <div>
      <div className="py-20 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-teal-500 text-center mb-6">
            Add Food
          </h2>
          <form className="space-y-6" onSubmit={handleAddFood}>
            {/* Food Name */}
            <div>
              <label
                htmlFor="foodName"
                className="block text-gray-700 font-medium mb-1"
              >
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="Enter food name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Food Image */}
            <div>
              <label
                htmlFor="foodImage"
                className="block text-gray-700 font-medium mb-1"
              >
                Food Image URL
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter image URL"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Food Quantity */}
            <div>
              <label
                htmlFor="foodQuantity"
                className="block text-gray-700 font-medium mb-1"
              >
                Food Quantity
              </label>
              <input
                type="text"
                name="foodQuantity"
                placeholder="Enter quantity"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-gray-700 font-medium mb-1"
              >
                Pickup Location
              </label>
              <input
                type="text"
                name="pickupLocation"
                placeholder="Enter pickup location"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Expire Date */}
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="expireDate"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Expire Date
                </label>

                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full lg:w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              {/* Food Status */}
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="expireDate"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Food Status
                </label>
                <input
                  defaultValue="Available"
                  readOnly
                  name="status"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="additionalNotes"
                className="block text-gray-700 font-medium mb-1"
              >
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                placeholder="Enter any additional notes"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="3"
              ></textarea>
            </div>

            {/* Donator Info */}
            <div className="flex items-center space-x-4 mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
              <img
                src={user?.photoURL}
                alt="Donor Profile"
                className="w-16 h-16 rounded-full border-2 border-teal-500 shadow-lg"
              />
              <div>
                <p className="text-lg font-semibold text-teal-600">
                  {user?.displayName}
                </p>
                <p className="text-sm text-gray-500"> {user?.email} </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-medium py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Add Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
