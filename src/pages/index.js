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
        <Fire1 id="test" height={200} width={200} />
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    );
  }
}

export default IndexPage;
