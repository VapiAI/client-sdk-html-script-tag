import Vapi from "@vapi-ai/web";
import defaultAssistant from "./assistant";
import { createButtonElement } from "./button";
import { defaultListeners } from "./listeners";

const runSDK = ({
  apiKey = "",
  assistant = defaultAssistant(),

  buttonConfig = {
    position: "bottom",
    offset: "40px",
    width: "50px",
    height: "50px",
    idle: {
      color: `rgb(93, 254, 202)`,
      type: "pill",
      title: "Have a quick question?",
      subtitle: "Click here to talk with our AI assistant",
      icon: ``,
    },
    loading: {
      color: `rgb(255, 255, 255)`,
      type: "pill",
      title: "Connecting...",
      subtitle: "Please wait",
      icon: ``,
    },
    active: {
      color: `rgb(255, 255, 255)`,
      type: "pill",
      title: "Call is in progress...",
      subtitle: "Click again to end the call.",
      icon: ``,
    },
  },
  // position = "bottom",
  // color = `rgb(93, 254, 202)`,
  // offset = "40px",
}) => {
  const vapi = new Vapi(apiKey);
  const button = createButtonElement(buttonConfig);

  defaultListeners(vapi, button, color, assistant);

  document.body.appendChild(button);
};

window.vapiSDK = {
  run: runSDK,
};
