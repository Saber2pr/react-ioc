/*
 * @Author: saber2pr 
 * @Date: 2019-05-20 11:20:49 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-05-20 11:20:49 
 */
import React from 'react'
import { Injectable, InjectProp, Application, System, Component } from '..'

@Injectable()
class CountService {
  @InjectProp() private System: System

  private count = 1

  getCount() {
    return this.count
  }

  add() {
    this.count++
    this.System.update()
  }
}

@Injectable()
export class Count implements Component {
  @InjectProp() private CountService: CountService

  render() {
    return (
      <button onClick={() => this.CountService.add()}>
        {this.CountService.getCount()}
      </button>
    )
  }
}

@Application
export class App implements Component {
  @InjectProp() private Count: Count

  render() {
    return (
      <div>
        <h1>hello</h1>
        {this.Count.render()}
      </div>
    )
  }
}
