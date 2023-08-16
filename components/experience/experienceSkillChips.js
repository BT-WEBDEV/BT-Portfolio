import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Link from 'next/link';

export default function ExperienceSkillChips({skill}) {
    return (
      <Link href={`/skills/${skill.slug}`} passHref>
        <Chip
          avatar={<Avatar alt={skill.slug} src={skill.image.url} />}
          label={skill.name}
          variant="outlined"
          style={{
            marginTop: '10px', 
        }}
        />
      </Link>
    );
  }

