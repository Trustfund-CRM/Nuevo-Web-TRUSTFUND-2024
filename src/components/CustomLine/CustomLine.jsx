export const CustomLine = ({ color, custom }) => {
  const customStyleLine = {
    display: "flex",
    width: "-webkit-fill-available",
    border: `1px solid ${color}`,
    position: "absolute",
    ...custom
  };

  return <div style={customStyleLine}></div>;
};
