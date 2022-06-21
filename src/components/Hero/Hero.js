import { useState, useEffect } from 'react';
import "./Hero.scss";
import { TagCloud } from 'react-tagcloud'
import AutoTyping from '../AutoTyping/AutoTyping';
const Hero = () => {
  const isMobile = () => window.outerWidth < 1024
  const contenido2 = "Full Stack Developer."
  const contenido1 = "Martin Barreiro"

  const data = [
    // { value: 'MongoDb', count: 10 },
    { value: 'HTML5', count: 20 },
    { value: 'JavaScript', count: 20 },
    { value: 'React.js', count: 25 },
    { value: 'Node.js', count: 20 },
    { value: 'Css', count: 25 },
    { value: 'Redux', count: 30 },
    { value: 'Express.js', count: 20 },
    { value: 'postgreSQL', count: 22 },
    { value: 'Sass', count: 12},
  ]
  const customRenderer = (tag, size, color) => (
    <span className="cmp-hero__custom-tag"
      key={tag.value}
      style={{
        animation: 'float 4s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 1.3}em`,
        // boxShadow: `-5px 0px 20px ${color}`,
      }}
    >
      {tag.value}
    </span>
  )
  return (
    <div className="cmp-hero">
      <div className="cmp-hero-content">
        <div className="cmp-hero-content__wrapper">
          <h1>
            <span className="cmp-hero-content__line-1">Hi, my name is:</span>
            <AutoTyping contenido={contenido1} />
            {/* <span className="cmp-hero-content__line-2">Martin Barreiro</span> */}
          </h1>
          <AutoTyping contenido={contenido2} />
        </div>
      </div>
      <div className="cmp-hero-media">
        <div className="cmp-hero-media__wrapper">
          <TagCloud
            minSize={1}
            maxSize={isMobile() ? 4 : 7}
            tags={data}
            renderer={customRenderer}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
