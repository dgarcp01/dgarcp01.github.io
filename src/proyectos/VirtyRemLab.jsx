import { Box, Typography, Container, Divider } from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import UnderlineButton from '../components/UnderLineButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function VirtyRemLab() {
  return <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              VirtyRemLab project
            </Typography>
        <Box
          component="img"
          src="/virtyremlab_resumen.jpg"  // Cambia esta ruta por la imagen que quieras usar
          alt="VirtyRemLab"
          sx={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: 2,
            my: 3
          }}
        />
          <Divider sx={{ my:2 }} />
          <Typography variant="body1" sx={{ my: 3, ml: {xs:0,sm:0,lg:10},mr:{xs:0,sm:0,lg:5},fontWeight: 'medium' }}>
              In engineering degrees, both simulations and hands-on practice with laboratory equipment, as well as students’ interaction with physical processes and real-world elements, are essential to ensure high-quality training. Not only do they allow students to consolidate theoretical knowledge, but they also help maintain the practical focus of engineering and increase motivation. This need is addressed in these programs through laboratory sessions and classroom practices; however, the limited time allocated to these sessions often restricts the content that instructors can cover and does not always meet the needs of all students. Furthermore, practical training is often hindered by the low ratio of available equipment to the number of students.
              With the goal of enhancing hybrid training in engineering degrees at the University of Oviedo, this project proposes the implementation of a flexible virtual and remote laboratory, accessible online 24/7 via web access, initially focused on control and automation systems, which can be extended to other areas. It will include guided simulation exercises, laboratory experiments, and hardware-in-the-loop practices, and it will integrate methods to extract quality and participation indices.
            </Typography>
  
    <Accordion >
        <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color:"#2F85EE" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
              
        >
          <Typography component="span" variant="h5"  gutterBottom sx={{ color:"#2F85EE", fontWeight: 'medium' }}>Available simulators</Typography>
        </AccordionSummary>
              <AccordionDetails  >
                  <Box maxWidth="md">
                      <UnderlineButton label="Aeropendulum PID" /> <OpenInNewIcon sx={{my:-0.5}} fontSize="3" />
                </Box>
                  
        </AccordionDetails>
        </Accordion>
                    
      </Box>

    </Container>
    
}
