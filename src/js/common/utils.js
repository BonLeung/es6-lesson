const getId = (id) => {
  const dom = document.getElementById(id)
  dom && dom.setAttribute('id', dom.id + '-' + Math.floor(Math.random() * 100000))
  return dom
}

const hasClass = (dom, cls) => {
  return dom.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

const addClass = (dom, cls) => {
  dom.className.trim()
  if (!hasClass(dom, cls)) {
    dom.className += ' ' + cls
  }
}

const removeClass = (dom, cls) => {
  if (hasClass(dom, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    dom.className = dom.className.replace(reg, ' ')
  }
}

const isDom = (obj) => {
  try {
    return obj instanceof HTMLElement
  } catch(e) {
    return (typeof obj === 'object') && (obj.nodeType === '1') && (typeof obj.style === 'object')
  }
}

const checkOptions = (obj) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return false
  }

  if (!obj.container) {
    throw new Error('container can not be empty')
    return false
  }

  if (!isDom(obj.container)) {
    throw new Error('container must be a HTMLElement')
    return false
  }

  return true
}

export { getId as $, addClass, removeClass, checkOptions }
