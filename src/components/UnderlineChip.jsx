import { Chip } from '@mui/material';

export default function UnderlineChip() {
  return (
    <Chip
      label="Portfolio"
      clickable
      sx={{
        position: 'relative',
        backgroundColor: 'transparent',
        color: '#fff',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: '#42bdff',
          transform: 'scaleX(0)',
          transformOrigin: 'right', // 🔹 empieza a contraerse desde la derecha
          transition: 'transform 0.3s ease',
        },
        '&:hover::after': {
          transform: 'scaleX(1)',
          transformOrigin: 'left', // 🔹 crece desde la izquierda
        },
      }}
    />
  );
}
