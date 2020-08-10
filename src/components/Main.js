import React, { useState } from "react";
import List from "./List";

//The list container
export default function Main({
  cards,
  onFormSubmit,
  moveCard,
  deleteCard,
  editCard,
  dragCard,
}) {
  const [dropList, setDropList] = useState("");
  return (
    <main className="Main">
      <section className="relativeContainer">
        {/*header is a prop I decided to use. This prop can be referenced by writing {props.header}
      This is a good level to filter data, so we dont pass along too much (save speed)
      Here I say: let cards be all enrties in the card array that match the filter, here the filter is on the list*/}
        <List
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          dropList={dropList}
          header="To Do"
          cards={cards.filter((c) => c.list === "To Do")}
        />
        <List
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          dropList={dropList}
          header="Doing"
          cards={cards.filter((c) => c.list === "Doing")}
        />
        <List
          deleteCard={deleteCard}
          moveCard={moveCard}
          editCard={editCard}
          dragCard={dragCard}
          onFormSubmit={onFormSubmit}
          setDropList={setDropList}
          dropList={dropList}
          header="Done"
          cards={cards.filter((c) => c.list === "Done")}
        />
      </section>
    </main>
  );
}
