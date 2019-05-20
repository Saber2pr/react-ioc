/*
 * @Author: saber2pr
 * @Date: 2019-05-20 10:32:17
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-20 11:01:47
 */
import { System } from './system'
import { Injector } from '@saber2pr/ioc'
import { Config } from './config'

export function Application(target: any) {
  Config.components.push(Injector(target))
  System.start()
}
