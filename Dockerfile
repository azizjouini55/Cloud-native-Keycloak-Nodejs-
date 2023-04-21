# Use an official Nginx runtime as a parent image
FROM bitnami/nginx:1.23.4-debian-11-r8

# Copy your static HTML files into the container
COPY ./index.html /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN service restart nginx

# Expose port 80 so that the container can be accessed through it
EXPOSE 80

# Start Nginx and keep the process running in the foreground
CMD ["nginx", "-g", "daemon off;"]
