# Custom Carousel UI Component

This project is a custom carousel UI component built with React. The carousel features scrolling control buttons (forward and backward) and auto-scrolls on a timer. It also includes a login system that displays different sets of images based on the user's login status.

## Features

- Custom carousel with styled-components
- Auto-scrolls every 5 seconds
- Responsive design with support for mobile devices
- Works consistently across all major browsers, including Chrome, Firefox, Safari, Edge, and IE 11
- Login prompt with cookie-based authentication
- Displays different images based on login status

## Prerequisites

- Node.js (version 12 or higher)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/custom-carousel.git
   cd custom-carousel

npm install

npm install styled-components react-cookie

npm start

Additional Notes:

The login credentials are hard-coded as:

Username: admin

Password: password

On successful login, a cookie is set to maintain the login state. The carousel displays a different set of images for logged-in users.
