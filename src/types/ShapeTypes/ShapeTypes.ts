import React from "react";

export default interface IShapeProps extends React.HTMLProps<HTMLDivElement> {
  shapeType: "box" | "circle";
  
};

