import * as React from 'react';
import useContentful from '../hooks/use-contenful';

const query = ` {
    skillsCollection {
      items {
        slug
        name
        description
        usage
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
`

export default function GetSkills() {
    let {data, errors} = useContentful(query)

    if (errors) {
      return <span style={{color:"red"}}> {errors.map(error => error.message).join(",")} </span>
    }
    if (!data) { 
        return "Loading...";
    } 
    
    //Set up a while loop.
    return (
        <div>
            <p>{data.skillsCollection.items[0].name}</p> 
        </div>
    );
}