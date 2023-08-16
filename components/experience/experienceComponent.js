import * as React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Divider, Link, Paper, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExperienceSkillChips from './experienceSkillChips';
import styles from '../../styles/experience.module.css'


export default function ExperienceComponent({experience}) {  
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
          className={styles.experiencePaper} 
          sx={{
            p: 2,
            display: 'flex',
            width: '100%',
            justifyContent: 'center', 
            flexDirection: 'column', 
            overflow: 'hidden'
          }}
        >
            <Box 
              className={styles.experienceIcons}
              sx={{
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'end', 
              }}
            >
                {experience.url ? (
                <Link 
                  href={experience.url}
                  target='_blank'
                  rel="noopener"
                >
                    <OpenInNewIcon />
                </Link>
                ) : null}

                {experience.linkedin ? (
                <Link 
                  href={experience.linkedin}
                  target='_blank'
                  rel="noopener"
                >
                    <LinkedInIcon />
                </Link>
                ) : null}
            </Box> 
            <Link 
                id={experience.slug}
                key={experience.slug}
                href={'/experience/' + experience.slug}
                underline="none"
                className={styles.experienceLink}
                style={{
                    backgroundImage: `url(${experience.image.url})`,
                    marginLeft: 'auto', 
                    marginRight: 'auto'
                }}
            /> 
            <Link 
                id={experience.title}
                key={experience.title}
                href={'/experience/'+ experience.slug}
                underline='hover'
                variant="h4" 
                align="center"
                sx={{ 
                    pt: 3  
                }}
            > 
                {experience.name}
            </Link>
            
            <Typography variant="p" align="center"> 
                {experience.position}
            </Typography>

            <Stack 
                direction="row"
                spacing={1}
                className={styles.chipsContainer}
                >
                    {experience.skillsCollection.items.map((skill, index) => {
                        return <ExperienceSkillChips skill={skill} key={index}/>
                    })}
            </Stack>

            <Divider
                sx={{ 
                    pt: 2  
                }}
            />
            <>
                {documentToReactComponents(
                experience.experience.json
                )}
            </>
            <Divider/>  
            <Typography 
                variant="p" 
                align="center"
                sx={{ 
                    pt: 2  
                }}
            > 
                {experience.location}
            </Typography>
            <Typography variant="p" align="center"> 
                {experience.dateRange} 
            </Typography>
        </Paper>
      </Box> 
    )
}