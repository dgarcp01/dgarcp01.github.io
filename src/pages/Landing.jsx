import { Box, Toolbar, Avatar,Typography, Container, Divider } from "@mui/material";
import RRSSIcons from "../components/rrss"



export default function Landing() {
    return <Container maxWidth="md" sx={{display:'flex'}}>
        <Divider/>
        <Box sx={{ my: 4, alignItems: "center"}}>
            
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Diego García Pérez
            </Typography>
            
            <Typography variant="h7" color = "#9c9898ff" gutterBottom sx={{ fontWeight: 'bold' }}>
              Assistant Professor at University of Oviedo
            </Typography>
            <RRSSIcons/>
        </Box>
        <Box sx={{ ml: 15, display:{ xs:"none", sm: "none", lg: "flex" }}}>
            <Avatar
                alt="Diego García Pérez"
                src="/avatar.jpeg"
                sx={{ width: 220, height: 220 }}
            />

        </Box>
    
               
        

    </Container>
    
    
    
    
    
}
