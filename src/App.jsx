import './App.css'
import FileTree from "./FileTree.jsx";
import {useActiveFile} from './activeFileContext.jsx';
import buildFileData from './utilities/buildFileData.js';

function App() {
    const {activeFile, setActiveFile} = useActiveFile();
    const nestedFileTree = buildFileData();

    return (
        <div className="app">
            <div className="background"></div>
            <div className="file-manager">
                <div className="file-section">
                    <h1>File Manager</h1>
                    <div className="file-container">
                        <FileTree data={nestedFileTree}></FileTree>
                    </div>
                </div>
                <div className="display-section">
                    <div className="tab">
                        {activeFile && (
                            <div className="active-tab">
                                <h1>{activeFile.name}</h1>
                                <div className="close-icon" onClick={() => setActiveFile(null)}></div>
                            </div>
                        )}
                        <div className="tab-right"></div>
                    </div>
                    <div className="file-content">
                        {activeFile?.contents}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App
