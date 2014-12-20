#!/bin/bash
npm install
knex migrate:latest
knex seed:run