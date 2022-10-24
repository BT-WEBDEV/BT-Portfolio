import * as React from 'react';
import useContentful from '../hooks/use-contenful';
import SkillHome from '../components/paper';

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

export default function GetSkillsHome() {
    let {data, errors} = useContentful(query)

    if (errors) {
      return <span style={{color:"red"}}> {errors.map(error => error.message).join(",")} </span>
    }
    if (!data) { 
        return "Loading...";
    } 
    console.log(data.skillsCollection.items[0])
    const {skill} = data.skillsCollection.items[0]

    //Set up a while loop.
    return (
        <SkillHome skill={skill}/> 
        // <div>
        //     <p>{data.skillsCollection.items[0].name}</p> 
        // </div>

    );
}