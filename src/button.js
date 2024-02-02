const createButtonElement = (
  { position = "bottom", color = `rgb(93, 254, 202)` },
  id = "vapi-support-btn"
) => {
  var positionConfig = (offset = "20px") => ({
    "bottom-right": `bottom: ${offset};right: ${offset};`,
    "bottom-left": `bottom: ${offset};left: ${offset};`,
    "top-right": `top: ${offset};right: ${offset};`,
    "top-left": `top: ${offset};left: ${offset};`,
    bottom: `bottom: ${offset};left: 50%;margin-left: -25px;`,
    right: `top: 50%;right: ${offset};margin-top: -25px;`,
    left: `top: 50%;left: ${offset};margin-top: -25px;`,
    top: `top: ${offset};left: 50%;margin-left: -25px;`,
  });

  const button = document.createElement("button");
  button.id = id;
  button.onclick = () => {};
  // boxShadow: `1px 1px ${10 + audioLevel * 40}px ${audioLevel * 10}px ${color}`,

  button.style.cssText = `
    background: radial-gradient(circle, rgba(255,255,255,0.2) -40%, ${color} 100%);
    box-shadow: 1px 1px 10px 0px ${color};
    ${positionConfig()[position]}
    &:hover {animation: none;}
  `;
  button.className = "vapi-btn is-idle";

  return button;
};

export { createButtonElement };
