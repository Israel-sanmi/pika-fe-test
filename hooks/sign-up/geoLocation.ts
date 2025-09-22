"use client";
import { useEffect, useState } from "react";

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
  error?: string;
}

export const useGeolocation = () => {
  const [coords, setCoords] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setCoords({
        latitude: null,
        longitude: null,
        error: "Geolocation not supported",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setCoords({ latitude: null, longitude: null, error: error.message });
      }
    );
  }, []);

  return coords;
};
