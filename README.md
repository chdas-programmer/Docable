# Docable 📝

Docable is a rich-text editor built using **React**, **TipTap**, and **Tailwind CSS**, featuring a smooth UI, slash-command support, and PDF export capability.

---

## 🚀 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/chdas-programmer/Docable.git
   cd docable
   npm install
## 🧠 Approach & Key Decisions

- **Rich Text Editing with TipTap**  
  TipTap was selected for its modular architecture and ease of integration with React. We used `@tiptap/starter-kit` along with extensions for **bold**, **italic**, **code**, and **headings (H1, H2)** to provide a clean and focused writing experience. 

- **Slash Commands**  
  Inspired by modern editors like Notion, we implemented a slash command system using `@tiptap/suggestion` and `ReactRenderer`. It provides a fast and intuitive way for users to insert blocks. The dropdown is powered by `tippy.js` and `@floating-ui/react` for accurate positioning.

- **PDF Export Functionality**  
  We integrated `pdfmake` to allow users to generate a PDF version of the editor content. This required transforming the HTML content into a suitable format and preserving structure and basic styles.

- **Tailwind CSS + Vite**  
  Tailwind was used for utility-first, responsive UI design.

  ## 🚀 Demo

- 🎥 [Watch the video demo](https://www.loom.com/share/87872e6e73d64aac8cd26a10d09aedf3?sid=b6e475ee-c859-4d1c-8811-6d723e1e28b3)
- 🌐 [Try it live](https://docable-nu.vercel.app)


  



