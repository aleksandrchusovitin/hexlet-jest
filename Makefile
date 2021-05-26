install: install-deps

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish

.PHONY: test