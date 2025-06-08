#!/bin/bash

pnpm run server:build
rm -rf apps/mobile/nodejs-assets/nodejs-project/dist/*
cp -r apps/server/dist/* apps/mobile/nodejs-assets/nodejs-project/dist