import React from "react";
import Card from "./Card";
import Contentdetails   from "../emojipedia"



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Contentdetails.map(content=>{
          return(
          <Card 
            key = {content.id}
            id = {content.id}
            cardEmoji = {content.emoji}
            cardTitle = {content.name}
            cardContent = {content.meaning}
          />
          )
        })}
      </dl>


    </div>
  );
}

export default App;
