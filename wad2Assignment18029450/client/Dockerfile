# A Node.js runtime as the base image
FROM node:14

# Setting up the the working directory in the Docker image to /app
WORKDIR /app

# Copying  package.json and package-lock.json into the image
COPY package*.json ./

# Installing the application dependencies inside the Docker image
RUN npm install

# Copying the rest of the code
COPY . .

# Exposing the port that the application runs on
EXPOSE 3000

# The command to start the application
CMD [ "npm", "start" ]