import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
import AuthPage from "../components/AuthPage/AuthPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CreateEvent from "../components/CreateEvent/CreateEvent";
import EditEventForm from "../components/EditEventForm/EditEventForm";

export const routes = [
  { path: "/", element: <EventList /> },
  {
    path: "/find-events",
    element: (
      <PrivateRoute>
        <FilterEvents />
      </PrivateRoute>
    ),
  },
  {
    path: "/create-event",
    element: (
      <PrivateRoute>
        <CreateEvent />
      </PrivateRoute>
    ),
  },
  {
    path: "/events/:id/edit",
    element: (
      <PrivateRoute>
        <EditEventForm />
      </PrivateRoute>
    ),
  },
  { path: "/events/:id", element: <EventDetail /> },
  { path: "/login", element: <AuthPage /> },
];
