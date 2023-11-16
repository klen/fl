node_modules: package.json
	@yarn install
	@touch node_modules

# Development
# -----------

.PHONY: dev
dev: node_modules
	@yarn dev

.PHONY: lint
lint: node_modules
	yarn lint
	yarn tsc --noEmit --pretty

.PHONY: test t
test t: node_modules
	yarn jest

.PHONY: build
build: node_modules
	yarn build
