import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import styles from '../../styles/skill.module.css'


export default function Skill({skill}) {
    return (
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', 
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
      >
      <Link 
          key={skill.slug}
          href={'/skills/' + skill.slug}
          className={styles.skillLink}
          underline="none"
          style={{
            backgroundImage: `url(${skill.image.url})`,
          }}
        > 
          <Typography 
            h3="true"
            align="center"
            className = {styles.hoverableShow}
          >
            {skill.name}
          </Typography>   
        </Link>
      </Box>
    );
}


Skill.propTypes = {
    name:PropTypes.string
}; 