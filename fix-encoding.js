const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(dirPath);
    });
}

walk(directoryPath, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = content;
        
        modified = modified.replace(/coleccin/gi, match => match[0] === 'C' ? 'Colección' : 'colección');
        modified = modified.replace(/envos/gi, match => match[0] === 'E' ? 'Envíos' : 'envíos');
        modified = modified.replace(/envo/gi, match => match[0] === 'E' ? 'Envío' : 'envío');
        modified = modified.replace(/atencin/gi, match => match[0] === 'A' ? 'Atención' : 'atención');
        modified = modified.replace(/BAH\?A/g, 'BAHÍA');
        modified = modified.replace(/Baha/g, 'Bahía');
        modified = modified.replace(/rabes/g, 'árabes');
        modified = modified.replace(/RABES/g, 'ÁRABES');
        modified = modified.replace(/COMPR\?/g, 'COMPRÁ');
        modified = modified.replace(/CONSULT\?/g, 'CONSULTÁ');
        modified = modified.replace(/Evitǭ/g, 'Evitá');
        modified = modified.replace(/catǭlogo/g, 'catálogo');
        modified = modified.replace(/ExprǸs/g, 'Exprés');
        modified = modified.replace(/Pasǭs/g, 'Pasás');
        modified = modified.replace(/Eleg/g, 'Elegí');
        modified = modified.replace(/Mirǭ/g, 'Mirá');
        modified = modified.replace(/\?-/g, '-');
        modified = modified.replace(/mbar/g, 'Ámbar');
        modified = modified.replace(/ATENCI"N/g, 'ATENCIÓN');

        // Let's also do a general cleanup
        modified = modified.replace(//g, 'í'); // This might be dangerous but let's test

        if (content !== modified) {
            fs.writeFileSync(filePath, modified, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
});
