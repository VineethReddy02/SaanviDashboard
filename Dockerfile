From node:latest
COPY ./ ./
EXPOSE 4200
RUN npm start
