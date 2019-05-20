/*
 * @Author: saber2pr
 * @Date: 2019-05-20 10:34:56
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-20 11:47:22
 */
import ReactDOM from 'react-dom'
import { Config } from './config'
import { Component } from './types'

export const rerender = (node: Component) =>
  ReactDOM.render(node.render(), Config.container)
