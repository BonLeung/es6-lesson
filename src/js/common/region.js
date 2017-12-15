import { $ } from './utils'
import { fetchJson } from './fetch'

const render = Symbol('render')

class Region {
  constructor(opts) {
    if (!opts.container) {
      throw '请填写container配置'
    }
    if (!opts.name) {
      throw '请填写name配置'
    }
    this[render](opts)
  }

  async [render](opts) {
    let regionData = await fetchJson('/region-data', {})
    regionData = regionData.data

    const tpl = `
      <div class="region-select-wrapper">
        <select id="region-province-select"></select>
        <select id="region-city-select"></select>
        <select id="region-area-select"></select>
        <input type="hidden" name="${opts.name}" valid="${opts.present ? 'present' : ''}" />
      </div>
    `
    opts.container.innerHTML = tpl
  }
}
