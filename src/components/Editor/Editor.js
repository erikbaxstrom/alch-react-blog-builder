import React from 'react';

import './Editor.css';

export default function Editor({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  text,
  setText,
  alignment,
  setAlignment,
}) {
  const titleHandler = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };
  const subtitleHandler = (event) => {
    // console.log(event.target.value);
    setSubtitle(event.target.value);
  };

  const textHandler = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };

  const alignmentHandler = (event) => {
    // console.log(event.target);
    setAlignment(event.target.value);
  };

  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" value={title} onChange={titleHandler} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" value={subtitle} onChange={subtitleHandler} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group" onChange={alignmentHandler}>
          <label>
            <input name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} value={text} onChange={textHandler} />
        <label>Text</label>
      </div>
    </div>
  );
}
