import React, { createContext, useState, useContext } from 'react';

const ActiveFileContext = createContext();
export const ActiveFileProvider = ({ children }) => {
  const [activeFile, setActiveFile] = useState({name: "App.jsx", contents: "Content"});

  return (
    <ActiveFileContext.Provider value={{ activeFile, setActiveFile }}>
      {children}
    </ActiveFileContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useActiveFile = () => useContext(ActiveFileContext);
