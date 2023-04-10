import { stat } from 'fs';
import {cp} from 'fs/promises';

const fileName = 'files_copy';
const errMsg = 'FS operation failed';
const path = 'files';

const copy = async () => {
    const src = getFullPath(path);
    const copy = getFullPath(fileName);
    try {
        stat(src, () => {
            console.log('Copied');
        })
        await cp(src, copy, {errorOnExist:true, recursive:true, force:false})
    }catch (err){
        throw new Error(errMsg)
    }
};
function getFullPath(path) {
    return new URL( path,import.meta.url)
}

await copy();
