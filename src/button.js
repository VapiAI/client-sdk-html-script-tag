const createButtonElement = (
  { position = "bottom-right" },
  id = "vapi-support-btn"
) => {
  var positionConfig = (offset = "20px") => ({
    "bottom-right": `bottom: ${offset};right: ${offset};`,
    "bottom-left": `bottom: ${offset};left: ${offset};`,
    "top-right": `top: ${offset};right: ${offset};`,
    "top-left": `top: ${offset};left: ${offset};`,
    bottom: `bottom: ${offset};left: 50%;transform: translateX(-50%);`,
  });

  const button = document.createElement("button");
  button.innerHTML = "Play";
  button.id = id;
  button.onclick = () => {};
  // boxShadow: `1px 1px ${10 + audioLevel * 40}px ${audioLevel * 10}px orange`,

  button.style.cssText = `
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: white;
    border: none;
    cursor: pointer;
    background: orange;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-shadow: 1px 1px 10px 0px orange;
    ${positionConfig()[position]}
  `;

  return button;
};

export { createButtonElement };
