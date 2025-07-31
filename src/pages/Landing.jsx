import { Box, Toolbar, Typography, Container } from "@mui/material";
import  RRSSIcons  from "../components/Rrss"

export default function Landing() {
    return<Container maxWidth="md">
        <Box sx={{ my: 4 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Diego García Pérez
            </Typography>
            <Typography variant="h7" color = "#9c9898ff" gutterBottom sx={{ fontWeight: 'bold' }}>
              Assistant Professor at University of Oviedo
            </Typography>
            <RRSSIcons/>

        </Box>

        
    
    </Container>
    
    
    
    
    
}
