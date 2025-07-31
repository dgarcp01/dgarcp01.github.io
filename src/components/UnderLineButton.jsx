import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
export default function UnderlineButton({ key ="",label ="button", to ="", isActive ="false"}) {
  return (
      <Button
        component={Link}
          to={to}
          key={ key}
        disableRipple
          sx={{
        textTransform: 'none',
        position: 'relative',
         color: isActive ? '#ffffffff' : '#bdbdbdce',
        backgroundColor: 'transparent',
        '& span': {
          position: 'relative',
          display: 'inline-block',
        },
        '& span::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: '#42bdff',
          transform: 'scaleX(0)',
          transformOrigin: 'right',
          transition: 'transform 0.3s ease',
        },
        '&:hover span::after': {
          transform: 'scaleX(1)',
          transformOrigin: 'left',
        },
      }}
    >
          <span>{ label}</span>
    </Button>
  );
}
