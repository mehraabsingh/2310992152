# Notification System Project

## 📌 Overview

This project implements a scalable notification system with logging middleware integration.

## 🛠 Tech Stack

* Node.js
* Express.js
* Axios

## 📁 Folder Structure

* logging_middleware → Centralized logging
* notification_app_be → Backend API
* notification_app_fe → Frontend (basic structure)
* notification_system_design.md → System design document

## 🚀 How to Run

```bash
cd notification_app_be
npm install
node index.js
```

## 🔗 API Endpoints

* GET / → Server check
* GET /notifications → Fetch notifications
* POST /notifications → Create notification

## 📊 Logging

All logs are sent to external logging service using custom middleware.

## 👨‍💻 Author

Mehraab Singh
