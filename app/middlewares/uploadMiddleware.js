import deleteFile from '../services/file/delete.js';

/**
     * Syntaxe pour utiliser __dirname dans le cadre de ES6
     */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const uploadMiddleware = {
    insertImageName (request, response, next) {
        if (request.file) {
            request.body.image = request.file.filename;
            if (request.instance) {
                deleteFile(join(__dirname,'../../public/images/'+ request.instance.image));
            } 
        } else {
            request.body.image = request.instance.image;
        }
        next();
    },
};
