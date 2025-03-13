# AmazonClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.

# Frontend Angular Project Documentation

## Overview
This project is a frontend application built using Angular v17, Bootstrap for styling, Firebase for backend services, and FakeStore API for mock e-commerce data.

## Technologies Used
- **Angular Material** - UI component library
- **SweetAlert** - User-friendly alert dialogs
- **Angular v17** - Frontend framework
- **Bootstrap** - UI styling
- **Firebase** - Backend services (authentication, database, hosting)
- **FakeStore API** - Mock e-commerce API for product data

## Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **Angular CLI** (v17)
- **Firebase CLI** (if deploying to Firebase Hosting)

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   ng serve
   ```
4. Open the application in the browser:
   ```
   http://localhost:4200
   ```

## Firebase Configuration
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add a web app and obtain Firebase configuration.
3. Update `src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     firebase: {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     }
   };
   ```

## FakeStore API Usage
- The application fetches product data from FakeStore API.
- API Endpoint: `https://fakestoreapi.com/products`
- Example HTTP request:
  ```typescript
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data));
  ```

## Project Structure
```
/src
│-- app/
│   │-- components/        # UI Components
│   │-- shared/            # Shared modules and utilities
│-- assets/                # Static assets
│-- index.html             # Main HTML file
│-- main.ts                # Main TypeScript entry file
│-- styles.css             # Global styles
```

## Deployment
### Firebase Hosting Deployment
1. Install Firebase CLI:
   ```sh
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```sh
   firebase login
   ```
3. Initialize Firebase in the project:
   ```sh
   firebase init
   ```
4. Build the Angular project:
   ```sh
   ng build --configuration=production
   ```
5. Deploy to Firebase:
   ```sh
   firebase deploy
   ```

## License
This project is open-source and available under the MIT License.

## Author
**Team Leader:** Jawad Tamer
**Team Members:** Salma Saeed, Reham Saeed, Omar Mohammed, Walid Ragb

GitHub Repository: [Amazon Clone](https://github.com/jawadTamer/Amazon-clone.git)
Project Demo: [Amazon Clone](https://amazon-clone36.netlify.app/home)
