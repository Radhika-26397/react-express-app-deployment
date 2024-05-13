# Use a base image with Node.js
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the Express server
CMD ["node", "index.js"]
