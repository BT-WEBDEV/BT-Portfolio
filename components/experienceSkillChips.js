import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export default function ExperienceSkillChips({skill}) {
    return (
        <Chip
          avatar={<Avatar alt={skill.slug} src={skill.image.url} />}
          label={skill.name}
          variant="outlined"
        />
    );
  }

