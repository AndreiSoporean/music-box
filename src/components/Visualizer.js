import React from 'react';

let audioVisual = {}
class Visualizer extends React.Component {
    componentDidMount(){
        this.createVisualization()
    }
    
    createVisualization(){
        let context = new AudioContext();
        let analyser = context.createAnalyser();
        let canvas = this.refs.analyzerCanvas;
        let ctx = canvas.getContext('2d');
        audioVisual.crossOrigin = "anonymous";
        let audioSrc = context.createMediaElementSource(audioVisual);
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);
    
        function renderFrame(){
            let freqData = new Uint8Array(analyser.frequencyBinCount)
            requestAnimationFrame(renderFrame)
            analyser.getByteFrequencyData(freqData)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = '#ffffff';
            let bars = 300;
            for (var i = 0; i < bars; i++) {
                let bar_x = i * 3;
                let bar_width = 2;
                let bar_height = -(freqData[i] / 4);
                ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
            }
        };
        renderFrame()
    }
    

    render() {
        
        audioVisual = this.props.audio;
        return (
            <canvas className="visualizer" ref="analyzerCanvas" height="80" id="analyzer">
            </canvas>
        )
    }
}

export default Visualizer;