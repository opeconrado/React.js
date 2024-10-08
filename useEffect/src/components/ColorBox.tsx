import { useEffect, useState } from "react";
function ColorBox({ color }: { color: string }) {
  const [bgColor, setBgColor] = useState<string>("white");
  useEffect(() => {
    setBgColor(color);
  }, [color]);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "200px",
        height: "200px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <p style={{ textAlign: "center", lineHeight: "165px", color: "black" }}>
        Cor Atual: {bgColor}
      </p>
    </div>
  );
}
export default ColorBox;
