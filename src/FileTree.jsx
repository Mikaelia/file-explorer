import React, {useState} from 'react';
import { useActiveFile } from './activeFileContext.jsx';

import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const File = ({ name, contents }) => {
    const {setActiveFile} = useActiveFile();
    const handleSetActiveFile = (file) => {
        setActiveFile(file);
    };

    return (
    <div className="file" onClick={() => handleSetActiveFile({name, contents})}>
        <span className="name"><InsertDriveFileOutlinedIcon  className="name-icon"/>{name}</span>
    </div>
    )
}

const Folder = ({ name, children }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const toggleFolder = () => {
        setIsExpanded(!isExpanded);
    };

    return (
    <div className="folder" >
        <div className="name" onClick={toggleFolder}><FolderIcon className="name-icon"/>{name}</div>
        {
            isExpanded && (<div>
                {Object.entries(children).map(([itemName, item], index) => (
                    <TreeNode key={index} name={itemName} {...item} />
                ))}
            </div>)
        }
    </div>
    )
}

const TreeNode = ({name, contents, ...props}) => {
    if (contents) {
        return <File name={name} contents={contents}/>;
    } else {
        return <Folder name={name} children={props} />;
  }
};

const FileTree = ({ data }) => (
  <div>
    {Object.entries(data).map(([itemName, item], index) => (
      <TreeNode key={index} name={itemName} {...item} />
    ))}
  </div>
);

export default FileTree;
