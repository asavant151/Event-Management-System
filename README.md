# Event Management System

An Event Management System built with React, Tailwind CSS, and JSON Server for managing events. Users can create, view, edit, and delete events, with a responsive UI and local server-based backend.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Features

- **Create Event**: Add new events with details such as title, date, location, and an image.
- **Edit Event**: Update existing event information.
- **Delete Event**: Remove unwanted events.
- **Event List**: Display all events in a card format.
- **Responsive Design**: Mobile and tablet-friendly layouts using Tailwind CSS.
- **Local Backend**: JSON Server is used for mock API calls to handle CRUD operations.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: JSON Server (for mock API)
- **Routing**: React Router

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites
Make sure you have Node.js installed:
- [Download Node.js](https://nodejs.org/)

### Clone the Repository
```bash
git clone https://github.com/your-username/event-management-system.git
cd event-management-system

npm install

npx json-server --watch db.json --port 5000

npm start


The application will open in your browser at http://localhost:3000.

Usage
. Event List: Displays a list of all events with options to edit or delete.
. Add Event: Navigate to /events/create to create a new event.
. Edit Event: Click the "Edit" button on any event card to update the event details.
. Delete Event: Click the "Delete" button on an event card to remove it.
. API Endpoints
. The project uses JSON Server to simulate a REST API. The available endpoints are:

. GET /events: Fetch all events.
. GET /events/:id: Fetch a single event by ID.
. POST /events: Create a new event.
. PUT /events/:id: Update an event by ID.
. DELETE /events/:id: Delete an event by ID.

```

### Folder Structure

├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── EventCard
│   │   │   └── EventCard.jsx
│   │   ├── Navigation
│   │   │   └── Navigation.jsx
│   ├── pages
│   │   ├── EventList.jsx
│   │   ├── CreateEventForm.jsx
│   │   └── EditEventForm.jsx
│   ├── App.js
│   ├── index.js
│   └── App.css
├── db.json
├── package.json
└── README.md
