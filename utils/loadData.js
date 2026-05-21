import fs from 'fs';

export function loadData(filePath) {
    {
        return JSON.parse(fs.readFileSync(filePath))
    }
}