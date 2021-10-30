// eslint-disable-next-line no-unused-vars
import React from "react";

import {ReactInterval} from "react-set-interval-hook";

const App = () => {

  ReactInterval(() => {
    console.log('Hello')
  }, 1000)

  return 'Hello'
}

export default App
