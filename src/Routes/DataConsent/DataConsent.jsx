import React from "react";

import pdf from "./tratamiento de datos.pdf";
import './dataconsent.css'

export default function DataConsent() {
  return (
    <div className="iframe">
      <embed src={pdf} frameborder="0"></embed>
    </div>
  );
}
