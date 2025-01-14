# Stage 1: Build
FROM node:16-alpine as build

# Set the working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . ./

# Build the application
RUN npm run build

# Stage 2: Serve
FROM node:16-alpine

# Install a lightweight static file server
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app/build ./build

# Expose the application's port
EXPOSE 3000

# Command to serve the built files
CMD ["serve", "-s", "build", "-l", "3000"]
