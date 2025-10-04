import axios from "axios";

export const getLatLngFromAddress = async (address: string) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  const res = await axios.get(url);
  console.log(res, "long and lat res");

  if (res.data.status === "OK") {
    const result = res.data.results[0];
    return {
      formatted: result.formatted_address,
      coords: result.geometry.location,
    };
  } else {
    throw new Error(res.data.error_message || "Failed to get location");
  }
};
