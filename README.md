# CORS Proxy Application

This is a simple CORS proxy application built using Node.js and Express. It allows you to bypass CORS restrictions by forwarding requests to a specified target URL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd cors-proxy-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Make a request to the proxy:
   ```
   GET http://localhost:3000/proxy?url=<target-url>
   ```

   Replace `<target-url>` with the URL you want to access.

## License

This project is licensed under the MIT License.
