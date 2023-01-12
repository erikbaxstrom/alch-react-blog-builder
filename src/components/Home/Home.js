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
  const [alignment, setAlignment] = useState('left');
  const [font, setFont] = useState('architect');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, text, alignment, font }} />
      <Editor
        {...{
          title,
          setTitle,
          subtitle,
          setSubtitle,
          text,
          setText,
          alignment,
          setAlignment,
          font,
          setFont,
        }}
      />
    </main>
  );
}
