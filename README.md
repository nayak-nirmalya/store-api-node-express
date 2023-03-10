Its a Basic Web App, that performs CRUD operations.
Technoloy Used: Node, Express, MongoDB, Mongoose, JavaScript, TypeScript and Nodemon.

## Running Project

first run this in the root folder to delete and populate DB with data

```bash
npm run populate
        OR
node --experimental-json-modules --loader ts-node/esm ./src/populate.ts
```

cd into root folder of project and then start express server:

```bash
npm install
npm run start
```

for development:

```bash
npm install
npm run start:nodemon
```

for production:

```bash
npm install
npm run start:prod
```

Open [http://localhost:${PORT}](http://localhost:3000) with your browser to see the result.
