import React from 'react'
import { Injectable, InjectProp, Application, System } from '..'

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
export class Count extends React.Component {
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
export class App extends React.Component {
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
