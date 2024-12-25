import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"

const defaultMarkdown = `# Welcome to my markdown previewer!

## This is a subheading

Here is a [link to FreeCodeCamp](https://www.freecodecamp.org/)

Inline code example: \`console.log('Hello, World!')\`

\`\`\`
function greet() {
  console.log('Hello, World!');
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote

![Image](https://via.placeholder.com/150)

**Bold Text**
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}}>Markdown previewer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
