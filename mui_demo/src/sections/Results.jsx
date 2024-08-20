import React from 'react';
import { Grid, Typography } from '@mui/material';
import FrameResult from '../components/FrameResult';

function Results() {
  const results = [
    { id: 1, frameNo: 126, videoNo: 'V001', timestamp: '00:00:05', thumbnail: '/path/to/image1.png' },
    { id: 2, frameNo: 127, videoNo: 'V002', timestamp: '00:00:10', thumbnail: '/path/to/image2.png' },
    { id: 3, frameNo: 122, videoNo: 'V008', timestamp: '00:00:10', thumbnail: '/path/to/image3.png' },

  ];

  return (
    <div>
      <Typography variant="h6">Retrieval results for: Santa Claus waving</Typography>
      <Typography variant="subtitle1">Filters applied:</Typography>
      <Grid container spacing={2}>
        {results.map((result) => (
          <Grid item xs={12} sm={6} md={4} key={result.id}>
            <FrameResult
              frameNo={result.frameNo}
              videoNo={result.videoNo}
              timestamp={result.timestamp}
              thumbnail={result.thumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Results;
