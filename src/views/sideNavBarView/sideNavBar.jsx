import React, {Component} from 'react';
import FeedComponent from '../../assets/svg/feed.svg';
import NewShowComponent from '../../assets/svg/newshow.svg';
import FavouriteComponent from '../../assets/svg/favourite.svg';
import HistoryComponent from '../../assets/svg/history.svg';
import ListenLaterComponent from '../../assets/svg/listenlater.svg';
import PlayListComponent from '../../assets/svg/playlist.svg';
import './sidenav.scss';

class SideNav extends Component{

  renderSideNavItems = (svg, alt, name) => (
    <div className="item-div">
      <span>
        <img className="side-nav-icon" src={`${svg}`} alt={alt}/>
      </span>
      <span className="icon-name name-position">{name}</span>
    </div>
  );

  render() {
    const {username} = this.props;
    return (
      <div className="side-nav-cont">
        <div className="profile-cont">
          <div className="profile-pic" />
          <div className="profile-name">
            <div className="name">{username}</div>
            <small className="profile-link">View Profile</small>
          </div>
        </div>
        <span className="separator profile-separator"/>
        <div className="feed-show">
          {this.renderSideNavItems(FeedComponent, 'feed', 'FEED')}
          {this.renderSideNavItems(NewShowComponent, 'new-shows', 'NEW SHOWS')}
        </div>
        <span className="separator news-show-separator"/>

        <div className="favourite-cont">
          {this.renderSideNavItems(FavouriteComponent, 'favourites', 'FAVOURITES')}
          {this.renderSideNavItems(HistoryComponent, 'history', 'HISTORY')}
          {this.renderSideNavItems(ListenLaterComponent, 'listenLater', 'LISTEN LATER')}
          {this.renderSideNavItems(PlayListComponent, 'playlist', 'PLAYLIST')}
        </div>
      </div>
    );
  }
}

export default SideNav;

