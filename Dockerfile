# Etapa 1: Build Angular app
FROM node:18-alpine as builder

WORKDIR /app
COPY . .
RUN npm install && npm run build --configuration=production && npm cache clean --force

# Etapa 2: Servir con NGINX
FROM nginx:stable-alpine

COPY --from=builder /app/dist/tbmmx/browser /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]