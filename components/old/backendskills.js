import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import styles from '../styles/skill.module.css'

export default function BackendSkillsHome({data}) {
  // console.table(data.skillsCollection.items); 

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
      
      {/* LOOP THROUGH CONTENTFUL OBJECT & GET FRONTEND SKILLS  */}
      { data.skillsCollection.items.map(skill => {
        if(skill.usage == "Backend") {
          return (
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
          ); 
        }

      })}
      </Box>
  );

}
BackendSkillsHome.propTypes = {
    name:PropTypes.string
}; 