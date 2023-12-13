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

.PHONY: serve
serve:
	python -m http.server 8080 --directory out

#  Bump version
#  ------------

.PHONY: release
VPART ?= minor
# target: release - Bump version
release:
	@git checkout develop
	@git pull
	@git checkout main
	@git pull
	@git merge develop
	@bump2version $(VPART)
	@git checkout develop
	@git merge main
	@git push --tags origin develop main

.PHONY: minor
minor: release

.PHONY: patch
patch:
	make release VPART=patch

.PHONY: major
major:
	make release VPART=major

# Dockerize
# ---------

.PHONY: docker
docker:
	docker build $(CURDIR) -t fl/latest -f assets/Dockerfile

RUN =
.PHONY: docker-run
docker-run: docker
	@docker run --rm -it -v $(CURDIR):/var/log/backend -p 8080:80 --name fl fl/latest $(RUN)
