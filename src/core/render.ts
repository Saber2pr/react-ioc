/*
 * @Author: saber2pr
 * @Date: 2019-05-20 10:34:56
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-20 11:03:21
 */
import ReactDOM from 'react-dom'
import { Config } from './config'

const rerender = (node: React.ReactNode) =>
  ReactDOM.render(node as any, Config.container)

export function render(...components: any[]) {
  components.forEach(c => rerender(c.render()))
}
