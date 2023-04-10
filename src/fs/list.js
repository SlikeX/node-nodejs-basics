import { readdir} from 'node:fs/promises';
import { URL } from 'node:url';

const errMsg = 'FS operation failed';
const path = 'files';

const list = async () => {
    const href = getFullPath(path);
    try {
        const files = await readdir(href)
        files.forEach((file)=>{
            console.log(file);
        })
    }catch (err){
        throw new Error(errMsg)
    }
};
function getFullPath(path) {
    return new URL( path,import.meta.url)
};

await list();
