/**
 * Syntaxe pour utiliser __dirname dans le cadre de ES6
 */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const loggerService = {
    /**
     * 
     * @param {Request} request 
     * @param {*} error 
     */
    async write(request, error) {
        const fileName = new Date().toISOString().slice(0, 10) + '.log';
        const filePath = resolve(__dirname, '../../../logs') + '/' + fileName;
        const fileBody = `${new Date().toISOString()};${request.ip};${request.url};${error.statusCode};${error.message}\n`;

        const isFileExist = await fileExists(filePath);
        
        try {
            // si le fichier n'existe pas
            if (!isFileExist) {
                await fs.appendFile(filePath,'date;ip;url;statusCode;message\n');
            }

            let file = await fs.open(filePath,'a');
            await file.appendFile(fileBody);
            file.close();
        }
        catch (error) {
            console.log(error);
        }
    }
};

async function fileExists (path) {  
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}