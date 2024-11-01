const { writeFileSync, rmSync, existsSync, mkdirSync } = require('fs');
const { config } = require('dotenv');
const { resolve } = require('path');

const envFile = '.env.secrets';
const envSecretsPaths = '.env';

config({ path: envFile });

const secretsFields = [
    'DB_POSTGRESQL_PASSWORD',
    'DB_POSTGRESQL_USERNAME',
    'DB_POSTGRESQL_DATABASE',
    'AUTH_SECRET',
    'AUTH_GOOGLE_ID',
    'AUTH_GOOGLE_SECRET',
];

const baseDir = process.cwd();
const secretsDirName = 'secrets';
const envPath = resolve(baseDir, envFile);
const secretsDir = resolve(baseDir, 'secrets');
const envSecretsPathsPath = resolve(baseDir, envSecretsPaths);

if (!existsSync(envPath)) {
    return console.log(`'${envFile}' not exists`);
}

if (existsSync(secretsDir)) {
    rmSync(secretsDir, { recursive: true });
}
mkdirSync(secretsDir);
const envContent = [
    'API_PORT=3000',
    'DB_POSTGRESQL_HOST=localhost',
    'DB_POSTGRESQL_PORT=5432',
    'AUTH_GOOGLE_REDIRECT="http://localhost:3000/auth/google/callback"'
];
for (const field of secretsFields) {
    const filename = `${field.toLowerCase()}.txt`;
    const path = resolve(secretsDir, filename);
    const data = process.env[field];
    if (data) {
        writeFileSync(path, data);
        envContent.push(`${field}_FILE="${secretsDirName}/${filename}"`);    
    } else {
        console.log(field, data);
    }
}

writeFileSync(envSecretsPathsPath, envContent.join('\n') + '\n');

console.log('generating secrets folder for docker compose');
console.log('done');

