import { useEffect } from 'react';
import './index.scss'

function TextSphere() {
  useEffect(() => {
    import('TagCloud').then(response => {
      const tagCloud = response.default;
      // Todo color each type of skill (web, data science, coding concepts)
      // Todo replace text with svg icons
      tagCloud(
        '.tagcloud-container',
        [
          'Python',
          'Javascript',
          'MySQL',
          'MicrosoftSQL',
          'React',
          'Bootstrap',
          'Sass',
          'CSS',
          'HTML',
          'Git',
          'Java',
          'Photoshop',
          'Illustrator',
          'After Effect',
          'PHP',
          "C#",
          'JQuery',
          'TypeScript',
          'MongoDB',
          'Azure',
          'Nextjs',
          'Nodejs'

        ],
        {
          radius: 400,
          maxSpeed: 'fast',
          initSpeed: 'normal',
          direction: 130,
          keep: true,
          useContainerInlineStyles: false,
        },
      );
    });
    return () => {
      let tagClouds = document.getElementsByClassName('tagcloud');
      for (let i = 0; i < tagClouds.length; i++) {
        tagClouds[0].remove();
      }
    };
  }, []);

  return (
      <div className={'tagcloud-container'}></div>
  );
}

export default TextSphere