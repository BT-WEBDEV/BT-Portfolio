import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import GetSkillsHome from '../lib/getSkillsHomeAPI';

export default function SkillHome() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} variant="outlined">
        <Typography paragraph align="center">
            
        </Typography>
        </Paper>
        <Paper variant="outlined" />
        <Paper elevation={3}/>
      </Box>
    );
}

SkillHome.propTypes = {
    name:PropTypes.string
}; 