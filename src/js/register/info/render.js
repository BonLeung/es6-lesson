import Region from '../../common/region'
import { $ } from '../../common/utils'

const tpl = `
  <div id="register-info-wrapper" class="register-info-wrapper">
    <form id="register-info-form" class="register-info-form">
      <label>
        <span>昵称</span>
        <input type="text" name="nickname" placeholder="昵称" valid="present, noOther" />
      </label>
      <label>
        <span>电子邮箱</span>
        <input type="text" name="email" placeholder="电子邮箱" valid="present, emial, noOther" />
      </label>
      <label>
        <span>真实姓名</span>
        <input type="text" name="realname" placeholder="真实姓名" />
      </label>
      <label>
        <span>性别</span>
        <select id="register-info-sex" name="sex">
          <option value="1">男</option>
          <option value="2">女</option>
        </select>
      </label>
      <label>
        <span>生日</span>
        <input type="date" name="birthday" />
      </label>
      <label>
        <span>居住地</span>
        <div id="register-info-address"></div>
      </label>
      <label>
        <span></span>
        <input type="submit" id="register-info-btn" value="下一步" />
      </label>
    </form>
  </div>
`

export default (opts = {}) => {
  opts.container.innerHTML = tpl

  const region = new Region({
    container: $('register-info-address'),
    name: 'region'
  })
}
