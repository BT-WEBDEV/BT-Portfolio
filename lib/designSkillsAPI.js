import * as React from 'react';
import useContentful from '../hooks/use-contenful';
import DesignSkillsHome from '../components/designskills';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';

const query = ` {
    skillsCollection {
      items {
        slug
        name
        usage
        image {
          url
        }
      }
    }
  }
`

export default function GetDesignSkillsAPI() {
    let {data, errors} = useContentful(query)

    if (errors) {
      return <span style={{color:"red"}}> {errors.map(error => error.message).join(",")} </span>
    }
    if (!data) { 
        return (
          <>
            <Box sx={{
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
                  p: 2
                }}
              >
                <Skeleton variant="rounded" width={210} height={210} />
              </Paper>
            </Box> 
          </>
        )
    }      
    return (
      <>
        <Box sx={{
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
              p: 2
            }}
          >
            <Typography variant="h5" align="center"> 
              Design
            </Typography>
            <Divider/> 
            <DesignSkillsHome data={data}/>
          </Paper>
        </Box> 
      </>
    );
}