import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import styles from './List.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as Up } from '../imgs/chevron-up.svg';
import Item from './Item';
import { Link } from 'react-router-dom';
import pic1 from '../imgs/sidus1.jpg';
import pic2 from '../imgs/sidus2.jpg';
import pic3 from '../imgs/sidus3.jpg';
import pic4 from '../imgs/sidus4.jpg';
import pic5 from '../imgs/sidus5.jpg';
import pic6 from '../imgs/sidus6.jpg';

const cx = classNames.bind(styles);

class List extends Component {
  state = {
    select: false,
    job: '직군검색',
  };
  onList = () => {
    this.setState({
      select: !this.state.select,
    });
  };
  onSelect = val => {
    this.setState({
      job: val,
      select: false,
    });
  };
  itemInfo = [
    {
      img: pic1,
      title: '채팅기능 포함 쇼핑몰 앱 구축',
      workingPeriod: '60일',
      leftPeriod: '2019.04.11',
    },
    {
      img: pic2,
      title: '온라인 광고 대행사 전사 개발',
      workingPeriod: '60일',
      leftPeriod: '2019.05.11',
    },
    {
      img: pic3,
      title: '채팅기능 포함 쇼핑몰 앱 구축',
      workingPeriod: '50일',
      leftPeriod: '2019.04.11',
    },
    {
      img: pic4,
      title: '웹 에이전시 사이트 구축',
      workingPeriod: '30일',
      leftPeriod: '2019.03.13',
    },
    {
      img: pic5,
      title: '채팅기능 포함 쇼핑몰 앱 구축',
      workingPeriod: '50일',
      leftPeriod: '2019.04.11',
    },
    {
      img: pic6,
      title: '웹 에이전시 사이트 구축',
      workingPeriod: '30일',
      leftPeriod: '2019.03.13',
    },
  ];
  render() {
    const { select, job } = this.state;
    return (
      <div>
        <Header />
        <Nav />
        <div className={cx('content')}>
          <div className={cx('options')}>
            <div className={cx('button-wrapper')}>
              <button>
                프로젝트 등록 <span>+</span>
              </button>
            </div>
            <div className={cx('select-wrapper')}>
              <div className={cx('selected')} onClick={this.onList}>
                {job} <Up className={cx({ active: select })} />
              </div>
              <div className={cx('collapse', { active: select })}>
                <p onClick={() => this.onSelect('전체')}>전체</p>
                <p onClick={() => this.onSelect('기획')}>기획</p>
                <p onClick={() => this.onSelect('디자인')}>디자인</p>
                <p onClick={() => this.onSelect('개발')}>개발</p>
              </div>
            </div>
          </div>
          <div className={cx('item-wrapper')}>
            {this.itemInfo.map((item, index) => (
              <Link to="/item/1" key={index}>
                <Item {...item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
