export function defaultListeners(vapi, button, color, assistant) {
  let isActiveCall = false;
  let isLoading = false;

  function toggleCall() {
    isLoading = true;
    button.classList.add("vapi-btn-is-loading");
    if (isActiveCall) {
      vapi.stop();
      isActiveCall = false;
    } else {
      vapi.start(assistant);
      isActiveCall = true;
      button.style.boxShadow = `1px 1px 80px 20px ${color}`;
    }
  }

  vapi.on("call-start", () => {
    button.classList.remove("vapi-btn-is-loading");
    button.classList.add("vapi-btn-is-active");
  });

  vapi.on("call-end", () => {
    button.classList.remove("vapi-btn-is-loading");
    button.classList.remove("vapi-btn-is-active");
    button.style.boxShadow = `1px 1px 10px ${color}`;
  });

  vapi.on("speech-start", () => {
    button.classList.add("vapi-btn-is-speaking");
  });

  vapi.on("speech-end", () => {
    button.classList.remove("vapi-btn-is-speaking");
  });

  button.addEventListener("click", toggleCall);
  vapi.on("volume-level", (audioLevel) => {
    button.style.boxShadow = `1px 1px ${10 + audioLevel * 40}px ${
      audioLevel * 30
    }px ${color}, inset 0px 0px 10px 0px rgba(0,0,0,0.1)`;
  });
}
