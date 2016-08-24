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
                <h1><i>No Man’s Sky</i> Simulator</h1>
                <label>
                    Seed: <input type="text" name="seed" value={this.state.seed} onChange={this.setSeed} />
                </label>
                <button type="button" onClick={this.randomizeSeed}>Randomize</button>
                <Colorizer src="images/ss_1.1920x1080.jpg" seed={this.state.seed}/>
            </div>
        );
    }
}
