# Create image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
# COPY package.json /usr/src/app
# COPY package-lock.json /usr/src/app

# Get all the code needed to run the app
COPY . /usr/src/app

# Install dependencies
#RUN npm set progress=false \
#   && npm config set depth 0 \
#   && npm i install
RUN npm install



#Expose the port the app runs in
EXPOSE 3000

#Serve the app
CMD ["npm", "start"]
  