#!/bin/bash

docker-compose down
docker rm backend-container
docker rmi backend-image
docker network rm backend-network

echo "Exit Successfully."