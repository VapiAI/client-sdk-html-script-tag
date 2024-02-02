import Vapi from "@vapi-ai/web";
import defaultAssistant from "./assistant";
import { createButtonElement } from "./button";

const runSDK = ({ apiKey = "", assistant = defaultAssistant() }) => {
  const vapi = new Vapi(apiKey);
  const button = createButtonElement({});
  let isActiveCall = false;
  let isLoading = false;

  function toggleCall() {
    isLoading = true;
    if (isActiveCall) {
      vapi.stop();
      isActiveCall = false;
      button.innerText = "Play";
    } else {
      vapi.start(assistant);
      isActiveCall = true;
      button.innerText = "Stop";
    }
  }

  button.addEventListener("click", toggleCall);
  vapi.on("volume-level", (audioLevel) => {
    button.style.boxShadow = `1px 1px ${10 + audioLevel * 40}px ${
      audioLevel * 10
    }px orange`;
  });

  document.body.appendChild(button);
};

window.vapiSDK = {
  run: runSDK,
};
