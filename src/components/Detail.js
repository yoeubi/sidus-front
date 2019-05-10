import React, { Component } from 'react';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import image from '../imgs/sidus2.jpg';
import { ReactComponent as Girl } from '../imgs/girl.svg';
import { ReactComponent as Left } from '../imgs/chevron-left.svg';
import { ReactComponent as BookmarkUnfill } from '../imgs/big-bookmark-black.svg';
import { ReactComponent as BookMarkFill } from '../imgs/bookmark-tag.svg';

const cx = classNames.bind(styles);

class Detail extends Component {
  state = {
    click: false,
  };
  onClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      click: !this.state.click,
    });
  };
  onBack = () => {
    const { history } = this.props;
    history.goBack();
  };
  render() {
    const { click } = this.state;
    return (
      <div className={cx('detail')}>
        <div className={cx('header')}>
          <span className={cx('exit')} onClick={this.onBack}>
            <Left />
          </span>
        </div>
        <img className={cx('image')} src={image} alt="배경이미지" />
        <div className={cx('main')}>
          <div className={cx('title')}>
            <p>채팅기능 포함 쇼핑몰 앱 구축 프로젝트</p>
          </div>
          <div className={cx('created')}>
            <p>개설일 2019.2.13</p>
          </div>
          <div className={cx('user')}>
            <div className={cx('user-pic')}>
              <Girl />
            </div>
            Ellie_jeon 외 7명 참여
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('intro')}>
            <p>프로젝트 소개</p>
            <p>
              사라지지 않는 것이다. 이것은 현저하게 일월과 같은 예가 되려니와
              그와 같지 못하다 할지라도 창공에 반짝이는 못별과 같습니다.
            </p>
          </div>
          <div className={cx('deadline')}>
            <p>
              프로젝트 마감일
              <span className={cx('d-day')}>D-35</span>
            </p>
            <p>2019.5.11</p>
          </div>
          <div className={cx('requirement')}>
            <p>참여요건</p>
            <p>
              <span>직무</span>
              <span>UXUI디자이너</span>
            </p>
            <p>
              <span>경력</span>
              <span>무관</span>
            </p>
          </div>
        </div>
        <div className={cx('button-wrapper')}>
          <div className={cx('like')} onClick={this.onClick}>
            {click ? <BookMarkFill /> : <BookmarkUnfill />}
          </div>
          <button className={cx('participate')}>프로젝트 참여하기</button>
        </div>
      </div>
    );
  }
}

export default Detail;
