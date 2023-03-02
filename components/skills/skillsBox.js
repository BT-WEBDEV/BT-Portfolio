import * as React from 'react';
import Skill from './skill';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function SkillsBox({data}) {
  // Group skills by usage
  const order = ['Frontend', 'Backend', 'Devops', 'Design', 'Productivity'];
  const orderedSkills = order.reduce((acc, key) => {
    const skillsWithUsage = data.skillsCollection.items.filter(skill => skill.usage === key);
    if (skillsWithUsage.length > 0) {
      acc.push({ usage: key, skills: skillsWithUsage });
    }
    return acc;
  }, []);

  return (
    <>
      {orderedSkills.map(({ usage, skills }) => (
        <Box key={usage} sx={{
          display: 'flex',
          justifyContent: "center",
          flexWrap: 'wrap',
          width: 'auto',
          overflow: 'hidden',
          mt: 5, 
          mb: 5
          }}

        > 
          <Paper 
          elevation={3}
          sx={{
            p: 2,
            display: 'flex',
            width: 'auto',
            justifyContent: 'center', 
            flexDirection: 'column', 
            m: 1
          }}> 
              <Typography variant="h5" align="center"> 
                {usage}
              </Typography>

              <Divider/> 
              <Box sx={{
                display: 'flex', 
                flexWrap: 'wrap',
                flexDirection: 'row', 
                justifyContent: 'center'
              }}> 
                {skills.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </Box> 
          </Paper> 
        </Box>
      ))}
    </>
  );
}


