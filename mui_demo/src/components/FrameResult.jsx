// components/FrameResult.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function FrameResult({ rank, videoNo, timestamp, thumbnail, simScore, objects }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={thumbnail}
        alt={`Video ${videoNo}`}
      />
      <CardContent>
        <Typography variant="body2">
          Rank: {rank}
        </Typography>
        <Typography variant="body2">
          Video no.: {videoNo}
        </Typography>
        <Typography variant="body2">
          Timestamp: {timestamp}
        </Typography>
        <Typography variant="body2">
          Similarity Score: {simScore}
        </Typography>
        <Typography variant="body2">
          Detected Objects: {objects}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FrameResult;
