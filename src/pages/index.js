import React from 'react';
import Link from 'gatsby-link';
import anime from 'animejs';
import Fire1 from '../assets/fire-1.svg';
import paths from '../assets/paths';

class IndexPage extends React.Component {
  componentDidMount() {
    let timeline = anime.timeline({
      direction: 'alternate',
      loop: true,
    });
    timeline
      .add({
        targets: '#test path',
        d: {
          value: paths.path_1,
          duration: 200,
          easing: 'easeInOutQuad',
        },
      })
      .add({
        targets: '#test path',
        d: {
          value: paths.path_2,
          duration: 200,
          easing: 'easeInOutQuad',
        },
      });
  }

  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>
          Now go build {Math.random(1, 100) < 0.5 ? 'Hello' : 'Goodbye'}
          something great.
        </p>

        <Link to="/page-2/">Go to page 2</Link>
        <Fire1 id="test" height={200} width={200} />
      </div>
    );
  }
}

export default IndexPage;
