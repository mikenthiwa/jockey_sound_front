import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PlayAll from '../../assets/svg/playall.svg';
import {feed} from '../../redux/actions/feedAction';
import PlayComponent from '../../assets/svg/roundedplayer.svg';
import PauseComponent from '../../assets/svg/pause.svg'
import './feed.scss';

export class Feed extends Component {

  constructor(props) {
    super(props);
    this.player = React.createRef();
    this.playerHead = React.createRef();
  }

  state = {
    file: 'https://tinyurl.com/y2ukuqk9',
    currentTime: null,
    isPlaying: false
  };

  playAudio() {
    const music = this.player.current;
    if (music.paused){
      this.setState({isPlaying: true});
      music.play()
    }else {
      this.setState({isPlaying: false});
      music.pause()
    }

  };

  updateTime() {
    this.playerHead.current.value = (this.player.current.currentTime / this.player.current.duration);
    this.playerHead.current.addEventListener("click", this.seek)
  };

  seek = (event) => {
    const { duration } = this.player.current;
    const percent = event.offsetX / this.playerHead.current.offsetWidth;
    this.playerHead.current.value =  percent;
    this.player.current.currentTime = percent * duration;
  };


  componentDidMount() {
    const { feed } = this.props;
    feed();
  }

  renderFeeds() {
    const {feedState: {data: {data}}} = this.props;
    const { file, isPlaying } = this.state;

    if(data) {
      return data.splice(0, 1).map(feed =>{
        return (
          <Fragment>
            <div className="feed-body-header">
              <div><small>Listened via sound cloud</small></div>
            </div>
            <div className="feed-body-cont">
              <audio id="player" ref={this.player} onTimeUpdate={() => this.updateTime()}>
                <source src={file} />
              </audio>
              <div className="music-player-icon ">
                <div className="circle"><img className='play-pause-icon' src={isPlaying ? PauseComponent: PlayComponent} alt="play" onClick={() => this.playAudio()}/></div>
                <progress className="timeline playhead" id="timeline" value="0" max="1" ref={this.playerHead} onSeeked={this.seek} >
                  <div className="playhead" />
                </progress>

              </div>
            </div>
          </Fragment>
        )
      }
    )}
  };

  render() {
    return (
      <div className="feed-cont">
        <div className="feed-header">
          <div className="label-feed">Feed</div>
          <div>
            <button className="play-button">
              <span className="icon"><img src={PlayAll} alt="play-all"/></span>
              <span className="button-label">Play all</span>
            </button>
          </div>
        </div>

        <div className="feed-body">
          {this.renderFeeds()}
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = () => ({
  feed
});

const mapStateToProps = state => ({
  feedState: state.feed
});

export default connect(mapStateToProps, mapDispatchToProps())(Feed);

