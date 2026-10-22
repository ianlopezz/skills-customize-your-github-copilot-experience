#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const [id, title, description, ...extraArgs] = process.argv.slice(2);
const configPath = path.resolve(__dirname, "../../../../config.json");

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!id || !title || !description || extraArgs.length > 0) {
  fail(
    'Usage: node .github/skills/new-assignment/scripts/update-config.js <id> "<title>" "<description>"',
  );
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
  fail("Assignment ID must use lowercase letters, numbers, and single hyphens.");
}

const normalizedTitle = title.trim();
const normalizedDescription = description.trim();
if (!normalizedTitle || !normalizedDescription) {
  fail("Assignment title and description must not be empty.");
}

let config;
try {
  config = JSON.parse(fs.readFileSync(configPath, "utf8"));
} catch (error) {
  fail(`Could not read or parse ${configPath}: ${error.message}`);
}

if (!config || !Array.isArray(config.assignments)) {
  fail('Invalid config.json: expected an "assignments" array.');
}

if (config.assignments.some((assignment) => assignment.id === id)) {
  fail(`Assignment "${id}" is already registered.`);
}

config.assignments.push({
  id,
  title: normalizedTitle,
  description: normalizedDescription,
  path: `assignments/${id}`,
});

try {
  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
} catch (error) {
  fail(`Could not write ${configPath}: ${error.message}`);
}

console.log(`Registered assignment "${id}" in config.json.`);
