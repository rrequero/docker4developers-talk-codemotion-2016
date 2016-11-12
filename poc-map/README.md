# POC Map

## Install
````
npm install
```

### Configuration
Set next environments variables:
````
MONGO_HOST: Host of mongodb
MONGO_PORT: Port of mongodb
MONGO_DB: Name of database in mongodb
PORT: Port of the app (default: 8000)
NODE_PATH: (default app/src)
```

### Execution
````
npm start
```
Open http://localhost:8000/map


## Execution with Docker

### Build image
````
docker build . -t poc-map
```

### Run image
````
docker run -e MONGO_DB=poc-db -e MONGO_HOST=localhost -e MONGO_PORT=27017 -e PORT=8000 poc-map
```
