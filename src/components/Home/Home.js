import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const [alignment, setAlignment] = useState('center');
  const [font, setFont] = useState('architect');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} text={text} alignment={alignment} font={font} />
      <Editor
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        text={text}
        setText={setText}
        alignment={alignment}
        setAlignment={setAlignment}
        font={font}
        setFont={setFont}
      />
    </main>
  );
}
