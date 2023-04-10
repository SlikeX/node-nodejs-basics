import { rename as fileRename } from 'node:fs/promises';
import { URL } from 'node:url';

const errMsg = 'FS operation failed';
const path = 'files';
const fileName = 'wrongFilename.txt';
const newFilename = 'properFilename.md';

const rename = async () => {
    const src = getFullPath(`${path}/${fileName}`);
    const res = getFullPath(`${path}/${newFilename}`);
    try {
        await fileRename(src, res)
    }catch (err){
        throw new Error (errMsg)
    }
};
function getFullPath(path) {
    return new URL( path,import.meta.url)
};

await rename();
