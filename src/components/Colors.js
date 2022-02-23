import React from "react";

const Colors = () => {
  const primaryColorsArr = ["red", "blue", "yellow", "green"];
  const [newColor, setNewColor] = React.useState("");
  const [colorsArr, setColorsArr] = React.useState(primaryColorsArr);

  //map
  //filter
  //concat
  //find

  const removeColor = (colorToRemove) => {
    //remove color from the array
    let filteredArray = colorsArr.filter((color) => {
      return color !== colorToRemove;
    });
    console.log(filteredArray);
    //set the color with the new filtered array
    setColorsArr(filteredArray);
  };

  return (
    <div>
      {colorsArr.map((color) => {
        return (
          <div>
            <p style={{ color: color }}>{color}</p>
            <button onClick={() => removeColor(color)}>Remove {color}</button>
          </div>
        );
      })}
      <input
        type="text"
        placeholder="add new color"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button onClick={() => setColorsArr(colorsArr.concat(newColor))}>
        Add Color
      </button>
    </div>
  );
};

export default Colors;
