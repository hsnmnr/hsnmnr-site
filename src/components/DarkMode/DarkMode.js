import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun } from '@fortawesome/free-solid-svg-icons';
// import { faMoon } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const useStyles = makeStyles({
  switch: {
    padding: 20,
    margin: 0,

  },
});

function DarkMode() {
  const classes = useStyles();
  const [light, setLight] = useState(true);

  const handleClick = () => {
    setLight(!light);
    localStorage.setItem('isLight', !light);
  };

  return (
    <div className="dark-mode">
      <Switch
        className={classes.switch}
        onClick={() => handleClick()}
        color="primary"
        checked={(localStorage.getItem('isLight')) ? (localStorage.getItem('isLight') === 'true') : true}
        checkedIcon={<WbSunnyIcon />}
        icon={<Brightness2Icon />}
      />
    </div>
  );
}

export default DarkMode;
