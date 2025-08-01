import { Box, Typography, Container, } from "@mui/material";
import CardView from "../components/CardView"

const proyectos = [
  {
    id: 1,
    title: 'VirtyRemLAB: Hybrid Virtual-Remote Laboratory',
    description: 'Web platform for complementary remote training in Electrical Engineering, Industrial Electronics, and Automation',
    path: "/virtyremlab",
  },

];





export default function Proyectos() {
  return <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Projects
            </Typography>
  
        </Box>

    <CardView cards={proyectos}/>
    
    </Container>
    
}
