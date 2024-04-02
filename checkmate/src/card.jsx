import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard({onDeleteCard}) {
  return (
    <Box sx={{ maxWidth: 400 }}> {/* Set max-width to restrict the card width */}
      <Card sx={{ width: '50%' }}> {/* Set width to 100% to fill the container */}
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           2nd of April 2024
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">expand</Button>
          <Button size="small" onClick={onDeleteCard}>Delete</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
