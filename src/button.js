const insertStyleSheet = () => {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    @keyframes bounce {
      30% {
        transform: translateY(0%);
      }
      40% {
        transform: translateY(-5%);
      }
      50% {
        transform: translateY(-10%);
      }
      60% {
        transform: translateY(-5%);
      }
      70% {
        transform: translateY(0%);
      }
    }

    .vapi-btn {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      animation: bounce 2s ease-in-out infinite;
    }
    .vapi-btn:hover {
      animation: none;
      transform: translateY(-5px);
    }

    .vapi-btn-is-active,
    .vapi-btn-is-loading,
    .vapi-btn-is-speaking {
      animation: none;
    }
  `;
  document.head.appendChild(styleSheet);
};

const createButtonElement = (
  { position = "bottom", color = `rgb(93, 254, 202)`, offset = "40px" },
  id = "vapi-support-btn"
) => {
  insertStyleSheet();
  var positionConfig = (offset) => ({
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
    ${positionConfig(offset)[position]}
    &:hover {animation: none;}
  `;
  button.className = "vapi-btn is-idle";

  return button;
};

export { createButtonElement };
