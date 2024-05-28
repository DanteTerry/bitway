"use client";
import { useEffect, useState } from "react";
import { Map, Marker } from "react-map-gl";
import Spinner from "./Spinner";
import pin from "@/public/assets/pin.svg";
import Image from "next/image";

function PropertyMap({ property }) {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        setLoading(true);
        const address = `${property?.location?.street}, ${property?.location?.city}, ${property?.location?.state}, ${property?.location?.zipCode}`;
        const res = await fetch(
          `https://us1.locationiq.com/v1/search?key=pk.7fe98a59cfa987130ef05645879ead58&q=${address}&format=json`,
        );
        const data = await res.json();
        setLat(data[0]?.lat);
        setLng(data[0]?.lon);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchCoords();
  }, [property]);

  if (loading) return <Spinner />;

  if (!lat || !lng) return <div>Map not available</div>;

  return (
    <Map
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      width="100%"
      height="400px"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      latitude={lat}
      longitude={lng}
      zoom={15}
    >
      <Marker longitude={lng} latitude={lat} anchor="bottom">
        <Image src={pin} alt="location icon" width={40} height={40} />
      </Marker>
    </Map>
  );
}

export default PropertyMap;
