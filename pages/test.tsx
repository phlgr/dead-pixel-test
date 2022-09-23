import { Box } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { MouseEvent, useState } from "react";

const TestPage = () => {
  const colors = ["#000", "#fff", "#f00", "#0f0", "#00f"];
  const [color, setColor] = useState(0);
  const changeColor = (reverse?: boolean) => {
    if (reverse) {
      setColor((color) => (color === 0 ? colors.length - 1 : color - 1));
    } else {
      setColor((color) => (color === colors.length - 1 ? 0 : color + 1));
    }
  };
  useHotkeys([
    ["Enter", () => changeColor()],
    ["ArrowRight", () => changeColor()],
    ["Backspace", () => changeColor(true)],
    ["ArrowLeft", () => changeColor(true)],
  ]);
  return (
    <Box
      onClick={() => changeColor()}
      onContextMenu={(event: MouseEvent) => {
        event.preventDefault();
        changeColor(true);
      }}
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: colors[color],
      }}
    ></Box>
  );
};

export default TestPage;
