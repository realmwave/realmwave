export default interface IGotAProjectCardProps extends React.HTMLProps<HTMLDivElement> {
  _id?: number | null;
  icon: string;
  headline: string;
  bodyText: string;
  textColor: "black" | "white";
};

