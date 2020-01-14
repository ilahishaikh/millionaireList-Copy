import moment from "moment";

const padZero = num => ("0" + num).slice(-2);

export const asyncActionType = type => ({
  REQUEST: `${type}_REQUEST`,
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`
});

export const resetTimeToZero = d => new Date(d.setHours(0, 0, 0, 0));

export const timestampToDate = d => moment(d).format("MMM Do YYYY");

export const timestampToDate1 = d => moment(d).format("MMM DD YYYY");

export const timestampToTime = d => moment(d).format("hh:mm a");

export const getTime = d => {
  if (!d) return null;
  return d instanceof Date
    ? {
        hours: d.getHours(),
        minutes: d.getMinutes()
      }
    : timestampToTime(d);
};

export const getDate = d =>
  d instanceof Date
    ? {
        date: d.getDate(),
        month: d.getMonth(),
        year: d.getFullYear()
      }
    : timestampToDate(d);

export const getD1 = d =>
    d instanceof Date
        ? {
          date: d.getDate(),
          month: d.getMonth(),
          year: d.getFullYear()
        }
        : timestampToDate1(d);

export const getUtcTime = d => new Date(d.toUTCString()).getTime();

export const getMinDate = (offset = 0) => {
  const localDate = new Date();
  const localOffset = localDate.getTimezoneOffset();
  const effectiveOffset = localOffset + offset;
  const convertedDate = new Date(
    localDate.getTime() + effectiveOffset * 60 * 1000
  );
  return resetTimeToZero(convertedDate);
};

export const isDateSame = (d1, d2) => {
  if (!d1 instanceof Date) {
    d1 = getDate(d1);
  }
  if (!d2 instanceof Date) {
    d2 = getDate(d2);
  }
 // console.log("isDateSame", d1, d2);
  return resetTimeToZero(d1).getTime() === resetTimeToZero(d2).getTime();
};

export const createEventId = (placeId, d) => {
  if (d instanceof Date) {
    d = getDate(d);
  }

  return `${placeId}${d.year}${padZero(d.month)}${padZero(d.date)}`;
};

const degreesToRadians = degrees => (degrees * Math.PI) / 180;

export const distanceFromMe = (coords1, coords2) => {
  let earthRadiusKm = 6371;

  let dLat = degreesToRadians(coords2.lat - coords1.lat);
  let dLon = degreesToRadians(coords2.lng - coords1.lng);
  let lat1 = degreesToRadians(coords1.lat);
  let lat2 = degreesToRadians(coords2.lat);

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
};
