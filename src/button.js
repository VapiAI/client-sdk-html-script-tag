const insertStyleSheet = ({
  idle,
  loading,
  active,
  width,
  height,
  position,
  offset,
}) => {
  const halfWidth = parseInt(width) / 2;
  const halfHeight = parseInt(height) / 2;
  const positionStyles = {
    "bottom-right": `bottom: ${offset}; right: ${offset};`,
    "bottom-left": `bottom: ${offset}; left: ${offset};`,
    "top-right": `top: ${offset}; right: ${offset};`,
    "top-left": `top: ${offset}; left: ${offset};`,
    bottom: `bottom: ${offset}; left: 50%; margin-left: -${halfWidth}px;`,
    right: `top: 50%; right: ${offset}; margin-top: -${halfHeight}px;`,
    left: `top: 50%; left: ${offset}; margin-top: -${halfHeight}px;`,
    top: `top: ${offset}; left: 50%; margin-left: -${halfWidth}px;`,
  };

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
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .vapi-btn {
      border-radius: 50%;
      min-width: ${width};
      height: ${height};
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: flex;
      text-align: left;
      align-items: center;
      position: absolute;
      padding: 0;
      animation: bounce 2s ease-in-out infinite;
      ${positionStyles[position]}
    }
    .vapi-btn-round {
      justify-content: center;
    }
    .vapi-btn-pill {
      border-radius: 8px;
      color: black;
      background: white;
      justify-content: flex-start;
      padding: 0px 10px;
    }
    .vapi-btn:hover {
      animation: none;
      transform: translateY(-5px);
    }
    #vapi-icon-container {
      padding: 5px;
      margin: 5px;
      border-radius: 5px;
    }

    #vapi-title-container {
      padding: 5px 10px;
    }
    #vapi-title {
      font-size: 1.1em;
    }
    #vapi-subtitle {
      font-size: 0.9em;
    }

    .vapi-btn-is-loading > #vapi-icon-container > img {
      animation: spin 1s linear infinite;
    }

    .vapi-btn-is-active {
      background: ${active.color};
      box-shadow: 1px 1px 80px 20px ${active.color};
    }
    .vapi-btn-pill.vapi-btn-is-active {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-active > #vapi-icon-container {
      background: ${active.color};
    }


    .vapi-btn-is-idle {
      background: ${idle.color};
      box-shadow: 1px 1px 10px ${idle.color};
    }
    .vapi-btn-pill.vapi-btn-is-idle {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-idle > #vapi-icon-container {
      background: ${idle.color};
    }

    .vapi-btn-is-loading {
      background: ${loading.color};
      box-shadow: 1px 1px 80px 20px ${loading.color};
    }
    .vapi-btn-pill.vapi-btn-is-loading {
      background: white;
    }
    .vapi-btn-pill.vapi-btn-is-loading > #vapi-icon-container {
      background: ${loading.color};
    }
    .vapi-btn-is-speaking {
      // Add speaking styles if different from active/loading/idle
    }
    @font-face {
      font-family: 'LucideIcons';
      src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
    }
  `;

  for (let i = 0; i <= 10; i++) {
    styleSheet.innerText += `
      .vapi-btn-volume-${i} {
        box-shadow: 1px 1px ${10 + i * 4}px ${i * 3}px ${
      active.color
    }, inset 0px 0px 10px 0px rgba(0,0,0,0.1);
      }
    `;
  }
  document.head.appendChild(styleSheet);
};

const createButtonElement = (
  {
    position = "bottom",
    offset = "40px",
    width = "50px",
    height = "50px",
    idle,
    loading,
    active,
  },
  id = "vapi-support-btn"
) => {
  insertStyleSheet({ idle, loading, active, width, height, position, offset });
  const button = document.createElement("button");
  button.id = id;
  button.className = "vapi-btn vapi-btn-round vapi-btn-is-idle";
  button.onclick = () => {};

  return button;
};

const defaultIconUrl =
  "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg";

// Function to create the updater function based on the config
const createButtonStateHandler = (config) => {
  console.log("config btn state creator", config);
  return (button, state) => {
    console.log("config btn state handler", button, state);
    const stateConfig = config[state];
    if (!stateConfig) return; // If no config for the state, do nothing

    // Update the button's appearance based on the state
    button.className = `vapi-btn vapi-btn-is-${state} ${
      stateConfig.type === "pill"
        ? "vapi-btn-pill"
        : stateConfig.type === "round"
        ? "vapi-btn-round"
        : ""
    }`;

    // Clear existing content
    button.innerHTML = "";

    // If the type is 'pill', add the structured content
    if (stateConfig.type === "pill") {
      const iconContainer = document.createElement("div");
      iconContainer.id = "vapi-icon-container";
      const icon = document.createElement("img");
      icon.src = stateConfig.icon || defaultIconUrl;
      icon.alt = "Icon";
      iconContainer.appendChild(icon);

      const titleContainer = document.createElement("div");
      titleContainer.id = "vapi-title-container"; // Added id for titleContainer
      const title = document.createElement("div");
      title.id = "vapi-title"; // Added id for title
      title.textContent = stateConfig.title;
      const subtitle = document.createElement("div");
      subtitle.id = "vapi-subtitle"; // Added id for subtitle
      subtitle.textContent = stateConfig.subtitle;
      titleContainer.appendChild(title);
      titleContainer.appendChild(subtitle);

      button.appendChild(iconContainer);
      button.appendChild(titleContainer);
    } else if (stateConfig.type === "round") {
      const iconContainer = document.createElement("div");
      iconContainer.id = "vapi-icon-container";
      const icon = document.createElement("img");
      icon.src = stateConfig.icon || defaultIconUrl;
      icon.alt = "Icon";
      iconContainer.appendChild(icon);

      button.appendChild(iconContainer);
    }
  };
};

export { createButtonElement, createButtonStateHandler };
