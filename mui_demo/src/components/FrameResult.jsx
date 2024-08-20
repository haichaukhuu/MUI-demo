// components/FrameResult.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function FrameResult({ frameNo, videoNo, timestamp, thumbnail }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={thumbnail}
        alt={`Frame ${frameNo}`}
      />
      <CardContent>
        <Typography variant="body2">
          Frame no. {frameNo}
        </Typography>
        <Typography variant="body2">
          Video no. {videoNo}
        </Typography>
        <Typography variant="body2">
          Timestamp: {timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FrameResult;
