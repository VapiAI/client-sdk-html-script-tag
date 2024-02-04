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

    .vapi-btn {
      border-radius: 50%;
      width: ${width};
      height: ${height};
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      animation: bounce 2s ease-in-out infinite;
      ${positionStyles[position]}
    }
    .vapi-btn-pill {
      border-radius: 20px;
    }
    .vapi-btn:hover {
      animation: none;
      transform: translateY(-5px);
    }

    .vapi-btn-is-active {
      background: radial-gradient(circle, rgba(255,255,255,0.2) -40%, ${active.color} 100%);
      box-shadow: 1px 1px 10px 0px ${active.color};
    }
    .vapi-btn-is-loading {
      background: radial-gradient(circle, rgba(255,255,255,0.2) -40%, ${loading.color} 100%);
      box-shadow: 1px 1px 10px 0px ${loading.color};
    }
    .vapi-btn-is-speaking {
      // Add speaking styles if different from active/loading/idle
    }
    .vapi-btn-is-idle {
      background: radial-gradient(circle, rgba(255,255,255,0.2) -40%, ${idle.color} 100%);
      box-shadow: 1px 1px 10px 0px ${idle.color};
    }
    @font-face {
      font-family: 'LucideIcons';
      src: url(https://unpkg.com/lucide-static@latest/font/Lucide.ttf) format('truetype');
    }
  `;
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
  button.className = "vapi-btn vapi-btn-is-idle";
  button.onclick = () => {};

  return button;
};

const defaultIconUrl =
  "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg";

// Function to create the updater function based on the config
const createStateUpdater = (config) => {
  return (button, state) => {
    const stateConfig = config[state];
    if (!stateConfig) return; // If no config for the state, do nothing

    // Update the button's appearance based on the state
    button.className = `vapi-btn vapi-btn-is-${state} ${
      stateConfig.type === "pill" ? "vapi-btn-pill" : ""
    }`;

    // Clear existing content
    button.innerHTML = "";

    // If the type is 'pill', add the structured content
    if (stateConfig.type === "pill") {
      const iconContainer = document.createElement("div");
      iconContainer.id = "vapi-icon-container";
      const icon = document.createElement("img");
      // Use the icon URL from the config if provided, otherwise use the default icon URL
      icon.src = stateConfig.icon || defaultIconUrl;
      icon.alt = "Icon"; // Provide an alt text for the icon
      iconContainer.appendChild(icon);

      const titleContainer = document.createElement("div");
      const title = document.createElement("h2");
      title.textContent = stateConfig.title; // Use the title from the config
      const subtitle = document.createElement("h4");
      subtitle.textContent = stateConfig.subtitle; // Use the subtitle from the config
      titleContainer.appendChild(title);
      titleContainer.appendChild(subtitle);

      button.appendChild(iconContainer);
      button.appendChild(titleContainer);
    }
  };
};

export { createButtonElement, createStateUpdater };
