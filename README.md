# api.home-challenge.com

This is a basic CRUD REST API built with TypeScript and Node.js. It stores data in memory, follows a layered architecture, and is fully automated using Docker. You can perform the standard CREATE, READ, UPDATE, and DELETE actions for a simple “Notes” application.

## Below is a list of accessible API endpoints:
    Initially, the application is accessible at http://localhost:4000 (HOST)

    - [POST] http://localhost:4000/notes (to create a new note)
    - [GET] http://localhost:4000/notes (to retrieve all notes)
    - [GET] http://localhost:4000/notes/:id (to retrieve a specific note by ID)
    - [PUT] http://localhost:4000/notes/:id (to update a note)
    - [DELETE] http://localhost:4000/notes/:id (to delete a note)

## Prerequisites
    1. **Node.js** (v20 or higher recommended)
    2. **npm** (comes with Node.js)
    3. [Optional] **Docker** (if you’d like to run the application inside a container)

## Getting Started

### 1. Clone the Repository
    ```bash
    git https://github.com/mamun-swe/api.home-challenge.com
    cd api.home-challenge.com
    ```

### Setup Environment Variables
Create a .env file in application root directory and copy APPLICATION_PORT from .env.example and paste it to .env

### Install Dependencies
    ```bash
    npm install
    ```

### Build the Application
    ```bash
    npm run build
    ```

### Run the Application
    ```bash
    npm start
    ```

## Running with Docker
This application is set up to run easily inside a Docker container using shell scripts. Before you begin, grant execute permissions to both run.sh and down.sh. Full instructions are provided below.

### Grant Execute Permissions
    ```bash
    chmod +x ./run.sh
    chmod +x ./down.sh
    ```

### Start the Application inside Docker container
From the project's root directory, run:
    ```bash 
    ./run.sh
    ```
The application will be accessible at http://localhost:4000/<PORT>.

### Stop the Application inside Docker container
From the project's root directory, run:
    ```bash 
    ./down.sh
    ```