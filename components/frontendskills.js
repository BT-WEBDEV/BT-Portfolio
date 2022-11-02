import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
        { data.skillsCollection.items.map(skill => {

          if(skill.usage == "Frontend") {
            return (
              <Paper elevation={0} variant="outlined" key={skill.name}>
                <Typography paragraph align="center">
                  {skill.name}
                </Typography>
              </Paper>
            ); 
          }

        })}
        </Box>
    );

}


FrontendSkillsHome.propTypes = {
    name:PropTypes.string
}; 