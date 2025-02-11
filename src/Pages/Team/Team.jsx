import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const Team = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("./Teams.json")
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#2df1f7" />
      </div>
    );
  }
  return (
    <div>
      <section className="pb-20 pt-10 text-black w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6 text-teal-600">
            Meet Our Volunteers
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our dedicated volunteers play a crucial role in collecting and
            distributing food to those in need. Join us in making a difference!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteers.map((volunteer, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 text-center"
              >
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">{volunteer.name}</h4>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  {volunteer.role}
                </p>
                <p className="text-base">{volunteer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
