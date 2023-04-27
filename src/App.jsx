import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from "values.js";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColor] = useState(new Values("#f15025").all(10));

  function addColor(color) {
    try {
      setColor(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <main>
      <Form addColor={addColor}></Form>
      <ColorList colors={colors}></ColorList>
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
