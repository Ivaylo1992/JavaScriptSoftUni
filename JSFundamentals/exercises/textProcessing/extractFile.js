function extractFile (path) {
    let folderEndIndex = path.indexOf('\\');

    while (folderEndIndex != -1) {
        path = path.substring(folderEndIndex + 1, path.length);
        folderEndIndex = path.indexOf('\\');
    }

    let file = path;

    let fileName;
    let extension;
    let extensionStartIndex = file.indexOf('.')

    while (true) {
        let currentIdx = file.indexOf('.', extensionStartIndex + 1)
        if (currentIdx === -1) {
            fileName = file.substring(0, extensionStartIndex);
            extension = file.substring(extensionStartIndex + 1, file.length)
            break;
        }

        extensionStartIndex = file.indexOf('.', extensionStartIndex + 1)
    }
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
    
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.bbc.cs')