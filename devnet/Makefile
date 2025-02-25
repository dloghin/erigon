DOCKER_COMPOSE := docker compose -f docker-compose.yml

STOP := $(DOCKER_COMPOSE) down --remove-orphans; sleep 3;

.PHONY: stop
stop: ## Stops all services
	$(STOP)

devnet:
	$(DOCKER_COMPOSE) up -d erigon-node1