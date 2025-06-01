// EditorContentContext.js
import { createContext, useContext, useState } from 'react';

const EditorContentContext = createContext();

export const EditorContentProvider = ({ children }) => {
  const [editorHtml, setEditorHtml] = useState(`<h1>Hello from Tiptap!</h1>`);

  return (
    <EditorContentContext.Provider value={{ editorHtml, setEditorHtml }}>
      {children}
    </EditorContentContext.Provider>
  );
};

export const useEditorContent = () => useContext(EditorContentContext);
