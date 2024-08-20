import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

function Results() {
  const results = [
    { id: 1, frameNo: 126, videoNo: 'V001', timestamp: '00:00:05', thumbnail: '/path/to/image1.png' },
    { id: 2, frameNo: 127, videoNo: 'V002', timestamp: '00:00:10', thumbnail: '/path/to/image2.png' },
  ];

  return (
    <div>
      <Typography variant="h6">Retrieval results for: Santa Claus waving</Typography>
      <Typography variant="subtitle1">Filters applied:</Typography>
      <Grid container spacing={2}>
        {results.map((result) => (
          <Grid item xs={12} sm={6} md={4} key={result.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={result.thumbnail}
                alt={`Frame ${result.frameNo}`}
              />
              <CardContent>
                <Typography variant="body2">
                  Frame no. {result.frameNo}
                </Typography>
                <Typography variant="body2">
                  Video no. {result.videoNo}
                </Typography>
                <Typography variant="body2">
                  Timestamp: {result.timestamp}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );         
}

export default Results;
