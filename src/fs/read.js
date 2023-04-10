import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';

const errMsg = 'FS operation failed';
const path = 'files';
const fileName = 'fileToRead.txt';

const read = async () => {
    const href = getFullPath(`${path}/${fileName}`);
    try {
        let content = await readFile(href, 'utf-8')
        console.log(content);
    }catch (err){
        throw new Error (errMsg)
    }
};
function getFullPath(path) {
    return new URL( path,import.meta.url)
};
await read();
