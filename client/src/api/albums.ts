import { DeeverRequest } from "./request";
import getQueryString from "../utils/getQueryString";

export function getAlbum(id: number) {
  return DeeverRequest.get(`/albums/${id}`);
}

export function search(query: { [key: string]: string | number }) {
  const queryString = getQueryString(query);
  return DeeverRequest.get(`/albums/${queryString}`);
}
