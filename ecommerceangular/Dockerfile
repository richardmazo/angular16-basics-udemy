#Primer etapa
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#Segunda etapa
FROM nginx:alpine
COPY --from=node /app/dist/ecommerceangular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80