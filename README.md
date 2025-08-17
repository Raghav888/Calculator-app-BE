# Calculator Audit Backend

[![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Node.js + Express backend service for capturing and storing audit events for a calculator app.  
Events are stored in **Firebase Firestore** and can be retrieved via API endpoints.

---

## Features

- Log audit events (clicks, actions, values) via POST API
- Fetch audit history via GET API
- Stores data in Firebase Firestore
- Fully asynchronous and easy to extend

---

## Tech Stack

- Node.js
- Express.js
- Firebase Firestore
- ES Modules (ESM)

---

1. npm i

2. npm run start

3. 
API Endpoints
POST /audit

Logs an audit event.


GET /audit/history

Fetch all stored audit events.

Can be deployed on render.
