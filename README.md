# README - NestJS Docker

This is a sample README for running a NestJS application in a Docker container.

## Prerequisites

Before you can run NestJS applications within Docker, make sure you have Docker installed on your computer. You can download and install Docker from [Docker official site](https://docs.docker.com/get-docker/).

## Steps

Following are the steps to run a NestJS application in Docker:

1. **Clone this repository**:

   ```bash
   git clone https://github.com/exceldeo/nest-mongodb-api.git
   cd nest-mongodb-api
   ```

2. **Change Configuration**:

   The above command will fetch the Dockerfile present in your project directory and build a Docker image with the name "nest-mongodb-api".

3. **Run Docker**:

   ```bash
   docker compose up -d
   ```

   This will run your NestJS application inside a Docker container and forward the container's port 3000 to port 3000 on your machine.

4. **Access Application**:

   Now, your NestJS application should be running inside a Docker container. You can access it via a browser by visiting `http://localhost:3000`.

5. **API Documentation**:

   You can access the API documentation via a browser by visiting `http://localhost:3000/docs`. to see the documentation image you can see in the images folder.

## Configuration

You can configure your NestJS application by editing the `src/main.ts` file or other configuration files that are relevant to your project. Make sure to adjust the environment variables and other settings that may be required.

## Conclusion

That's it! You are now running your NestJS application inside a Docker container. If you want to stop the container, simply press `Ctrl + C` in the terminal where you are running it, or run `docker stop container-name`.

## Installation

```bash
$ yarn install
```
