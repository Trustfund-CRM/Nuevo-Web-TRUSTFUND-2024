export const CustomLine = ({ color, custom }) => {
  const customStyleLine = {
    display: "flex",
    width: "100%",
    border: `1px solid ${color}`,
    position: "absolute",
    ...custom
  };

  return <div style={customStyleLine}></div>;
};
