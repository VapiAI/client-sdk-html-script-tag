import Vapi from "@vapi-ai/web";
import defaultAssistant from "./assistant";
import { createButtonElement } from "./button";
import { defaultListeners } from "./listeners";

const runSDK = ({
  apiKey = "",
  assistant = defaultAssistant(),
  position = "bottom",
  color = `rgb(93, 254, 202)`,
  offset = "40px",
}) => {
  const vapi = new Vapi(apiKey);
  const button = createButtonElement({ position, color, offset });

  defaultListeners(vapi, button, color, assistant);

  document.body.appendChild(button);

  window.vapiSDK.on = vapi.on;
  window.vapiSDK.on("message", (message) => {
    console.log("inside message", message);
  });

  vapi.on("message", (message) => {
    console.log("inside message", message);
  });

  return vapi;
};

window.vapiSDK = {
  run: runSDK,
};
