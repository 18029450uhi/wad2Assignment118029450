# Converting Monolithic Application to Microservices

# This is Higher Level Overview of the project

![higher_level_overview.drawio.svg](..%2FDesktop%2Fhigher_level_overview.drawio.svg)

## Project Description

As the Title Suggest We are trying to convert Two monolithic applications to Microservices. The two applications are:

- IWTSC
- ALevelComputing

We have then divided the IWTSC into Three Microservices:

- IWTSC-Auth Backend (Express + PostgresSQL)
- IWTSC-Question Backend (Express + MongoDB)
- IWTSC-Frontend

Nginx is used as a reverse proxy to route the requests to the respective services.

## Tools and Technologies Used

- React Font-end
- Express Backend
- MongoDB & PostgresSQL Database
- Docker & Docker Compose
- Nginx as Reverse Proxy

## Quick Start

- Stat the project by running `docker-compose up` in the root directory

**Note**: There are some bugs we encountered in development phase. We have
documented them in the `Bugs.md` file. Additionally, we try to clean up and remove dead code as much as possible.
