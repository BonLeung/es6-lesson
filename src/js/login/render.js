const template = (opts = {}) => {
  const name = 'bangge'
  const tpl = `
    <div>
      <p>hello ${name}<p>
    </div>
  `
  return tpl
}

export default (conf = {}) => {
  conf.container.innerHTML = template(conf)
  
}