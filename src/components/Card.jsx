import React from "react";
import Emoji from "./Emoji";
import Cardtitle from "./Title";
import ContentText from "./Content";

function Card(e){
    return(

        <div className="term">
          <dt>
            <Emoji 
                emoji = {e.cardEmoji}
            />
            <Cardtitle  
                title = {e.cardTitle}
            />
          </dt>
            <ContentText 
                content = {e.cardContent}
            />
        </div>

    )
}


export default Card;