import React from 'react';
import { Grid, Typography } from '@mui/material';
import FrameResult from '../components/FrameResult';

function Results() {
  const results = [
    { rank: '1', videoNo: 'V001', timestamp: '00:00:05', thumbnail: '/image1.png', simScore: '0.9', objects: 'santa claus' },
    { rank: '2', videoNo: 'V002', timestamp: '00:00:10', thumbnail: '/image2.png', simScore: '0.9', objects: 'santa claus' },
    { rank: '3', videoNo: 'V008', timestamp: '00:00:10', thumbnail: '/image3.png', simScore: '0.9', objects: 'santa claus' },

  ];

  return (
    <div>
      <Typography variant="h6">Retrieval results for: Santa Claus waving</Typography>
      <Typography variant="subtitle1">Filters applied:</Typography>
      <Grid container spacing={2}>
        {results.map((result) => (
          <Grid item xs={12} sm={6} md={4} key={result.rank}>
            <FrameResult
              rank={result.rank}
              videoNo={result.videoNo}
              timestamp={result.timestamp}
              thumbnail={result.thumbnail}
              simScore={result.simScore}
              objects={result.objects}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Results;
