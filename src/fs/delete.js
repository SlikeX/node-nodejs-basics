import { unlink } from 'node:fs/promises';
import { URL } from 'node:url';

const fileName = 'fileToRemove.txt';
const errMsg = 'FS operation failed';
const path = 'files';

const remove = async () => {
    const url = getFullPath(`${path}/${fileName}`);
    try {
        await unlink(url)
    }catch (err){
        throw new Error(errMsg)
    };
};
function getFullPath(path) {
    return new URL( path,import.meta.url)
};

await remove();
