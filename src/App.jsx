import React from "react";
import './app.scss'

export default ({ headerText, isTextShown }) => {
  return <div>
    <h1 className='header' style={{ padding: '10px 20px' }}>{headerText}</h1>
    {isTextShown && <p>The first react app</p>}
  </div>
}