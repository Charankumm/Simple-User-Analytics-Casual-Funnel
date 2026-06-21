# Simple User Analytics Application

## Overview

This project is a full-stack user analytics application built as part of the Full Stack Engineer assignment.

The application tracks user interactions on a webpage, stores analytics events in MongoDB, and visualizes user behavior through a dashboard.

## Features

### Event Tracking

* Tracks page views
* Tracks click events
* Generates unique session IDs using localStorage
* Records page URL and timestamp
* Captures click coordinates (x, y)

### Backend APIs

* Store analytics events
* Retrieve sessions with event counts
* Retrieve user journey for a session
* Retrieve click data for heatmap visualization

### Dashboard

* Sessions View
* User Journey View
* Heatmap Visualization

## Tech Stack

### Frontend

* React
* Vite
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Project Structure

```
Backend/
Frontend/
tracking-script/
```

## API Endpoints

### Create Event

POST /api/events

### Get Sessions

GET /api/sessions

### Get Session Events

GET /api/sessions/:sessionId

### Get Heatmap Data

GET /api/heatmap?pageUrl=<page_url>

## Event Schema

```json
{
  "sessionId": "session-001",
  "eventType": "click",
  "pageUrl": "http://localhost:5173",
  "timestamp": "2026-06-20T10:00:00Z",
  "clickData": {
    "x": 250,
    "y": 180
  }
}
```

## Setup Instructions

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd Backend
npm install
npm run dev
```

Create a .env file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Tracking Script

Open:

```
tracking-script/demo.html
```

and interact with the page to generate analytics events.

## Assumptions

* Session IDs are stored in localStorage.
* Click coordinates are captured relative to the browser viewport.
* Authentication is not required for this assignment.
* MongoDB Atlas is used as the database.

## Future Improvements

* Real heatmap visualization library
* Session duration analytics
* Event batching
* Authentication and user management
* Dashboard charts and reports
* Deployment to cloud platforms

```
```
