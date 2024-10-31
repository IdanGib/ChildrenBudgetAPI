const { writeFileSync, rmSync, existsSync } = require('fs');
const { config } = require('dotenv');
const { resolve } = require('path');
const envFile = '.env.secrets';
config({ path: envFile });
const baseDir = process.cwd();

const envPath = resolve(baseDir, '');
const secretsDir = resolve(baseDir, 'secrets');

if (!existsSync(envPath)) {
    return console.log('.env file not exists');
}
if (existsSync(secretsDir)) {
    console.log('exitst ', secretsDir);
}
console.log('generating secrets folder for docker compose');
console.log('done');

