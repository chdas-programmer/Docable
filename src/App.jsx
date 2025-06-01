// File: App.jsx
import Editor from './Editor';
import EditorHeader from './components/EditorHeader';
import './styles.scss';

function Footer() {
  return (
    <footer className="w-full text-center py-4 text-sm text-gray-500">
      Built with Tiptap • Supports all modern formatting features
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-indigo-200">
      <EditorHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Beautiful Documents
            </h2>
            <p className="text-lg text-gray-600">
              A powerful rich text editor with modern formatting tools
            </p>
          </div>

          <Editor />

          <div className="mt-8 text-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
