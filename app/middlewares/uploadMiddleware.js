import deleteFile from '../services/file/delete.js';

/**
     * Syntaxe pour utiliser __dirname dans le cadre de ES6
     */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const uploadMiddleware = {
    /**
     * Load an image inside the request object
     * If the image exist, delete the old for new version inside request.instance.
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    insertImageName (request, response, next) {

        if(request.url === '/create' && !request.file){
            return response.render('admin/form', { error: {message: 'Merci d\'ajouter une image'}, title: 'Création d\'un nouveau produit', action: 'create'  });
        } else if (request.file) {
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
