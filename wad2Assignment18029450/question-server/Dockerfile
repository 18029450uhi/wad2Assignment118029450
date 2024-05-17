# Specify the base image
FROM node:20.9.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

EXPOSE 8082
# Specify the command to run the application
CMD [ "node", "server.js" ]
