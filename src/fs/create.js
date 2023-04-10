import { URL } from 'node:url';
import {writeFile} from 'fs/promises'

const fileName = 'fresh.txt';
const str = 'I am fresh and young';
const errMsg = 'FS operation failed';

const create = async () => {
    const url = getPath();
    try {
        await writeFile(url, str, {flag: 'wx'})
    }catch (err){
        console.log(err);
        throw Error (errMsg)
    }
};
function getPath() {
    return new URL( `files/${fileName}`,import.meta.url)
}

await create();
