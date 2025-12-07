# Flask-Project: A Multi-Container Node.js Frontend and Flask Backend Application

This project demonstrates a microservice architecture using Docker, Docker Compose, Node.js/Express for the frontend, and Flask for the backend. The services communicate over a shared Docker network to process form submissions.

## Features

*   **Frontend:** Built with Node.js, Express, and EJS templating. Serves a simple form and acts as a proxy to the backend API.
*   **Backend:** A Flask API service that receives JSON data via a POST request, processes it, and returns a confirmation message.
*   **Containerization:** Both services are Dockerized using separate `Dockerfile`s.
*   **Orchestration:** `docker-compose.yaml` manages the build process, networking, and port mappings.

## Prerequisites

Before running this project, ensure you have the following installed:

*   **[Docker Desktop](www.docker.com)**: Includes Docker Engine and Docker Compose.

## Project Structure

