import { toast } from "react-toastify";

const SingleColor = ({ index: ind, color }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    console.log(navigator.clipboard);
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(" color copied to clipBoard ");
      } catch (error) {
        toast.error("error");
      }
    }
  };
  return (
    <div
      onClick={saveToClipboard}
      className={ind > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
    </div>
  );
};

export default SingleColor;
