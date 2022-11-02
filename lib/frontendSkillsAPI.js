import * as React from 'react';
import useContentful from '../hooks/use-contenful';
import FrontendSkillsHome from '../components/frontendskills';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';


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

export default function GetFrontendSkillsAPI() {
    let {data, errors} = useContentful(query)

    if (errors) {
      return <span style={{color:"red"}}> {errors.map(error => error.message).join(",")} </span>
    }
    if (!data) { 
        return "Loading...";
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
                Frontend
              </Typography>
              <Divider/> 
              <FrontendSkillsHome data={data}/>
            </Paper>
          </Box> 
      </>
    );
}