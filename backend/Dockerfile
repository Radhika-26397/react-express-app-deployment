# Use a base image with Node.js
FROM 291123014449.dkr.ecr.us-east-1.amazonaws.com/backend-repo:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install express


# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3001

# Command to run the Express server
CMD ["node", "app.js"]
