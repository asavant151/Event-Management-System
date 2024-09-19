import { Link } from "react-router-dom";
import "./EventCard.css";
import axios from "axios";
const EventCard = ({ id, title, date, location, image, fetchEvents }) => {
  const { year, month } = date;

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/events/${id}`);
    fetchEvents();
  };

  return (
    <div className="card">
      <div className="card-content">
        <Link to={`/events/${id}`}>
          <h3>{title}</h3>
          <p>
            <span>Year: {year}</span>
            <span>Month: {month}</span>
          </p>
          <p>{location}</p>
        </Link>
        <div className="flex items-center mt-2">
          <Link
            to={`/events/${id}/edit`}
            className="mr-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="card-img-wrapper">
        <Link to={`/events/${id}`}>
          <img src={image} alt="image not found" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
