FROM node:alpine
WORKDIR /vitedocker
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev","--", "--host"]