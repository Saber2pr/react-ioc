/*
 * @Author: saber2pr
 * @Date: 2019-05-20 10:31:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-20 11:02:32
 */
import { Injectable } from '@saber2pr/ioc'
import { render } from './render'
import { Config } from './config'

@Injectable()
export class System {
  update() {
    System.update()
  }
}

export namespace System {
  export function update() {
    render(...Config.components)
  }
  export function start() {
    render(...Config.components)
  }
  export function init(container: HTMLElement) {
    Config.container = container
  }
}
