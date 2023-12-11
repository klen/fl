node_modules: package.json yarn.lock
	yarn
	@touch node_modules

# Development
# -----------

.PHONY: dev run
dev run: node_modules
	NODE_ENV=development yarn webpack serve

# Build
# -----

.PHONY: build
build: node_modules
	yarn webpack
