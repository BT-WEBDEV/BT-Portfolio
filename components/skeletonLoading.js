import React from 'react';

// Material UI
import { Box, Paper, Skeleton } from '@mui/material';

const SkeletonLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: "center",
        flexWrap: 'wrap',
        width: '100%',
        height: '100vh'
      }}
    > 
      <Paper 
        elevation={3} 
        sx={{
          p: 2,
          width: '100%', // Set the skeleton's width to 100%
          textAlign: "center" // Center the skeletons horizontally
        }}
      >
        <Skeleton variant="circular" width={150} height={150} sx={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem' }}/>
        <Skeleton variant="rounded" width="100%" height={200} sx={{ marginBottom: '2rem' }} />
        <Skeleton variant="rounded" width="100%" height={200} sx={{ marginBottom: '2rem' }} />
        <Skeleton variant="rounded" width="100%" height={200} sx={{ marginBottom: '2rem' }} />
      </Paper>
    </Box>
  );
};

export default SkeletonLoading;
