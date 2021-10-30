# react-set-interval-hook

> setInterval for React Hook

[![NPM](https://img.shields.io/npm/v/react-set-interval-hook.svg)](https://www.npmjs.com/package/react-set-interval-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-set-interval-hook
```

## Usage

```jsx
import React from "react";

import {ReactInterval} from "react-set-interval-hook";

const App = () => {

  ReactInterval(() => {
    console.log('Hello')
  }, 1000)

  return 'Hello'
}

export default App
```

## License

MIT © [berataras](https://github.com/berataras)
