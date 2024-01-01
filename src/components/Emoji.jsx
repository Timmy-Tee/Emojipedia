import React from "react";

function Emoji(e){
    return(
        <span className="emoji" role="img" aria-label="Tense Biceps">
              {e.emoji}
        </span>
    )
}

export default Emoji;