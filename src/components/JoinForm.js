import React, { Component } from 'react';
import styles from './JoinForm.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { ReactComponent as Right } from '../imgs/chevron-right.svg';

const cx = classNames.bind(styles);

class JoinForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    job: '',
    duty: '',
    career: '',
    bsPersonality: '',
    pvPersonality: '',
    slide: 0,
    click: false,
    rotate: -1,
    privateRotate: -1,
    personForm: false,
    careerForm: false,
    personalityForm: false,
    count: 5,
  };
  componentDidUpdate(prevProps, prevState) {
    const { count, personForm, careerForm, personalityForm } = this.state;
    if (personForm && careerForm && personalityForm) {
      if (count <= 0) {
        clearInterval(this.id);
        this.props.history.replace('/');
      } else {
        if (!this.id) {
          this.id = setInterval(() => {
            const { count } = this.state;
            if (count <= 0) return;
            this.setState(state => ({ count: state.count - 1 }));
          }, 1000);
        }
      }
    }
  }
  componentWillUnmount() {
    sessionStorage.setItem('user', JSON.stringify(this.state));
  }

  onClick = () => {
    const {
      name,
      email,
      password,
      job,
      duty,
      career,
      bsPersonality,
      pvPersonality,
      slide,
    } = this.state;
    if (slide === 0) {
      if (name === '' || email === '' || password === '') {
        return;
      }
    } else if (slide === 1) {
      if (job === '' || duty === '' || career === '') {
        return;
      }
    } else if (slide === 2) {
      if (bsPersonality === '' || pvPersonality === '') {
        return;
      }
    }
    let newSlide = slide;
    if (slide === 3) {
      newSlide = 0;
    } else {
      newSlide += 1;
    }
    this.setState({
      slide: newSlide,
    });
  };

  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        const { name, email, password } = this.state;
        let personForm = false;
        if (name !== '' && email !== '' && password !== '') {
          personForm = true;
        }
        this.setState({
          personForm,
        });
      },
    );
  };
  onSlideToString = num => {
    switch (num) {
      case 0:
        return 'first';
      case 1:
        return 'second';
      case 2:
        return 'third';
      case 3:
        return 'forth';
      default:
        return '';
    }
  };
  onRotate = num => {
    const { rotate } = this.state;
    let newRotate = num;
    if (rotate === num) {
      newRotate = -1;
    }
    this.setState({
      rotate: newRotate,
    });
  };
  onSelect = ({ target, value }) => {
    this.setState(
      {
        rotate: -1,
        [target]: value,
      },
      () => {
        const { job, duty, career } = this.state;
        let careerForm = false;
        if (job !== '' && duty !== '' && career !== '') {
          careerForm = true;
        }
        this.setState({
          careerForm,
        });
      },
    );
  };

  onPrivateRotate = num => {
    const { privateRotate } = this.state;
    let newPrivateRotate = num;
    if (privateRotate === num) {
      newPrivateRotate = -1;
    }
    this.setState({
      privateRotate: newPrivateRotate,
    });
  };
  onPrivateSelect = ({ target, value }) => {
    this.setState(
      {
        privateRotate: -1,
        [target]: value,
      },
      () => {
        const { bsPersonality, pvPersonality } = this.state;
        let personalityForm = false;
        if (bsPersonality !== '' && pvPersonality !== '') {
          personalityForm = true;
        }
        this.setState({
          personalityForm,
        });
      },
    );
  };
  render() {
    const {
      name,
      email,
      password,
      slide,
      rotate,
      job,
      duty,
      career,
      bsPersonality,
      pvPersonality,
      privateRotate,
      personForm,
      careerForm,
      personalityForm,
      count,
    } = this.state;
    const slideNum = this.onSlideToString(slide);
    return (
      <div className="join-form">
        <div>
          <Link to="/">
            <span className="exit">&#10005;</span>
          </Link>
        </div>
        <div className="intro">
          <div className={cx('slide', slideNum)}>
            <div className="slide-item">
              <p>필수 정보를</p>
              <p>입력해주세요.</p>
            </div>
            <div className="slide-item">
              <p>경력 프로필을</p>
              <p>완성해보세요.</p>
            </div>
            <div className="slide-item">
              <p>성향선택으로</p>
              <p>맞춤 프로젝트를 만나보세요.</p>
            </div>
            <div className="slide-item">
              <p>가입이</p>
              <p>완료되었습니다.</p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className={cx('slide', slideNum)}>
            <div className="slide-item">
              <div className="input-wrapper">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="필수입력"
                  value={name}
                  onChange={this.onChange}
                />
                <p>이름을 입력해주세요.</p>
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="필수입력"
                  value={email}
                  onChange={this.onChange}
                />
                <p>이메일을 입력해주세요.</p>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="8자리 이상 (영문 + 숫자 포함)"
                  value={password}
                  onChange={this.onChange}
                />
                <p>비밀번호를 입력해주세요.</p>
              </div>
            </div>
            <div className="slide-item">
              <div className="select-wrapper">
                <div className="select-item">
                  <span>직군</span>
                  <div className="select">
                    <p>{job}</p>
                    <div className={cx('collapse', { active: rotate === 0 })}>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'job', value: '기획' })
                        }
                      >
                        기획
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'job', value: '디자인' })
                        }
                      >
                        디자인
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'job', value: '개발자' })
                        }
                      >
                        개발
                      </p>
                    </div>
                  </div>
                  <span
                    className={cx('icon', { active: rotate === 0 })}
                    onClick={() => this.onRotate(0)}
                  >
                    <Right />
                  </span>
                </div>
              </div>
              <div className="select-wrapper">
                <div className="select-item">
                  <span>직무</span>
                  <div className="select">
                    <p>{duty}</p>
                    <div className={cx('collapse', { active: rotate === 1 })}>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'duty', value: 'FrontEnd' })
                        }
                      >
                        FrontEnd
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'duty', value: 'BackEnd' })
                        }
                      >
                        BackEnd
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'duty', value: 'FullStack' })
                        }
                      >
                        FullStack
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'duty', value: 'Android' })
                        }
                      >
                        Android
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'duty', value: 'Ios' })
                        }
                      >
                        Ios
                      </p>
                    </div>
                  </div>
                  <span
                    className={cx('icon', { active: rotate === 1 })}
                    onClick={() => this.onRotate(1)}
                  >
                    <Right />
                  </span>
                </div>
              </div>
              <div className="select-wrapper">
                <div className="select-item">
                  <span>경력</span>
                  <div className="select">
                    <p>{career}</p>
                    <div className={cx('collapse', { active: rotate === 2 })}>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'career', value: '대학생' })
                        }
                      >
                        대학생
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'career', value: '1년' })
                        }
                      >
                        1년
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'career', value: '2년' })
                        }
                      >
                        2년
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'career', value: '3년' })
                        }
                      >
                        3년
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'career', value: '4년' })
                        }
                      >
                        4년
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'career', value: '5년' })
                        }
                      >
                        5년
                      </p>
                      <p
                        onClick={() =>
                          this.onSelect({ target: 'career', value: '6년 이상' })
                        }
                      >
                        6년이상
                      </p>
                    </div>
                  </div>
                  <span
                    className={cx('icon', { active: rotate === 2 })}
                    onClick={() => this.onRotate(2)}
                  >
                    <Right />
                  </span>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="select-wrapper">
                <div className="select-item">
                  <span>업무성향</span>
                  <div className="select">
                    <p>{bsPersonality}</p>
                    <div
                      className={cx('collapse', {
                        active: privateRotate === 0,
                      })}
                    >
                      <p
                        onClick={() =>
                          this.onPrivateSelect({
                            target: 'bsPersonality',
                            value: '오프라인',
                          })
                        }
                      >
                        오프라인
                      </p>
                      <p
                        onClick={() =>
                          this.onPrivateSelect({
                            target: 'bsPersonality',
                            value: '온라인',
                          })
                        }
                      >
                        온라인
                      </p>
                    </div>
                  </div>
                  <span
                    className={cx('icon', { active: privateRotate === 0 })}
                    onClick={() => this.onPrivateRotate(0)}
                  >
                    <Right />
                  </span>
                </div>
              </div>
              <div className="select-wrapper">
                <div className="select-item">
                  <span>개인성향</span>
                  <div className="select">
                    <p>{pvPersonality}</p>
                    <div
                      className={cx('collapse', {
                        active: privateRotate === 1,
                      })}
                    >
                      <p
                        onClick={() =>
                          this.onPrivateSelect({
                            target: 'pvPersonality',
                            value: '주 1회',
                          })
                        }
                      >
                        주 1회
                      </p>
                      <p
                        onClick={() =>
                          this.onPrivateSelect({
                            target: 'pvPersonality',
                            value: '주 2회',
                          })
                        }
                      >
                        주 2회
                      </p>
                      <p
                        onClick={() =>
                          this.onPrivateSelect({
                            target: 'pvPersonality',
                            value: '주 3회',
                          })
                        }
                      >
                        주 3회
                      </p>
                      <p
                        onClick={() =>
                          this.onPrivateSelect({
                            target: 'pvPersonality',
                            value: '주 4회 이상',
                          })
                        }
                      >
                        주 4회 이상
                      </p>
                    </div>
                  </div>
                  <span
                    className={cx('icon', { active: privateRotate === 1 })}
                    onClick={() => this.onPrivateRotate(1)}
                  >
                    <Right />
                  </span>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <p className="complete">
                페이지가 {count}초후 자동으로 이동합니다.
              </p>
            </div>
          </div>
        </div>
        {slide < 3 && (
          <div className="next-button">
            <button
              className={cx({
                active:
                  slide === 0
                    ? personForm
                    : slide === 1
                    ? careerForm
                    : slide === 2
                    ? personalityForm
                    : false,
              })}
              onClick={this.onClick}
            >
              다음
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default JoinForm;
