import '../common/polyfill'
import render from './render'
import bindEvent from './event'

const login = (opts = {}) => {
  const defaultOpts = {
    loginBtnText: '登 录'
  }

  const options = Object.assign(defaultOpts, opts)
  render(options)
  bindEvent(options)
}

export { login }