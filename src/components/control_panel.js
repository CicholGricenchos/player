import React from 'react'
import Radium from 'radium'
import Slider from './slider'

@Radium
class ControlPanel extends React.Component {
	lineStyle = {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden'
	}
	buttonStyle = {
		opacity: '0.5',
		transition: '0.3s',
		cursor: 'pointer',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		width: '24px',
		height: '24px',
		backgroundColor: 'rgba(0, 0, 0, 0)',
		border: 'none',
		marginRight: '3px',
		outline: 'none',
		':hover': {
			opacity: '1'
		}
	}
	render() {
		return <div style={{
			width: '500px',
			height: '130px',
			padding: '25px',
			margin: '0 auto 30px',
			position: 'relative',
			textShadow: '0 1px 2px #000'
		}} className="control-panel">
			<img src={this.props.currentPlaying.cover}
				style={{
					borderRadius: '10px',
					width: '130px',
					height: '130px',
					border: '1px solid #333',
					position: 'absolute',
					boxShadow: '0 2px 10px black'
				}}/>
			<div style={{
				position: 'absolute',
				marginLeft: '155px',
				width: '345px'
			}} className="song-info">
				<h3 style={[{
					fontSize: '14px',
					margin: '0px'
				}, this.lineStyle]}>{this.props.currentPlaying.title}</h3>
				<p style={[{
					fontSize: '12px',
					color: '#ccc',
					margin: '5px 0 0 0'
				}, this.lineStyle]}>{this.props.currentPlaying.artist}</p>
				<p style={[{
					fontSize: '12px',
					color: '#ccc',
					margin:'5px 0 0 0'
				}, this.lineStyle]}>{this.props.currentPlaying.album}</p>
			</div>
			<div style={{
				position: 'absolute',
				marginLeft: '155px',
				width: '345px',
				bottom: '20px'
			}} className="control">
				<div style={{float: 'left'}}>
					<button key="rewind" style={[this.buttonStyle, {backgroundImage: 'url(img/rewind.png)'}]}></button>
					<button key="pause" style={[this.buttonStyle, {backgroundImage: 'url(img/pause.png)'}]}></button>
					<button key="fastforward" style={[this.buttonStyle, {backgroundImage: 'url(img/fastforward.png)'}]}></button>
				</div>
				<div style={{float: 'right'}}>
					<button key="mute" style={[this.buttonStyle, {backgroundImage: 'url(img/volume.png)', float: 'left'}]}></button>
					<div style={{float: 'left', width: '100px'}}>
						<Slider width="50%" />
					</div>
				</div>
				<div style={{float: 'left', width: '100%'}}>
					<Slider width="50%" />
				</div>
				<div style={{float: 'left', width: '100%'}}>
					<div style={{
						float: 'left',
						fontSize: '12px',
						color: '#ccc',
						marginTop: '8px'
					}}>0:00</div>
					<button key="repeat" style={[this.buttonStyle, {backgroundImage: 'url(img/repeat.png)', float: 'right'}]}></button>
				</div>
			</div>
		</div>;
	}
}

export default ControlPanel