// utils/customMarkdownExporter.js

export function customMarkdownExporter(doc) {
    if (!doc || !doc.content) return ''
  
    const renderNode = (node) => {
      switch (node.type) {
        case 'heading':
          return `${'#'.repeat(node.attrs.level)} ${renderContent(node.content)}\n\n`
        case 'paragraph':
          return `${renderContent(node.content)}\n\n`
        case 'text':
          {let text = node.text || ''
          if (node.marks) {
            node.marks.forEach((mark) => {
              if (mark.type === 'bold') text = `**${text}**`
              if (mark.type === 'italic') text = `*${text}*`
              if (mark.type === 'code') text = `\`${text}\``
            })
          }
          return text
        }
        case 'bulletList':
          return `${node.content.map(item => `- ${renderContent(item.content)}\n`).join('')}\n`
        case 'orderedList':
          return `${node.content.map((item, idx) => `${idx + 1}. ${renderContent(item.content)}\n`).join('')}\n`
        case 'blockquote':
          return node.content.map(c => `> ${renderNode(c)}`).join('')
        case 'codeBlock':
          return `\`\`\`\n${renderContent(node.content)}\n\`\`\`\n\n`
        case 'horizontalRule':
          return `---\n\n`
        default:
          return renderContent(node.content)
      }
    }
  
    const renderContent = (content = []) => {
      return content.map(renderNode).join('')
    }
  
    return renderContent(doc.content).trim()
  }
  