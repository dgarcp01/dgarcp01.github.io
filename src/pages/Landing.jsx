import { Box, Toolbar, Avatar,Typography, Container, Divider } from "@mui/material";
import RRSSIcons from "../components/rrss"

import AboutLabel from "../components/AboutMeLabel";


export default function Landing() {
    return <Container maxWidth="md" sx={{display:'flex'}}>
        <Divider />
        
        <Box sx={{ ml: 0, display:{  lg: "flex" }, flexDirection:"column", alignItems:"left" }}>
        <Box sx={{ ml: 0, display:{  lg: "flex" }, flexDirection:"row", alignItems:"left" }}>
        <Box sx={{ my: 4, alignItems: "left" }}>
            
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Diego García Pérez
            </Typography>
            
            <Typography variant="h7" color = "text.secondary" gutterBottom sx={{ fontWeight: 'bold' }}>
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
        </Box>            
        <Box sx={{ ml: 0, mt:5, display:{  lg: "flex" }}}>
            <AboutLabel />
        </Box>
        
        <Box sx={{ ml: 0, mt:3, display:{  lg: "flex" },flexDirection:"column"} }>
            <Typography variant="normal" color = "text.secondary" gutterBottom sx={{ fontWeight: 'normal' }} paragraph>
                    I am Diego García Pérez, PhD, Assistant Professor at the University of Oviedo, where I focus on Systems Engineering and Automation. My research lies at the intersection of process monitoring, diagnosis, and knowledge discovery, with applications to industrial automation and energy efficiency.
                </Typography>
                <Typography variant="normal" color = "text.secondary" gutterBottom sx={{ fontWeight: 'normal' }}paragraph>
                    I obtained my PhD in 2021 at the University of Oviedo with a dissertation on energy disaggregation techniques for visualization and efficiency improvement in processes and buildings. This work reflects my commitment to advancing interpretable machine learning approaches that enable smarter, more sustainable engineering systems.
                    As a member of the GSDPI research group (Supervision, Diagnosis and Knowledge Discovery in Engineering Processes), and previously of the MIDAS group (Modeling, Inspection, Diagnosis and Automation of Industrial Systems), I actively contribute to projects that address real-world challenges through rigorous research, model development, and intelligent system design.
                    My academic trajectory is defined by a strong interest in methodological innovation, anomaly detection in time series, applied research, and interdisciplinary collaboration, aiming to bridge the gap between fundamental research and industrial application.
            </Typography>
        </Box>
        
        
        
        </Box> {/* Columna */}
        {/* <Divider/>
    
        <Box sx={{ my: 4, alignItems: "center" }}>
            <UnderlineButton
                key = {null}
                label={"Hola"}
                isActive={null}
                to={null}
                
            />
        </Box>
         */}

    </Container>
    
    
    
    
    
}
