import { URL } from 'node:url';
import {writeFile} from 'fs/promises'

const fileName = 'fresh.txt';
const str = 'I am fresh and young';
const errMsg = 'FS operation failed';

const create = async () => {
    const href = getPath();
    try {
        await writeFile(href, str, {flag: 'wx'})
    }catch (err){
        throw new Error(errMsg)
    }
};
function getPath() {
    return new URL( `files/${fileName}`,import.meta.url)
}

await create();
