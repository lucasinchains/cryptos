import React from 'react'

const TopButton = () => {

    document.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 200) {
        document.getElementById('top').classList.add('show');
      }
      else {
        document.getElementById('top').classList.remove('show');
      }
      });

  return (
    <a href="#top-page">
        <button id="top">&#11014;<br/>top</button>
    </a>
  )
}

export default TopButton;
