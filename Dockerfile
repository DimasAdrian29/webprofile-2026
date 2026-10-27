# Stage 1: Build the React Vite Application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests for optimal layer caching
COPY package*.json ./

# Install dependencies cleanly
RUN npm install

# Copy source code and build production static files
COPY . .
RUN npm run build

# Stage 2: Serve production build via high-performance Nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration optimized for React SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port inside container
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
