# Use  Node.js runtime as the base image
FROM node:14

# Settting the working directory in the Docker image to /app
WORKDIR /app

# Copying package.json and package-lock.json into the image
COPY package*.json ./

# Installing the application dependencies inside the Docker image
RUN npm install

# Copying the rest of the application code into the Docker image
COPY . .

# Expose the port that the application runs on
EXPOSE 8081

# the command to start the application
CMD [ "node", "server.js" ]
