import { AspectRatio, Box, SimpleGrid } from "@chakra-ui/react";
import GoogleMapReact from 'google-map-react';
import { useState } from "react";

import { useGeolocated } from "react-geolocated";
export default function Mapview() {
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

        return !isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : coords ? (
           
            <SimpleGrid bgColor='teal' p='1rem'  justifyContent='center'>
                         <Box bgColor='white' p='0.5rem' boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' >
                        <iframe  width="750px" height="600px"  src={`https://maps.google.com/maps?q=${coords.latitude.toFixed(2)},${coords.longitude.toFixed(4)}&t=k&z=17&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </Box>
                        <a href="https://www.embedgooglemap.net"></a>
                      
                        { coords.longitude},{coords.latitude}
            </SimpleGrid>
           
        ) : (
            <div>Getting the location data&hellip; </div>
        );
}