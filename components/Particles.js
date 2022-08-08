import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from 'react';
import { useTheme } from 'next-themes';

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  const { theme, setTheme } = useTheme();
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const optionsLight = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: '#fff', // this sets a background color for the canvas
      },
      fullScreen: {
        enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: false, // enables the click event
            mode: 'push', // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: 'repulse', // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },

      particles: {
        number: {
          value: 62,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        shape: {
          type: 'triangle',
          stroke: {
            width: 2,
            color: '##181616',
          },
        },
        color: {
          value: '#181616',
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
          color: '#181515',
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          random: {
            enable: true,
          },
          value: {
            min: 0.1,
            max: 3,
          },
          animation: {
            enable: true,
            speed: 20,
            minimumValue: 0.1,
          },
        },
      },
    };
  }, []);

  const optionsDark = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: '#000', // this sets a background color for the canvas
      },
      fullScreen: {
        enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: false, // enables the click event
            mode: 'push', // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: 'repulse', // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
        },
      },

      particles: {
        number: {
          value: 62,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        shape: {
          type: 'triangle',
          stroke: {
            width: 2,
            color: '#fff',
          },
        },
        color: {
          value: '#fff',
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
          color: '#fff',
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          random: {
            enable: true,
          },
          value: {
            min: 0.1,
            max: 3,
          },
          animation: {
            enable: true,
            speed: 20,
            minimumValue: 0.1,
          },
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  if (theme == 'light') {
    return (
      <Particles
        id={props.id}
        init={particlesInit}
        options={optionsLight}
        className={props.className}
      />
    );
  } else {
    return (
      <Particles
        id={props.id}
        init={particlesInit}
        options={optionsDark}
        className={props.className}
      />
    );
  }
};

export default ParticlesComponent;
