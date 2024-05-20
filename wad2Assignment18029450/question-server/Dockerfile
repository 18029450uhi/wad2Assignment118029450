# the base image
FROM node:20.9.0

# Setting up  the working directory
WORKDIR /app

# Copying package.json and package-lock.json
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying the rest of the code
COPY . .

EXPOSE 8082

# The command to run the application
CMD [ "node", "server.js" ]
