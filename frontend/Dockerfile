# Stage 1: Install dependencies and build the React application
FROM node:14-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with a lightweight HTTP server
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx server's directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
