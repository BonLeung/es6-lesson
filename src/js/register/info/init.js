import "../../common/polyfill"
import render from './render'
import event from './event'

const regInfo = (opts = {}) => {
  const defaultOpts = {

  }
  let options = Object.assign(defaultOpts, opts)

  render(options)
  event(options)
}

export { regInfo }
