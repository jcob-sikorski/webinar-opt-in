"use client";

import { useEffect } from "react";

const SURVEY_ID = "QF9ob7LMxJtTlCf8MKKd";
const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

export function ApplicationSurveyEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/survey/${SURVEY_ID}`}
      scrolling="no"
      id={SURVEY_ID}
      title="Formularz kwalifikacyjny"
      style={{ width: "100%", border: "none" }}
      className="w-full"
    />
  );
}