import { DeeverRequest } from "./request";
import getQueryString from "../utils/getQueryString";

export function getTrack(id: number) {
  return DeeverRequest.get(`/tracks/${id}`);
}

export function search(query: { [key: string]: string | number }) {
  const queryString = getQueryString(query);
  return DeeverRequest.get(`/tracks/${queryString}`);
}
