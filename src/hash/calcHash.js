import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const fileName = 'fileToCalculateHashFor.txt'
const path = 'files';
const algorithm = 'hex';

const calculateHash = async () => {
    const href = getFullPath(`${path}/${fileName}`);
    const content = await readFile(href);
    const hash = createHash('sha3-256').update(content).digest(algorithm);
    console.log('Hash:',hash)
};
function getFullPath(path) {
    return new URL( path,import.meta.url)
}

await calculateHash();
