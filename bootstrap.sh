#!/bin/bash

apt-get update

# setup mongo-db

apt install -y mongodb
systemctl enable --now mongodb

# install node

apt install -y nodejs
apt install -y npm

# set up the hot reloader

cd /home/vagrant/workspace
npm install
screen -dm -S dev npm run dev