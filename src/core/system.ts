/*
 * @Author: saber2pr
 * @Date: 2019-05-20 10:31:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-20 12:10:29
 */
import { Injectable } from '@saber2pr/ioc'
import { rerender } from './render'
import { Config } from './config'

@Injectable()
export class System {
  update() {
    System.update()
  }
}

export namespace System {
  export function update() {
    rerender(Config.root)
  }
  export function start() {
    rerender(Config.root)
  }
  export function init(container: HTMLElement) {
    Config.container = container
  }
}
