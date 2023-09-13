import React from "react";
import './SectionCaption.css';


function SectionCaption({ name }) {
  return (
    <div className="section-caption">
      <h2 className="section-caption__title">{name}</h2>
    </div>
  );
}

export { SectionCaption };