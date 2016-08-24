import React from 'react';
import convert from 'color-convert';

export default class Colorizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seed: props.seed};
        this.loaded = this.loaded.bind(this);
        this.updateSize = this.updateSize.bind(this);
    }

    loaded(div) {
        this.div = div;
        this.canvas = div.querySelector('canvas');
        this.img = div.querySelector('img');
        this.img.onload = this.updateSize;
    }

    componentWillReceiveProps(nextProps) {
        if ('seed' in nextProps) {
            this.setState({seed: nextProps.seed});
        }
    }

    componentDidUpdate() {
        this.redraw();
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateSize);
        this.updateSize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize);
    }

    updateSize() {
        this.canvas.width = this.div.clientWidth;
        this.canvas.height = this.div.clientHeight - 4;
        this.redraw();
    }

    redraw() {
        var ctx = this.canvas.getContext('2d');
        ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.width * this.img.height/this.img.width);

        var imageData = ctx.getImageData(0,0,this.canvas.width,this.canvas.height);
        var d = imageData.data;
        for (var i = 0; i < d.length; i+=4) {
            var rgb = [d[i], d[i+1], d[i+2]];
            var hsl = convert.rgb.hsl.raw(rgb);
            hsl[0] = (hsl[0] + this.state.seed) % 256;
            rgb = convert.hsl.rgb.raw(hsl);
            d[i] = rgb[0];
            d[i+1] = rgb[1];
            d[i+2] = rgb[2];
        }
        ctx.putImageData(imageData, 0, 0);
    }

    render() {
        return <div className="colorizer" ref={this.loaded} style={{minHeight:'40em'}}>
            <img style={{display:'none'}} src={this.props.src} />
            <canvas/>
        </div>
    }
}
