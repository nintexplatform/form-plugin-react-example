import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import { IFrame } from "./Iframe";

class IFrameWrapper extends reactToWebComponent(IFrame, React, ReactDOM, {
  shadow: "open",
  props: ["name", "title", "src", "height"],
}) {
  static getMetaConfig = () =>
    Promise.resolve({
      controlName: "react-iframe",
      fallbackDisableSubmit: false,
      description: "IFrame component which can render url view with the frame",
      iconUrl: "one-line-text",
      groupName: "Visual",
      version: "1.3",
      properties: {
        src: {
          type: "string",
          title: "Source URL",
          description:
            "URL of the iframe, please note many sites block been rendered in iframes",
        },
        height: {
          type: "string",
          title: "Height",
          description: "Height of the component",
        },
      },
      standardProperties: {
        readOnly: true,
        required: true,
        description: true,
      },
    });
}

customElements.define("nintex-react-iframe", IFrameWrapper);
