# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install the application dependencies inside the Docker image
RUN npm install

# Copy the rest of the application code into the Docker image
COPY . .

# Expose the port that the application runs on
EXPOSE 8081

# Define the command to start the application
CMD [ "node", "server.js" ]
