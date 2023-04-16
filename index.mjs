import { html } from "lit";
import { render } from "@lit-labs/ssr";
import { collectResult } from "@lit-labs/ssr/lib/render-result.js";

import "./components/ui-alert.mjs";

const result = render(html`<ui-alert message="It's lit!"></ui-alert>`);

console.log("Rendering...");

collectResult(result).then((serverHtmlString) => {
  console.log("Done ✨");
  console.log("\nResult HTML:");
  console.log(serverHtmlString);
});
