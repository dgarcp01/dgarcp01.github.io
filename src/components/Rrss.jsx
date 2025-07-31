import { Box, IconButton } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';



export default function RRSSIcons() {
    const rrss_items = [{ "icon": <GitHubIcon />, "url": "https://github.com/dgarcp01" },
        { "icon": <LinkedInIcon />, "url": "https://www.linkedin.com/feed/" },
        { "icon": <SchoolIcon />, "url": "https://portalinvestigacion.uniovi.es/investigadores/217440/detalle" },
                        
        
    ];
    return( <Box sx={{ display: 'flex', justifyContent: 'left', width: '100%', mt: 2 }}>
    
        {rrss_items.map((item,key) => {
                 return (<IconButton
                    component='a'
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary">
                        {item.icon} 
                    </IconButton>)
        })}


        </Box>
    );
}
