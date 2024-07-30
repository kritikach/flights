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
