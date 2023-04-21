import multer from 'multer';

/**
     * Syntaxe pour utiliser __dirname dans le cadre de ES6
     */
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};
    
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, join(__dirname,'../../public/images/'));
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});
    
export const upload = multer({storage: storage});