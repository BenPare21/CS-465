"# CS-465 Repository" 
# Full Stack Web Application Journal Reflection

## Overview

This is a full-stack web application that allows users to view and manage trips. The application is built using **Express**, **MongoDB**, and **Mongoose** for the backend, and **JWT** (JSON Web Tokens) for user authentication. The trips can be viewed, and new trips can be added by authorized users. The project is designed to practice full-stack development, handling both the backend and the connection to a MongoDB database.

## Architecture: Frontend and Backend Development

For my full-stack application, the backend relies on **Express** to handle HTTP requests, and the data is managed using **MongoDB** via **Mongoose**. The use of **Express** allows for seamless routing and handling of various HTTP methods such as `GET` and `POST` to retrieve and submit data. For example, in my backend, I created routes like `/trips/:tripCode` and `/trips` to fetch all trips or specific trips by their unique code.

The backend is connected to a **MongoDB database** that stores trip details. Here's an example of how I defined the **trip schema** using **Mongoose**:

```javascript
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  length: { type: String },
  start: { type: Date },
  resort: { type: String },
  perPerson: { type: String },
  image: { type: String },
  description: { type: String }
});

mongoose.model('Trip', tripSchema);
