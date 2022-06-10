import { Box, Container } from "@mui/system";
import CustomSeparator from "./CustomSeparator";
import {Typography, FormControl, Button, Grid } from "@mui/material";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function FormularioReserva () {

    return (

<Grid container style={{ 
    backgroundColor:"#FBF1E3",
     height:"100vh",
     display:"flex", 
     flexDirection:"column", 
     justifyContent:"center"}}>
         
          {/*Caja Separator, Título, y formulario*/}
      
    <Container >
             <CustomSeparator/>
             <Typography
              variant="body1"
              color= "#2e5137"
              style={{fontSize: "1.5rem", fontWeight: "700", marginTop:"1em" }}>
          
               Paseo en bicicleta por el Montseny
             </Typography>
    
     
          { /*Container formulario y Pagar*/}

       <Container style={{display:"flex", flexDirection:"row"}}> 
         
               
         
               <Box className="Form" style={{width:"80%"}}>
          
          
                  <Grid item style={{display:"flex",marginTop:"3em"}}>

                      {/*Caja Nombre*/}

                     <Box style={{display:"flex", flexDirection:"column", width:"30%"}}>
                         <Typography variant="p"
              
                          style={{
                          color: "#2e5137", 
                          fontSize: "1.3rem",
                          fontWeight: "300", width:"40%" }}>Nombre 
                         </Typography> 
        
                         <input label="Username" className="input-login"/>
                     </Box>
    
                     {/*Caja Apellidos*/}
                     <Box style={{ display:"flex", flexDirection:"column", width:"50%", paddingLeft:"5em"  }}>
    
                         <Typography variant="p" style={{
                          color: "#2e5137",
                          fontSize: "1.3rem",
                          fontWeight: "300",
                          }}> Apellidos
            
                         </Typography>

                         <input label="Username" className="input-login" />
                     </Box>
                   </Grid>
 
 
    
       
                    <Grid item>
                        <Typography variant="p" style={{
                         color: "#2e5137",
                         fontSize: "1.3rem",
                         fontWeight: "300",
                         display: "block",
                         margin: "0.2em"
                         }}>Dirección 
                        </Typography>

                        <input style={{width:"88%"}} label="Dirección" className="input-login"  />
                    </Grid>
   
   
   

                    <Grid item style={{display:"flex", marginTop:"1em"}}>
                
                       {/*Caja Teléfonp*/}
                    
                      <Box style={{ display:"flex", flexDirection:"column", width:"30%"}}>
                        <Typography variant="p" style={{
                         color: "#2e5137",
                         fontSize: "1.3rem",
                         fontWeight: "300",
                         }}>Teléfono 
                        </Typography>
                       
                        <input label="Teléfono" className="input-login"/>
                      </Box>

                      <Box style={{ display:"flex", flexDirection:"column", width:"50%", paddingLeft:"5em"}}>
                        <Typography variant="p" style={{
                         color: "#2e5137",
                         fontSize: "1.3rem",
                         fontWeight: "300",
                         marginLeft:"1em",
                        }}> Experiencias escogidas
                        </Typography>
                       
                        <input label="Experiencias" className="input-login"/>
                      </Box>
                    </Grid>                           


               </Box>

    
                      {/*Container Pagar*/}

            <Container style= {{ display:"flex", flexDirection:"column", border: "2px solid #2e5137", width:"20em", height:"22em", marginTop:"-5em"}}>
  

               <Typography variant='h2' color=" #2e5137" fontSize="1.5em"fontWeight="700" style={{marginTop:"1em"}}>250€</Typography>
              <Typography 
               variant='h2' 
               color=" #2e5137" 
               fontSize="1.2em" 
               fontWeight="700" 
               style={{paddingLeft:"1.2em"}}>
               Experiencia Reservada: Paseo en bicicleta por el Montseny.
              
              <Typography variant="h3" fontSize="1em" fontWeight="200">Cantidad:1
              </Typography>
              </Typography> 
        
            <Button style={{ 
              backgroundColor: "#2e5137", marginTop:"2em", borderRadius:"50px", color:"white",textTransform:"none", width:"17em", margin:"auto"}} size="small">
              Pagar
             </Button> 
    
            <Container>
                  
                  <Box style={{display:"flex", marginTop:"1em"}}>
                    <CheckCircleOutlineIcon/>
                    <Typography variant="h3" fontSize="1em" fontWeight="200">99% de clientes salisfechos</Typography>
                  </Box>
                  <Box style={{display:"flex"}}>
                    <CheckCircleOutlineIcon/>
                    <Typography variant="h3" fontSize="1em" fontWeight="200">Colaboradores de calidad</Typography>
                    </Box>
                  <Box style={{display:"flex"}}> 
                    <CheckCircleOutlineIcon color="#2e5137"/>
                    <Typography variant="h3" fontSize="1em" fontWeight="200">Pago 100% seguro</Typography>
                  </Box>
            </Container>


     </Container>
          
          
         
          </Container>
          </Container>
         </Grid>



    
   ) 

}