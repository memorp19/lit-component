```js script
import { html } from '@open-wc/demoing-storybook';
import '../lit-component.js';

export default {
  title: 'LitComponent',
  component: 'lit-component',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# LitComponent

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add lit-component
```

```js
import 'lit-component/lit-component.js';
```

```js preview-story
export const Simple = () => html`
  <lit-component></lit-component>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <lit-component title="Hello World"></lit-component>
`;
```
