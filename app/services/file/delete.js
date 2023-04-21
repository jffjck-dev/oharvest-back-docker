import fs from 'fs';

export default function deleteFile (filePath) {
    fs.unlink(filePath, (error => {
        if (error) {
            console.log(error);
        }
    }));
}
