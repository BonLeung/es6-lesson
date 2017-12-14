import Slider from '../../common/slider'
import { $, addClass, removeClass } from '../../common/utils'
import { fetchPost } from '../../common/fetch';

export default () => {
  let mobileVerifyToken

  const slider = new Slider({
    container: $('register-verify-wrapper'),
    success: async ($wrapper, $text, offsetArr) => {
      const offsetMsg = offsetArr.join(':')
      let data = await fetchPost('/getMobileVerifyToken', {
        offsetMsg: offsetMsg
      })
      if (data.code === 200) {
        mobileVerifyToken = data.mobileVerifyToken
        addClass($wrapper, 'success')
        $text.innerHTML = '验证成功'
      } else {
        addClass($wrapper, 'failer')
        $text.innerHTML = '验证失败'
      }
    }
  })

}