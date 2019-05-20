# react-ioc

> how about react in Ioc? :)

```bash
# from github
git clone https://github.com/Saber2pr/react-ioc.git
```

# Feature

```tsx
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
```

> maybe we don't need the React.Component, we need jsx only!

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
