import { Box, Toolbar, Typography, Container } from "@mui/material";
import UnderlineChip from "../components/UnderlineChip";
import UnderlineButton from "../components/UnderLineButton";



export default function Blog() {
  
  return <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Blog
              </Typography>
        

          </Box>
  
      
      </Container>
}
