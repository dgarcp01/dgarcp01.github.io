import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


import UnderlineButton from './UnderLineButton';

function CardView({ cards}) {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        //gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gridTemplateColumns: '1fr',
        gap: 2,
      }}
    >
          {cards.map((card, index) => (
              <Card sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
              }}>

        <CardContent       sx={{
                    height: '100%',
                    '&:hover': {
                                backgroundColor: 'transparent', // evita el color de hover
                                },
            }}>
               <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="secondary">
                {card.description}
              </Typography>
        </CardContent>
                      
  
        
        <CardActions>
                      <UnderlineButton   key={card.path} label={"Learn more"} to={ card.path} />
      </CardActions>          
        </Card>
      ))}
    </Box>
  );
}

export default CardView;
