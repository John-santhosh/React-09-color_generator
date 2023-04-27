import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
const ColorList = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((color, index) => {
        return (
          <SingleColor index={index} key={nanoid()} color={color}></SingleColor>
        );
      })}{" "}
    </div>
  );
};

export default ColorList;
