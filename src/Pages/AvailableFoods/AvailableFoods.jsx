import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDateRange, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [layout, setLayout] = useState(3);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_URL
        }/all-foods?available=true&sort=${sort}&search=${search}`
      )
      .then((response) => {
        setFoods(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [sort, search]);

  const toggleLayout = () => {
    setLayout((prev) => (prev === 3 ? 2 : 3));
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#2df1f7" />
      </div>
    );
  }
  return (
    <div className="pb-20 pt-10">
      <div className=" w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-6 text-teal-600">
          Available Foods
        </h1>

        <div className="flex flex-col gap-6 lg:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-3  px-4  rounded">
            <select
              name="category"
              id="category"
              value={sort}
              className="border px-4 py-2 rounded-md shadow-md bg-teal-500 text-white  hover:bg-teal-600"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort By Expire Date</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>

          <div className="flex items-center gap-2 border border-teal-500 rounded px-2  shadow-md">
            <FaSearch className="text-teal-500" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food name"
              className="outline-none px-2 py-1 bg-transparent"
            />
          </div>

          <button
            onClick={toggleLayout}
            className="bg-teal-500 text-white px-4 py-2 hidden lg:block rounded hover:bg-teal-600"
          >
            Toggle Layout
          </button>
        </div>

        <div
          className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-${layout} gap-6 `}
        >
          {foods?.map((food) => (
            <div
              key={food._id}
              className="rounded-md shadow-md p-4 flex flex-col hover:shadow-xl transition-shadow"
            >
              <img
                src={food?.foodImg}
                alt="food"
                className="w-full h-52 object-cover rounded mb-4"
              />

              <div className="mb-2 gap-10 flex justify-between items-center">
                <h2 className="text-lg lg:text-xl font-semibold ">
                  {food?.foodName}
                </h2>
                <p className="text-green-500 bg-green-100 px-3 text-sm rounded-full">
                  {food?.status}
                </p>
              </div>
              <p className="text-gray-600 mb-2 text-sm">
                {food?.additionalNotes.toString().slice(0, 40)} ...
              </p>
              <p className="text-gray-600 mb-1 flex gap-2 items-center">
                <MdOutlineProductionQuantityLimits /> {food?.foodQuantity}
              </p>
              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <MdDateRange /> {food?.expireDate}
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
    </div>
  );
};

export default AvailableFoods;
