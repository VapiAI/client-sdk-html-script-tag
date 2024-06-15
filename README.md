# Vapi Client Integration

## Overview

This project integrates the Vapi client into any website, providing a voice assistant for support purposes. The Vapi client is powered by an easy-to-install JavaScript SDK, which is included in the website via a simple code snippet.

## Features

- **Voice Assistant**: Enhance user experience with our voice assistant instantly.
- **Customization**: Configure the assistant's settings to match your website's needs.
- **UI Flexibility**: If needed, use the exposed CSS classes to further customize the appearance and behavior of the assistant on your webpage.

## Installation

To add Vapi to your website, include the following javascript snippet in your HTML file inside a script tag:

```js
<script>
  (function (d, t) {
    var g = document.createElement(t),
      s = d.getElementsByTagName(t)[0];
    g.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);

    g.onload = function () {
      const vapi = window.vapiSDK.run({
        apiKey: "", // required Use your Public Key
        assistant: assistant, // required
        assistantOverrides: {}, // optional (This lets you override the assistant configuration and can be used alongside assistantId.)
        config: buttonConfig // optional
      });

      if(vapi) {
        // Extend more using vapi

      }
    };
  })(document, "script");
</script>
```

Where value of assistant can be your assistant ID (Dashboard > Assistants > Select your assistant > Copy the id) or assistant config like below example.

```js
const assistant = {
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    systemPrompt:
      "You're a versatile AI assistant named Vapi who is fun to talk with.",
  },
  voice: {
    provider: "11labs",
    voiceId: "paula",
  },
  firstMessage: "Hi, I am Vapi how can I assist you today?",
};
```

You can also create squad using the assistant to handle complex workflows and tasks. For example. 

```js

const squad = {
  "squad": {
    "members": [
      {
        "assistantId": "information-gathering-assistant-id",
        "assistantDestinations": [{
          "type": "assistant",
          "assistantName": "Appointment Booking",
          "message": "Please hold on while I transfer you to our appointment booking assistant.",
          "description": "Transfer the user to the appointment booking assistant after they say their name."
        }],
      },
      {
        "assistant": {
          "name": "Appointment Booking",
        },
      }
    ]
  }
}

(function (d, t) {
    var g = document.createElement(t),
      s = d.getElementsByTagName(t)[0];
    g.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);

    g.onload = function () {
      const vapi = window.vapiSDK.run({
        apiKey: "", // required Use your Public Key
        squad: squad, // You can pass in squad as an option to create squad.
        config: buttonConfig // optional
      });

      if(vapi) {
        // Extend more using vapi

      }
    };
  })(document, "script");



```


You can also customise the look and feel of your Vapi Support Button using the following configurations.
The button will have 3 states, `idle`, `loading` and `active`.

```js
const buttonConfig = {
  position: "bottom-right", // "bottom" | "top" | "left" | "right" | "top-right" | "top-left" | "bottom-left" | "bottom-right"
  offset: "40px", // decide how far the button should be from the edge
  width: "50px", // min-width of the button
  height: "50px", // height of the button
  idle: {
    // button state when the call is not active.
    color: `rgb(93, 254, 202)`,
    type: "pill", // or "round"
    title: "Have a quick question?", // only required in case of Pill
    subtitle: "Talk with our AI assistant", // only required in case of pill
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
  },
  loading: {
    // button state when the call is connecting
    color: `rgb(93, 124, 202)`,
    type: "pill", // or "round"
    title: "Connecting...", // only required in case of Pill
    subtitle: "Please wait", // only required in case of pill
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
  },
  active: {
    // button state when the call is in progress or active.
    color: `rgb(255, 0, 0)`,
    type: "pill", // or "round"
    title: "Call is in progress...", // only required in case of Pill
    subtitle: "End the call.", // only required in case of pill
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
  },
};
```

## Configuration

You can customize the assistant by modifying the `assistant` object. The `apiKey` should be replaced with your unique key provided by Vapi.

## UI Customization

The SDK exposes several CSS classes that can be targeted for custom styling. Here is a list of the classes you can customize:

- `.vapi-btn`: The main class for the Vapi button.
- `.vapi-btn-is-idle`: The class for the Vapi button when the call is disconnected.
- `.vapi-btn-is-active`: The class for the Vapi button when the call is active.
- `.vapi-btn-is-loading`: The class for the Vapi button when the call is connecting.
- `.vapi-btn-is-speaking`: The class for the Vapi button when the bot is speaking.
- `.vapi-btn-pill`: The class for Vapi button to set pill variant.
- `.vapi-btn-round`: The class for Vapi button to set round variant.

You can add custom styles to these classes to match the look and feel of your website. These are exposed in case u need some more customisations besides the `position`, `color` and `offset` config available currently.

## Support

For any issues or further customization needs, please refer to the [VapiAI Docs](https://docs.vapi.ai) or contact our support team directly.

Enjoy enhancing your website with Vapi, your friendly voice assistant!
