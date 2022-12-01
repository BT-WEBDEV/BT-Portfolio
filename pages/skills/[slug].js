import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


/// QUERY 
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

/// GET URL PATH 
export async function getStaticPaths() { 
  const results = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    // Authenticate the request
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CDA_TOKEN}`,
    },
    // send the GraphQL query
    body: JSON.stringify({ query }),
  })
  .then((response) => response.json());
  console.log(results); 
  return {
    paths: results.data.skillsCollection.items.map(skill =>{
      const slug = skill.slug
      return {
        params: {
          slug
        }
      }
    }),
    fallback: false
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
        body: JSON.stringify({ query }),
    })
    .then((response) => response.json());
    return {
        props: {
          results: data
        }
    }
}



/// RESULT IS STILL PAGE
export default function Skill({results}) {
  console.log(results)
  return (
      results.data.skillsCollection.items.map(skill => {
          console.log(skill)
          return (
              <div>TEST {skill.name} </div> 
          )
      })
  ) 
}