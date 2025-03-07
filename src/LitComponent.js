import { html, css, LitElement } from 'lit-element';

export class LitComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--lit-component-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    console.log('log ');
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
