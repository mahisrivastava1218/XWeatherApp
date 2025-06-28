import { Grid,Stack,Typography } from "@mui/material";

export default function WeatherCards({data}){
    console.log(data,'card')
    return(
        <Stack direction={'row'} gap={2} className="weather-cards">
        <Grid className="weather-card" width={'400px'} height={'150px'} boxShadow={'3'} justifyContent={'center'} flexDirection='column' display={'flex'} gap={2} alignItems={'center'}>
            <Typography >Temperature</Typography>
             <Typography>{data.Temperature}°C</Typography>
        </Grid>
        <Grid className="weather-card" width={'400px'} height={'150px'} boxShadow={'3'} justifyContent={'center'} flexDirection='column' display={'flex'} gap={2} alignItems={'center'}>
            <Typography >Humidity</Typography>
             <Typography>{data.Humidity}%</Typography>
        </Grid>
        <Grid className="weather-card" width={'400px'} height={'150px'} boxShadow={'3'} justifyContent={'center'} flexDirection='column' display={'flex'} gap={2} alignItems={'center'}>
            <Typography >Condition</Typography>
             <Typography>{data.Condition}</Typography>
        </Grid>
        <Grid className="weather-card" width={'400px'} height={'150px'} boxShadow={'3'} justifyContent={'center'} flexDirection='column' display={'flex'} gap={2} alignItems={'center'}>
            <Typography >WindSpeed</Typography>
             <Typography>{data.WindSpeed} kph</Typography>
        </Grid>
        </Stack>
    )
}