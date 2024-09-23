import { useState } from "react";
import "./App.css";

import ReactMarkdown from "react-markdown";

function App() {
  const DEFAULT_TEXT = `
  # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

.



You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `;

  const [input, setInput] = useState(DEFAULT_TEXT);

  const receiveInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div id="editor-container">
        <h3>Editor</h3>
        <textarea
          onChange={receiveInput}
          name="editor"
          id="editor"
          type="text"
          value={input}
        ></textarea>
      </div>
      <div id="preview-container">
        <h3>Preview</h3>
        <div id="preview">
          <ReactMarkdown>{input}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
