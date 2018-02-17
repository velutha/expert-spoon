Follow the instructions below to setup on your machine.

It is enouraged that you use docker, since it is independent of your machines' OS.

Install docker and docker-compose in your machine

Instructions be found here 

https://docs.docker.com/engine/installation/

https://docs.docker.com/compose/install/

Clone the repo 

Environment Variables used can be found in .env.example

These environment variables should be set before running the app

They can be set by creating the file .env(copy .env.example and change values) in root directory

This .env is passed to docker environment

From the root directory of the project run

docker-compose build

docker-compose up
