# Cookie Manager

Cookie Manager is a web application for managing browser cookies using Express, JavaScript, and HTML. It allows users to set, retrieve, and delete cookies via a straightforward interface.

## Features

- **Set Cookies:** Securely add new cookies with the HTTP-only flag.
- **Get Cookies:** Retrieve all existing browser cookies.
- **Delete Cookies:** Remove specific cookies effortlessly.
- **User-Friendly Interface:** Clean and simple design for cookie management.

## Installation

Follow these steps to get started:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/mukiralad/cookie-manager.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd cookie-manager
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

4. **Start the server:**

    ```sh
    npm start
    ```

The application will run at [http://localhost:3000](http://localhost:3000).

## API Endpoints

The application exposes the following API endpoints:

### 1. Set a Cookie

- **URL:** `/set-cookie`
- **Method:** `POST`
- **Request Body:**

    ```json
    {
      "name": "cookieName",
      "value": "cookieValue"
    }
    ```

- **Response:** `Cookie <name> set!`

### 2. Get All Cookies

- **URL:** `/get-cookies`
- **Method:** `GET`
- **Response:**

    ```json
    {
      "cookieName": "cookieValue"
    }
    ```

### 3. Delete a Cookie

- **URL:** `/delete-cookie/:name`
- **Method:** `DELETE`
- **Response:** `Cookie <name> deleted!`

## Frontend Interface

The app includes a simple HTML page to interact with the cookies via buttons:

- **Set Cookie:** Creates a cookie named `user` with the value `JohnDoe`.
- **Get Cookies:** Displays all cookies in an alert dialog.
- **Delete Cookie:** Deletes the `user` cookie.

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Use the buttons on the interface to:
  - **Set a Cookie:** Adds a cookie named `user` with the value `Dheeraj`.
  - **Get Cookies:** Displays all the cookies in an alert dialog.
  - **Delete a Cookie:** Removes the `user` cookie.

## Contributing

Contributions are welcome! Please feel free to open issues, fork the repository, and create pull requests.