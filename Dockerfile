FROM node:18-alpine

COPY . .

RUN npm install --no-optional
RUN npm run build

RUN ls -al
CMD ["npm", "start"]