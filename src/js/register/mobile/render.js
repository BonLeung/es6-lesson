const tpl = (opts = {}) => {
  return `
    <div id="register-mobile-wrapper" class="register-mobile-wrapper">
      <form id="register-mobile-form" onsubmit="return false">
        <label>
          <span>手机号</span>
          <input type="text" name="mobile" placeholder="${opts.mobilePlaceholder || ''}" valid="present mobile" />
        </label>
        <label>
          <span>验证</span>
          <div id="register-verify-wrapper" class="register-verify-wrapper"></div>
        </label>
      </form>
    </div>
  `
}

export default (conf) => {
  conf.container.innerHTML = tpl(conf)
}