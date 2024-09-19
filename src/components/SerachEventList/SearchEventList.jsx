import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import axios from "axios";
import "./SearchEventList.css";

const SearchEventList = ({ monthYear }) => {
  const { selectedMonth, selectedYear } = monthYear;
  
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch events from json-server
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events");
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filter events by selected month and year
  const filteredEvents = events.filter((eventDetail) => {
    return (
      eventDetail.date.year === selectedYear &&
      eventDetail.date.month === selectedMonth
    );
  });
  
  const renderEventCards = () => {
    return filteredEvents.map(({ id, date, title, location, image, fetchEvents }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          title={title}
          location={location}
          image={image}
          fetchEvents={fetchEvents}
        />
      );
    });
  };

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <>
      {filteredEvents.length > 0 ? (
        renderEventCards()
      ) : (
        <p>No Events found for the selected date.</p>
      )}
    </>
  );
};

export default SearchEventList;
