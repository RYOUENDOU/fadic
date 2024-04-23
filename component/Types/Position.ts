// 本当はコンポーネント名をLocationにしたかったが、標準のWebAPIに定義されているため不可能だった
export type Position = {
    coords: {
      latitude: number;
      longitude: number;
      altitude: number | null;
      accuracy: number;
      altitudeAccuracy: number | null;
      heading: number | null;
      speed: number | null;
    };
    timestamp: number;
  }