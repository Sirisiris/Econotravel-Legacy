import { Box, Container } from "@mui/system";
import CustomSeparator from "./CustomSeparator";
import {Typography, FormControl, Button, Grid } from "@mui/material";



export default function FormularioReserva () {

    return (

<Container style={{marginTop:"6em"}}>

<CustomSeparator/>
<Typography
    variant="body1"
    color= "#2e5137"
    style={{ paddingTop:"3em", fontSize: "1.5rem", fontWeight: "700" }}>
          
    Paseo en bicicleta por el Montseny
</Typography>

<Container style={{display:"flex", flexDirection:"row"}}> 

          <Container className="Form">
          
          
          <Box>

    
             <Typography   variant="p"
                style={{
                  color: "#2e5137",
                  width: "30rem",
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  display: "block",
                  margin: "0.2em"
                }}> Nombre
         
              </Typography> 
             
              <input label="Username" className="input-login" />
                
            <Typography  variant="p" style={{
                    color: "#2e5137",
                    width: "30rem",
                    fontSize: "1.3rem",
                    fontWeight: "300",
                    display: "block",
                    margin: "0.2em"
                }}> Apellidos
            
            </Typography>

        <input label="Username" className="input-login" />
    </Box>

    
       
        
        <Typography variant="p" style={{
                    color: "#2e5137",
                    fontSize: "1.3rem",
                    fontWeight: "300",
                    display: "block",
                    margin: "0.2em"
                }}
              >Dirección 
        </Typography>

        <input style={{width:"30em"}} label="Dirección" className="input-login"  />

 <Box>
                
        
        <Typography variant="p" style={{
                    color: "#2e5137",
                    fontSize: "1.3rem",
                    fontWeight: "300",
                    display: "block",
                    fontStyle: "italic",
                    margin: "0.2em"
                }}
              >Teléfono 
        </Typography>

         <input label="Teléfono" className="input-login" />



    <Typography variant="p" style={{
                  color: "#2e5137",
                  fontSize: "1.3rem",
                  fontWeight: "300",
                  display: "block",
                  fontStyle: "italic",
                  margin: "0.2em"
                }}
              > Experiencias escogidas
    </Typography>
    <input label="Experiencias" className="input-login" />
                


              
</Box>
    
</Container>
 
<Grid container style= {{ dislay:"flex", flexDirection:"column", marginTop: "3em", border: "2px solid #2e5137", width:"20em", height:"18em"}}>
  

        <Typography variant='h2' color=" #2e5137" fontSize="1.5em"fontWeight="700" style={{paddingLeft:"1em",marginTop:"1em"}}>250€</Typography>
        
        
      <FormControl style={{display:"flex", flexDirection:"row", marginTop:"2em"}}>
               
               <Typography 
               variant='h2' 
               color=" #2e5137" 
               fontSize="1.2em" 
               fontWeight="700" 
               style={{paddingLeft:"1.2em"}}>
               Experiencia Reservada: Paseo en bicicleta por el Montseny.
             <Typography variant="h3" fontSize="1em" fontWeight="200">Cantidad:1</Typography>
            </Typography>
               
           </FormControl>
           
        
        <Button style={{ 
              backgroundColor: "#2e5137", marginTop:"2em", borderRadius:"50px", color:"white",textTransform:"none", width:"17em", margin:"auto"}} size="small">
          Pagar
        </Button> 
        
    
          </Grid>



          

     


</Container>
</Container>
    
   ) 

}