/* eslint-disable indent */
import React from "react";

import { IShapeProps } from "@/types";

import "./shape.css";

/**
 * 
 * @param {IShapeProps} width must be in px, default 100
 * @param {IShapeProps} height must be in px, default 100
 * @param {IShapeProps} shapeType must be box or circle, default box
 * @param {IShapeProps} backgroundColor must be a color value in string, default #F8F8FD
 * @example
 * <Shape shapeType="box" width={100} height={100} backgroundColor="#F8F8FD" />
 * for circle width = diameter, height has no inference
 * @returns 
 */

export default function Shape({ shapeType="box", ...props }: IShapeProps): JSX.Element {
	switch (shapeType) {
    case "box":
      return <div {...props} />
    case "circle":
      return <div {...props} />
	}
};

