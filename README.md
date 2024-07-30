# SampleAirlines Real-Time Flight Status and Notifications System

## Overview

This project aims to provide real-time flight status updates and notifications to passengers of "SampleAirlines." The system displays current flight status, including delays, cancellations, and gate changes, and sends notifications via SMS, email, or app notifications. It integrates with airport systems to pull accurate flight data.

## Features

1. **Real-time Updates**: Display current flight status (delays, cancellations, gate changes).
2. **Push Notifications**: Send notifications for flight status changes via SMS, email, or app notifications.
3. **Integration with Airport Systems**: Pull data from airport databases for accurate information.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Flask
- **Database**: MongoDB
- **Real-Time Messaging**: Apache Kafka, WebSockets
- **Notifications**: Firebase Cloud Messaging (FCM), Kafka

## Repository Structure

```plaintext
sampleairlines_project/
  ├── sampleairlines_front/
  │    ├── src/
  │    │    ├── components/
  │    │    │    ├── Header.js
  │    │    │    ├── Offers.js
  │    │    │    ├── Services.js
  │    │    │    ├── flightdashboard.js
  │    │    │    ├── flightstatus.js
  │    │    │    ├── notificationsettings.js
  │    │    ├── App.js
  │    │    ├── App.css
  │    ├── package.json
  ├── sampleairlines_backend/
  │    ├── main.py
  │    ├── flights.py
  │    ├── notifications.py
  │    ├── websocket_server.py
  │    ├── requirements.txt
  ├── README.md




Polling Approach
Initially, the system was designed to use a polling mechanism for real-time updates. Polling involves the client periodically sending requests to the server to check for new data. Here’s how the polling process works:

Client-Side Setup
The frontend uses JavaScript's setInterval function to send requests to the server every second. This function calls an API endpoint on the Flask backend to fetch the latest flight data. The fetched data is then used to update the state of the FlightDashboard component, which re-renders the UI with the latest information.

Server-Side Setup
The Flask backend provides an endpoint that queries the MongoDB database for any new updates. Each request from the client prompts the server to retrieve the latest flight data and send it back to the client. This ensures that the client’s data is refreshed regularly.

Efficiency of Polling
While polling ensures regular updates, it can be inefficient due to constant requests, which can lead to unnecessary network traffic and increased server load. This method was initially considered to provide a straightforward implementation, but it was replaced by a push-based approach for better efficiency.

Push-Based Approach with Kafka and WebSockets
To address the inefficiencies of polling, a push-based approach using Kafka and WebSockets was implemented. In this approach, the server pushes updates to the client only when there are changes. Kafka handles the flow of messages, ensuring that updates are delivered promptly. WebSockets maintain an open connection between the client and server, enabling instant communication and real-time updates.

By using Kafka and WebSockets, the system handles real-time updates more efficiently and scales better as the number of users increases.

