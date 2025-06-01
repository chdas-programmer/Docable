
import './styles.scss'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

import SlashCommand from './extensions/SlashCommandExtension'
import suggestion from './extensions/slashCommand'
import CustomShortcuts from './extensions/CustomShortcuts'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContentProvider, useEditorContent } from './ContextAPI/EditorContentContext'

const MenuBar = () => {
  const { editor } = useCurrentEditor()

 

  if (!editor) return null

  return (
    <div className="menu-bar">
      <div className="button-group">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          Code
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Bullet List
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </button>
        
      </div>
    </div>
  )
}

const extensions = [
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
  SlashCommand.configure({ suggestion }),
  CustomShortcuts,
  

  
]


const EditorWrapper = () => {
  const { setEditorHtml,editorHtml } = useEditorContent()

  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={editorHtml}
      editorProps={{
        attributes: {
          class: 'editor-content',
        },
      }}
      onUpdate={({ editor }) => {
        setEditorHtml(editor.getHTML())
        console.log(editorHtml);
      }
      
    
    }
    
    />
  )
}






export const content = `Hello Editors. Tiptap welcomes You!` // same as before

export default function App() {
  return (
    <div className="editor-container">
      
      <EditorWrapper />
    </div>
  )
}

