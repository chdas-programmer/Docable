import { ReactRenderer } from '@tiptap/react'
import tippy from 'tippy.js'
import SlashCommandList from '../components/SlashCommandList/SlashCommandList'

export default {
  items: ({ query }) => [
    {
      title: 'Heading 1',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run()
      },
    },
    {
      title: 'Heading 2',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run()
      },
    },
    {
      title: 'Bold',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark('bold').run()
      },
    },
    {
      title: 'Italic',
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setMark('italic').run()
      },
    },
  ].filter(item => item.title.toLowerCase().startsWith(query.toLowerCase())).slice(0, 10),

  render: () => {
    let component = null
    let popup = null

    return {
      onStart: props => {
        component = new ReactRenderer(SlashCommandList, {
          props,
          editor: props.editor,
        })

        if (!props.clientRect) return

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        })
      },

      onUpdate(props) {
        component.updateProps(props)

        if (!props.clientRect) return

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
      },

      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          popup[0].hide()
          return true
        }
        return component.ref?.onKeyDown?.(props) || false
      },

      onExit() {
        popup[0].destroy()
        component.destroy()
      },
    }
  },
}
