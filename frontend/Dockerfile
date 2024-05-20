# Use an official Node.js runtime as the base image
FROM 291123014449.dkr.ecr.us-east-1.amazonaws.com/frontend-repo:latest


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# Install dependencies

# RUN npm install -g npm@latest

# RUN npm install 


# Copy the remaining project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
