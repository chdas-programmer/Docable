import { Extension } from '@tiptap/core'

const CustomShortcuts = Extension.create({
  name: 'custom-shortcuts',

  addKeyboardShortcuts() {
    return {
      'Mod-b': () => this.editor.commands.toggleBold(),
      'Mod-i': () => this.editor.commands.toggleItalic(),
      // Add more shortcuts as needed:
      // 'Mod-u': () => this.editor.commands.toggleUnderline(), // requires underline extension
    }
  },
})

export default CustomShortcuts
