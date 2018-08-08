# VueRecomputed [![Build Status](https://img.shields.io/circleci/project/posva/vue-recomputed/master.svg)](https://circleci.com/gh/posva/vue-recomputed) [![npm package](https://img.shields.io/npm/v/vue-recomputed.svg)](https://www.npmjs.com/package/vue-recomputed) [![coverage](https://img.shields.io/codecov/c/github/posva/vue-recomputed.svg)](https://codecov.io/github/posva/vue-recomputed) [![thanks](https://img.shields.io/badge/thanks-%E2%99%A5-ff69b4.svg)](https://github.com/posva/thanks)

> Recomputable computed properties in Vue

⚠️ You probably don't need this, please, first check [this issue](https://github.com/vuejs/vue/issues/214) and [this comment](https://github.com/vuejs/vue/issues/214#issuecomment-355177115) and [this other one](https://github.com/vuejs/vue/issues/214#issuecomment-411482670) as well

## Installation

```sh
npm install vue-recomputed
```

## Usage

This is a silly example to showcase the API. **Never do this kind of thigs**:

```js
export default {
  recomputed: {
    currentTime() {
      // you have access to the component as with computed properties
      return Date.now()
    },
  },

  methods: {
    updateTime() {
      this.$recompute('currentTime')
    },
  },
}
```

## License

[MIT](http://opensource.org/licenses/MIT)
