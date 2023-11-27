// components/CodeBlock.js
import { useEffect } from 'react';
import Prism from 'prismjs';  

const CodeBlock = ({ code, language }) => {
  import(`prismjs/components/prism-${language}`).then((_) => {
    Prism.highlightAll();
  });
  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
