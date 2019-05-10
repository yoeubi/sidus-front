import React, { Component } from 'react';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
class Main extends Component {
  componentDidMount() {
    sessionStorage.setItem('logo', true);
    this.id = setTimeout(() => {
      const { history } = this.props;
      const user = sessionStorage.getItem('user');
      if (user) {
        history.replace('/');
      } else {
        history.replace('/join');
      }
    }, 3000);
  }
  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return (
      <div className={cx('main')}>
        <span>Sidus</span>
      </div>
    );
  }
}

export default Main;
