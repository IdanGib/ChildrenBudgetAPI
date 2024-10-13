const fs = require('fs');
const { config } = require('dotenv');
config();
const path = './.npmrc';
const line1 = process.env.NPMRC_GITHUB_PACKAGES_AUTH_LINE;
const line2 = '@idangib:registry=https://npm.pkg.github.com';
const text = fs.readFileSync(path);
const exits = text.toString().includes(line1);
if (!exits) {
    fs.writeFileSync(path, [line1, line2].join('\n'));
}