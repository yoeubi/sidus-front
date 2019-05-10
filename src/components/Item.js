import React, { Component } from 'react';
import styles from './Item.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as BookmarkUnfill } from '../imgs/big-bookmark.svg';
import { ReactComponent as BookMarkFill } from '../imgs/bookmark-tag.svg';

const cx = classNames.bind(styles);

class Item extends Component {
  state = {
    click: false,
  };
  onClick = e => {
    e.preventDefault();
    this.setState({
      click: !this.state.click,
    });
  };
  render() {
    const { click } = this.state;
    const { img, title, workingPeriod, leftPeriod } = this.props;
    return (
      <div className={cx('item')}>
        <img src={img} alt="그림" />
        {click ? (
          <BookMarkFill onClick={this.onClick} />
        ) : (
          <BookmarkUnfill onClick={this.onClick} />
        )}
        <div className={cx('content')}>
          <div className={cx('title')}>{title}</div>
          <div className={cx('working-period')}>작업기간: {workingPeriod}</div>
          <div className={cx('left-period')}>{leftPeriod} 모집마감</div>
        </div>
      </div>
    );
  }
}

export default Item;
