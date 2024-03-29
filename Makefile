down:
	docker-compose down

build:
	docker-compose build

start:
	docker-compose --env-file .env.test.local up -docker

restart:
	docker-compose down
	docker-compose build
	docker-compose --env-file .env.test.local up -d

test api:
	go run api-server/cmd/api-server-test

local:
	npm install --prefix ./web
	npm run build --prefix ./web
	docker-compose -f docker-compose-test.yml down
	docker-compose -f docker-compose-test.yml build
	docker-compose --env-file .env.test.local -f docker-compose-test.yml up -d
