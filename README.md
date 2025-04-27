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
```

## Functionality
Throughout the project, I focused on refactoring several parts of the code to improve functionality and efficiency. In particular:

#### Refactoring the Trips Controller:
I refactored the code for retrieving trips by implementing better error handling. Originally, the code was more verbose and lacked proper checks for edge cases, such as when no trips are found in the database. By adding clearer error messages and handling unexpected inputs more effectively, the code became more maintainable and easier to debug.

#### Reducing Redundancy with Reusable UI Components:
I created reusable components, such as the TripCard component, which allowed me to display individual trips consistently throughout the application. Prior to this, the trip display code was repeated in multiple parts of the UI. By encapsulating the trip display logic into a reusable component, I reduced code duplication and made future updates to the UI more efficient.

#### Optimizing Data Fetching:
I optimized the process of fetching trips from the MongoDB database. Initially, the data was being fetched in multiple places across the application, leading to unnecessary database queries. I centralized the data retrieval in a dedicated service that handled all interactions with the database. This streamlined the application, reduced load times, and improved the user experience.

#### Improving Form Handling and Validation:
I improved the form submission process for adding new trips by adding input validation both on the client and server side. This ensured that only valid data (e.g., required fields like name, code, etc.) was submitted to the database. The validation also helped prevent errors, such as empty or incorrectly formatted inputs, from being sent to the server.

## Testing
Methods, Endpoints, and Security
In a full-stack application, testing API endpoints and ensuring their security is a critical task. API testing ensures that the application can retrieve and process data correctly. For instance, I tested routes like /trips/:tripCode to make sure that a specific trip could be fetched by its code:

```javascript
router.route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode);
```
I also wrote tests to check that the server returns the correct status codes, such as 404 when no trip is found and 500 for server errors.

Security was an important part of this process. For example, I used JWT (JSON Web Tokens) to secure certain routes. This ensured that only authorized users could perform sensitive actions like creating new trips. The POST /trips route was protected by requiring a valid token:

```javascript
router
  .route('/trips')
  .post(auth, tripsController.tripsCreate);  // Only allowed if token is valid
```
By testing these routes and ensuring proper authentication, I ensured that only authorized users could access or modify the application’s data.

## Reflection
Professional Goals and Skills Learned
This course has been instrumental in helping me reach my professional goals. I’ve gained practical experience with backend and frontend development, learning how to build a full-stack application using technologies like Express, MongoDB, JWT, and Mongoose. These technologies are commonly used in the industry, and learning how to implement them effectively has been invaluable.

I’ve also developed a deeper understanding of security practices in web applications, such as using JWT for user authentication and ensuring that data is properly protected. I now feel more comfortable with both client-side and server-side development, knowing how to manage data, interact with a database, and implement secure, scalable solutions.

These skills have made me more marketable as a developer, and I feel much more confident pursuing opportunities in full-stack development. I’m excited to continue building upon these skills as I move forward in my career.
