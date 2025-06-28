import { Grid,Stack,Typography } from "@mui/material";

export default function WeatherCards({Temperature,Humidity,Condition,WindSpeed}){
    return(
        <Stack direction={'row'} gap={2} className="weather-cards">
        <Grid className="weather-card" width={'400px'} height={'150px'} boxShadow={'3'} justifyContent={'center'} direction='column' display={'flex'} justify-content={'center'}>
            <Typography >Temperature</Typography>
             <Typography>{Temperature}</Typography>
        </Grid>
        <Grid   className="weather-card" width={'400px'} height={'150px'} boxShadow={'3'} justifyContent={'center'} direction='column' display={'flex'} justify-content={'center'}>
            <Typography >Humidity</Typography>
             <Typography>{Humidity}</Typography>
        </Grid>
        <Grid  className="weather-card" width={'400px'} height={'150px'} boxShadow={'3'} justifyContent={'center'} direction='column' display={'flex'} justify-content={'center'}>
            <Typography >Condition</Typography>
             <Typography>{Condition}</Typography>
        </Grid>
        <Grid  className="weather-card" width={'400px'} height={'150px'} boxShadow={'3'} justifyContent={'center'} direction='column' display={'flex'} justify-content={'center'}>
            <Typography >WindSpeed</Typography>
             <Typography>{WindSpeed}</Typography>
        </Grid>
        </Stack>
    )
}