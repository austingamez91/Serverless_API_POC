A simple proof of concept for a serverless API written in typescript

It consists of 3 subfolders:
- api: the api
- common: containing some database models and helper functions, and a logger
- scraper: a simple web scraper to collect car data 

Although it is entirely functional, the repo is a work in progress that needs:
- unit and integration tests
- automated testing and deployment
- a better way to manage secrets
- isolated dependencies (everything pulls from the same package.json right now)

Some useful commands:

# build the api from the root directory
docker build -f api/Dockerfile -t local-car-api .
# run it locally
docker run --rm -p 3000:3000 -e DATABASE_URL=postgresql://postgres:postgres@172.17.0.1:5432/car_parts local-car-api
# run a postgres container and sync
docker run --name prisma-db -e POSTGRES_USER=postgres   -e POSTGRES_PASSWORD=postgres   -e POSTGRES_DB=car_parts   -p 5432:5432   -d postgres:15
cd common && npx prisma db push                                                        
# start api
npm run start-api
# scrape the data
npm run scrape