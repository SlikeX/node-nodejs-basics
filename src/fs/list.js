import { readdir} from 'node:fs/promises';

const errMsg = 'FS operation failed';
const path = 'files';

const list = async () => {
    const url = getFullPath(path);
    try {
        const files = await readdir(url)
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
