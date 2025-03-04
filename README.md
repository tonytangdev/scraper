# Scraper

## How to start

### Pre-requisites

- node
- npm
- docker
- docker-compose

### Install dependencies

```bash
npm install
```

### Copy the .env.example file

```bash
cp .env.example .env
```

The .env.example file contains the default values for the environment variables. You can change them if you want.

### Start MySQL

```bash
docker-compose up -d
```

### Start the server

```bash
npm start
```

## Schema

![schema](schema-scraper.png)