/**
 * Created by eatong on 16-12-5.
 */
import React from 'react';

class HomePage extends React.Component {
  changeColor() {
    const color = '#' + (Math.random() + '').slice(2, 8);
    document.body.style.setProperty('--themeColor', color);
  }
  render() {
    return (
      <div className="home-page">
        <button onClick={this.changeColor}>随机切换颜色</button>
        <p className='example-line'>
          <span className="label">mainColor</span>
          <span className="display main">main color style</span>
        </p>
        <p className='example-line'>
          <span className="label">border </span>
          <span className="display border">border : 1px solid </span>
        </p>
        <p className='example-line'>
          <span className="label">background-color </span>
          <span className="display background">background </span>
        </p>
      </div>
    );
  }
}

export default HomePage;
