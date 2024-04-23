import { Position } from "@/component/Types/Position";

function getLocation(): Promise<Position> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function getCurrentLocation(): Promise<Position> {
  try {
    const position = await getLocation();
    return position;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
