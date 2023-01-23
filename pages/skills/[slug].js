import Head from 'next/head'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const drawerWidth = 240;

export default function Skill({results, params}) {
  const skill = results.data.skillsCollection.items.find(
    item => item.slug === params.slug
  );

  return (
    <>
      <Head>
        <title>{skill.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: 'flex' }} >
        <Box 
          component="main"
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            flexGrow: 1, p: 3, 
            width: { sm: `calc(100% - ${drawerWidth}px)` } 
          }}
        >
          <Typography variant="h3" align="center">
            {skill.name} 
          </Typography> 

          <Stack direction="row" justifyContent="center">
            <Chip align="center" label={skill.usage} />
          </Stack>

          <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center' 
            }}
          > 
            <Box
              component="img"
              justifyContent="center"
              sx={{
                width: 150,
                maxWidth: { xs: 150, md: 150 },
              }}
              alt="Skill Logo"
              src={skill.image.url}
            />
          </Box>

          <Typography 
            paragraph 
            align="center"
          >
            {skill.description}
          </Typography>
          </Box>
      </Box>
      
    </>
  ) 
}

const query = `
query($slug: String!) {
  skillsCollection(where: { slug: $slug }) {
    items {
      slug
      name
      description
      usage
      image {
        url
      }
    }
  }
}
`

/// Get URL Path
export async function getStaticPaths() { 
  const results = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    // Authenticate the request
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CDA_TOKEN}`,
    },
    // send the GraphQL query
    body: JSON.stringify({
      query: `
        {
          skillsCollection {
            items {
              slug
            }
          }
        }
      `,
    }),
  })
  .then((response) => response.json()); 

  const slugs = results.data.skillsCollection.items.map(skill => skill.slug);

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

/// GET INFO FROM CONTENTFUL
export async function getStaticProps({ params }) {
    const data = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CDA_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ 
          query,
          variables: {
            slug: params.slug,
          },
      }),
    })
    .then((response) => response.json()); 
    return {
        props: {
          results: data,
          params,
        }
    }
}


