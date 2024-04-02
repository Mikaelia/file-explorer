import {fileTreeObjects} from "./data";
 const buildFileTree = () => {
  const fileTree = {};

  fileTreeObjects.forEach(({ path, contents }) => {
    const pathParts = path.split('/');
    let currentDir = fileTree;

    // Traverse the path, creating nested objects as needed
    pathParts.forEach((part, index) => {
      if (!currentDir[part]) {
        // For files, store the contents
        if (index === pathParts.length - 1) {
          currentDir[part] = { contents };
        } else {
          currentDir[part] = {};
        }
      }
      currentDir = currentDir[part];
    });
  });

  return fileTree;
};

 export default buildFileTree;