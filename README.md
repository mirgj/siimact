# siimact
> A set of React components for siimple CSS Framework.  

## About
**siimact** is a set of components for react that will make more easy to use the _siimple_ framework in your React app. The name is an union of **Sii**mple and Re**act**
You can find the documentation and the examples about Siimple here: https://www.siimple.xyz/documentation

## Getting started
You can to install **siimact** from npm

```
npm install --save siimact
```

## Usage
Start to import the **siimact** components in your React application and use it.

```
import React, { Component } from 'react';
import { Alert, Content } from 'siimact'

class App extends Component {
  render() {
    return (
      <div>
        <Content>
          <Alert color='orange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
        </Content>
      </div>
    );
  }
}

export default App;
```
