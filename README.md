# Sources of the talk of docker4developers in Codemotion 2016
In this part, we create a docker-compose with all containers configured

## Build

````
docker-compose build
```

## Run

`````
docker-compose up
```

Open brower with [http://localhost/map](http://localhost/map)


For import data, execute: 
````
docker run -it -v $PWD/mongo:/seed:ro --net demo_default --link mongo-poc-map --rm mongo sh -c "mongoimport --host mongo-poc-map --db poc-db --collection pocs --type json --file /seed/data.json --jsonArray"
```

Enjoy Docker!!