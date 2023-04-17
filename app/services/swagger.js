import * as fs from 'fs';
import YAML from 'yaml';

/**
 * Syntaxe pour utiliser __dirname dans le cadre de ES6
 */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const swaggerFile = join(__dirname, '../swagger','/swagger.yaml');

const file = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = YAML.parse(file);

export { swaggerDocument };
