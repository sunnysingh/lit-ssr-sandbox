import { LitElement, html } from "lit";

export class UiAlert extends LitElement {
  static properties = {
    message: { type: String },
  };

  render() {
    return html`<p aria-role="alert">${this.message}</p>`;
  }
}

customElements.define("ui-alert", UiAlert);
