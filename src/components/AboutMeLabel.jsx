import React from "react";
import { Box, Typography } from "@mui/material";
import { Button} from '@mui/material';

export default function AboutLabel() {
  return (

      <Button
      
        disableRipple
        sx={{
        textTransform: 'none',
        position: 'relative',
         color:  '#e1e7ef',
        backgroundColor: 'transparent',
        '& span': {
          position: 'relative',
            display: 'inline-block',
            fontSize: "1.5rem",   // 👈 tamaño de la fuente aumentado
          fontWeight: 600,      // opcional: negrita para más presencia
          
        },
        '& span::after': {
                content: '""',
                position: 'absolute',
                bottom: -0.5,
                left: 0,
                width: '100%',
                height: '1px',
                backgroundColor: '#42bdff',
            }
      }}
    >
          <span>About Me</span>
    </Button>
    
  );
}
