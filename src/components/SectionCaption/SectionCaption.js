import React from "react";
import './SectionCaption.css';


function SectionCaption({ name, modifier }) {
  return (
    <div className="section-caption">
      <h2 className={`section-caption__title ${modifier}`}>{name}</h2>
    </div>
  );
}

export { SectionCaption };