import * as React from 'react';
import Skill from './skill';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function SkillsBox({data}) {
  // Group skills by usage
  const order = ['Frontend', 'Backend', 'DevOps', 'Design', 'Productivity', 'Digital Marketing'];

  // Order skills within in each usage
  const usageOrder = {
    "Frontend": ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'React.JS', 'Next.JS', 'Bootstrap', 'Material UI', 'Markdown'],
    "Backend": ['PHP', 'Wordpress', 'Node.JS', 'Python', 'Django', 'Ion', 'MySQL'],
    "DevOps": ['Git', 'GitHub', 'Gulp.JS'],
    "Design": ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'], 
    "Productivity": ['Asana', 'Virtual Code Studio'],
    "Digital Marketing": ['Google Analytics', 'Google Tag Manager', 'Google Search Console'],
  };
  

  const orderedSkills = order.reduce((acc, key) => {
    const skillsWithUsage = data.skillsCollection.items.filter(skill => skill.usage === key);
    
    // Sort the skills based on the defined order for the current usage
    const sortedSkills = skillsWithUsage.sort((a, b) =>
      usageOrder[key].indexOf(a.name) - usageOrder[key].indexOf(b.name)
    );
  
    if (sortedSkills.length > 0) {
      acc.push({ usage: key, skills: sortedSkills });
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


