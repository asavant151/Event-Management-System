import EventCard from "../../components/EventCard/EventCard.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./EventList.css";
import { useEffect, useState } from "react";
import axios from "axios";
const EventList = () => {
  const [eventList, setEventList] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/events");
      setEventList(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderEventCards = () => {
    return eventList.map(({ id, date, title, location, image }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          title={title}
          location={location}
          image={image}
        />
      );
    });
  };
  return (
    <div>
      <Navigation/>
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EventList;
