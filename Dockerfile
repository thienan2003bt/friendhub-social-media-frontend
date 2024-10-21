# # Use the official Node.js image to build the React app.
FROM node:18-alpine AS build

# # Set the working directory.
WORKDIR /usr/src/app

# # Copy package.json and install dependencies.
COPY package*.json ./
RUN npm install

# # Copy the rest of the application code.
COPY . .

# # Build the app.
RUN npm run build

# # Use a lightweight web server to serve the static files.
FROM nginx:alpine

# # Copy built files from the previous step.
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Fix permissions for Nginx to read the files
RUN chmod -R 755 /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# # Expose the port that Nginx will run on.
EXPOSE 80

# # Start the Nginx server.
CMD ["nginx", "-g", "daemon off;"]
