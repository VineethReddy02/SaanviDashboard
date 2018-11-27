From node:latest
COPY ./ ./app
EXPOSE 4200
WORKDIR /app
RUN npm install
CMD ["npm","start"]