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
(function (d, t) {
  var g = document.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src =
    "https://cdn.jsdelivr.net/gh/VapiAI/vapi-support-sdk/dist/assets/index.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g, s);

  g.onload = function () {
    window.vapiSDK.run({
      apiKey: "",
      assistant: assistant,
      position: "bottom",
      color: `rgb(93, 254, 202)`,
      offset: "40px",
    });
  };
})(document, "script");
```

Sample assistant config is

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

## Configuration

You can customize the assistant by modifying the `assistant` object. The `apiKey` should be replaced with your unique key provided by Vapi.

## UI Customization

The SDK exposes several CSS classes that can be targeted for custom styling. Here is a list of the classes you can customize:

- `.vapi-btn`: The main class for the Vapi button.
- `.vapi-btn-is-active`: The class for the Vapi button when the call is active.
- `.vapi-btn-is-loading`: The class for the Vapi button when the call is connecting.
- `.vapi-btn-is-speaking`: The class for the Vapi button when the bot is speaking.

You can add custom styles to these classes to match the look and feel of your website. These are exposed in case u need some more customisations besides the `position`, `color` and `offset` config available currently.

## Support

For any issues or further customization needs, please refer to the [VapiAI Docs](https://docs.vapi.ai) or contact our support team directly.

Enjoy enhancing your website with Vapi, your friendly voice assistant!
