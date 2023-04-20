import React from "react";


export default interface IQnaPropsTypes {
  question: string;
  answer: React.ReactNode | JSX.Element | (() => JSX.Element);
};

