node_modules: package.json yarn.lock
	yarn
	@touch node_modules

# Development
# -----------

.PHONY: dev run
dev run: node_modules
	NODE_ENV=development yarn webpack serve

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
