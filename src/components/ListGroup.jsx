import { Fragment, useState } from "react";
import { MouseEvent } from "react";

/**
 * @param {string[]} items - the list of items displayed on the list
 * @param {string} heading - the heading of the list
 * @param {(item: string) => void} onSelectItem - The function invoked when the item is selected.
 */
function ListGroup({ items, heading, onSelectItem }) {
  // A Hook telling that this component can have data or state change over time.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState("")

  return (
    // use () can break the return statement into multiple lines
    // use <> and </> to automatically wrap the content with a Fragment
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}

      {/* Render contents based on the condition */}
      <ul class="list-group">
        {/* act as the for loot to generate the <li> for each item in the items list */}
        {items.map((cityName, index) => (
          <li
            key={cityName}
            class={
              index == selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(cityName);
            }}
          >
            {cityName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
