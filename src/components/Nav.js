import React, { Component } from 'react';
import styles from './Nav.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Nav extends Component {
  state = {
    select: 0,
  };
  onSelect = num => {
    this.setState({
      select: num,
    });
  };
  render() {
    const { select } = this.state;
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li
            className={cx('nav-item', { active: select === 0 })}
            onClick={() => this.onSelect(0)}
          >
            최근등록순
          </li>
          <li
            className={cx('nav-item', { active: select === 1 })}
            onClick={() => this.onSelect(1)}
          >
            마감임박순
          </li>
          <li
            className={cx('nav-item', { active: select === 2 })}
            onClick={() => this.onSelect(2)}
          >
            스크랩순
          </li>
        </ul>
        <div className={cx("underline", { first : select === 0, second : select === 1, third: select === 2 })} />
      </nav>
    );
  }
}

export default Nav;
