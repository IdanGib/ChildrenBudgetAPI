const { writeFileSync, existsSync } = require('fs');
const { resolve } = require('path');
const envFile = '.env.secrets';
const secretsFields = [
    'DB_POSTGRESQL_PASSWORD',
    'DB_POSTGRESQL_USERNAME',
    'DB_POSTGRESQL_DATABASE',
    'AUTH_SECRET',
    'AUTH_GOOGLE_ID',
    'AUTH_GOOGLE_SECRET',
];
const baseDir = process.cwd();
const path = resolve(baseDir, envFile);
if (existsSync(path)) {
    console.log(`'${envFile}' already exist`);
} else {
    const lines = [];
    for (const field of secretsFields) {
        lines.push(`${field}=`);
    }
    writeFileSync(path, lines.join('\n'));
}

