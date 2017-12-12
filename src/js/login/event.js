import { $ } from '../common/utils'
import { fetchPost } from '../common/fetch'

export default (opts) => {
  const $loginForm = $('login-form')
  const $loginBtn = $('login-btn')
  const $remember = $('login-remember')
  const $clearAccount = $('clear-account')
  const $clearPassword = $('clear-password')
  const $account = $('login-account')
  const $password = $('login-password')
  const $error = $('login-error')

  // 需要表单验证
  $loginForm.onsubmit = async (e) => {
    /**
     * 点击登录
     */
    e.preventDefault()

    let remember = '0'
    if ($remember.getAttribute('checked')) {
      remember = '1'
    }

    const data = await fetchPost('/login', {
      account: $account.value,
      password: $password.value,
      remember: remember
    })

    console.log(data)
  }

  $account.oninput = () => {

  }

  $clearAccount.onclick = () => {

  }

  $password.oninput = () => {

  }

}