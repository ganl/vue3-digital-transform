# vue3-digital-transform

<img src="./assets/logo.jpg" style="width:100px;"/>

![](https://img.shields.io/badge/Github-@ganl-success.svg?style=flat-square)
![](https://img.shields.io/badge/version-v2.0.0-success.svg?style=flat-square)

一个基于 Vue 的数字切换动效库 [vue3-digital-transform](https://ganl.github.io/vue3-digital-transform/)

vue2原版本 [vue-digital-transform](https://dakerhub.github.io/vue-digital-transform/)

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

| prop                  | type          | description                                   | default   |
| --------------------- | ------------- | --------------------------------------------- | --------- |
| value                 | Number,String | 需要切换的数字，只能由 0-9 . , 组成           | undefined |
| dislocation           | Boolean       | 单个数字是否过渡时间是否不一致                | false     |
| interval              | Number        | 单个数字过渡时间（ms）                        | 500       |
| useGrouping (v1.1.0+) | Boolean       | 是否开启分隔符(对 value 为 Number 类型的有效) | false     |

## Contribution

如果你对文档或者代码有什么建议的话，希望你能告诉我。当然，你也可以贡献你的想法让这个库变得更好。

## Licence

[MIT License](./LICENCE)
