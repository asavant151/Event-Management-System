import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);

  const fetchEventDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/events/${id}`);
      setEventDetail(response.data);
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  useEffect(() => {
    fetchEventDetail();
  }, [id]);

  if (!eventDetail) return <p>Loading...</p>;

  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={eventDetail.image} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name: {eventDetail.title}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">{eventDetail.date.month}</span>
              <span className="font-weight-med">{eventDetail.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {eventDetail.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {eventDetail.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
