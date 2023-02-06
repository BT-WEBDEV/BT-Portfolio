import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link  from '@mui/material/Link';
import styles from '../styles/experience.module.css'


export default function ExperienceComponent({experience}) {
    //console.table(experienceCollection.items); 
    return (
      <Box 
      key={experience.slug}
      sx={{
        display: 'flex',
        justifyContent: "center",
        flexWrap: 'wrap',
        width: 'auto',
        mt: 5, 
        mb: 5
        }}
      > 
        <Paper 
          elevation={3} 
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'center', 
            flexDirection: 'column', 
            overflow: 'hidden'
          }}
        >
        <Link 
            key={experience.slug}
            href={'/experience/' + experience.slug}
            underline="none"
            className={styles.experienceLink}
            style={{
            backgroundImage: `url(${experience.image.url})`,
            }}
        /> 
          <Typography variant="h5" align="center"> 
            {experience.name}
          </Typography>
          <Divider/>

          <Typography variant="p" align="center"> 
            {experience.location}
          </Typography>
        
        </Paper>
      </Box> 
    )
}