# vue3-digital-transform

<img src="./assets/logo.jpg" style="width:100px;"/>

![](https://img.shields.io/badge/Github-@ganl-success.svg?style=flat-square)
![](https://img.shields.io/badge/version-v2.0.0-success.svg?style=flat-square)

[中文文档](./README_CN.md)

Make your changes of digtals more funny. [vue3-digital-transform](https://ganl.github.io/vue3-digital-transform/)

vue2 [vue-digital-transform](https://dakerhub.github.io/vue-digital-transform/)

<img src="./assets/demo.gif" style="width:400px;"/>

## Install

```bash
npm install vue3-digital-transform
或
yarn add vue3-digital-transform
```

## Example

```html
<template>
  <digital-transform :value="num" dislocation :interval="200"></digital-transform>
</template>
```

```js
import DigitalTransform from "vue3-digital-transform";

export default {
  components: {
    DigitalTransform,
  },
  data() {
    return {
      num: 0,
    };
  },
};
```

## Config

| prop                  | type          | description                                                     | default   |
| --------------------- | ------------- | --------------------------------------------------------------- | --------- |
| value                 | Number,String | Digitals. Only allow [0-9.,]                                    | undefined |
| dislocation           | Boolean       | Whether every singal digital transforms in diffrent duration.   | false     |
| interval              | Number        | The time that transform spends.（ms）                           | 500       |
| useGrouping (v1.1.0+) | Boolean       | Whether group the digital or not. (Only when value is pure num) | false     |

## Contribution

Any contribution to the code or any part of the documentation and any idea and/or suggestion are very welcome.

Just pull requests!

## Licence

[MIT License](./LICENCE)
