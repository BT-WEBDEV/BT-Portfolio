import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import styles from '../styles/skill.module.css'


export default function FrontendSkillsHome({data}) {


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
          if(skill.usage == "Frontend") {
            return (
              <Link 
                href="/skills/" 
                className={styles.skillLink}
                style={{
                  backgroundImage: `url(${skill.image.url})`,
                }}
              > 
                <Typography 
                  h3
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


FrontendSkillsHome.propTypes = {
    name:PropTypes.string
}; 