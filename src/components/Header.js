import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as Search } from '../imgs/search.svg';

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx('header')}>
      <span className={cx('logo')}>Sidus</span>
      <span className={cx('search')}>
        <Search />
      </span>
    </header>
  );
};

export default Header;
