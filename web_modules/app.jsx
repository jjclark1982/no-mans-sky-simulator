import React from 'react';
import Colorizer from 'colorizer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seed: Date.now()
        }
        this.setSeed = this.setSeed.bind(this);
        this.randomizeSeed = this.randomizeSeed.bind(this);
    }

    setSeed(event) {
        this.setState({
            seed: event.target.value
        });
    }

    randomizeSeed() {
        this.setState({
            seed: (Math.random() * Number.MAX_SAFE_INTEGER) | 0
        });
    }

    render() {
        return (
            <div>
                <div style={{position:'absolute', right: '1em', top: '1em'}}>
                    <a className="github-button" href="https://github.com/jjclark1982/no-mans-sky-simulator/issues" data-style="mega" data-count-api="/repos/jjclark1982/no-mans-sky-simulator#open_issues_count" data-count-aria-label="# issues on GitHub" aria-label="Issue jjclark1982/no-mans-sky-simulator on GitHub">Issue</a>
                </div>
                <h1><i>No Man’s Sky</i> Simulator</h1>
                <label>
                    Seed: <input type="text" name="seed" value={this.state.seed} onChange={this.setSeed} />
                </label>
                <button type="button" onClick={this.randomizeSeed}>Randomize</button>
                <Colorizer src="images/ss_1.1920x1080.jpg" seed={this.state.seed}/>
                <footer>
                    version {process.env.PACKAGE_VERSION}
                </footer>
            </div>
        );
    }
}
