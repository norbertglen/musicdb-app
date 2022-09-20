import React from "react";
import { getAlbum, search } from "./albums";

describe("test Albums", () => {
  it("should make a successful call with valid album result", async () => {
    expect.hasAssertions();
    const data = await getAlbum(302127);
    expect(data).toBeDefined();
    expect(data).toEqual(expect.objectContaining({ id: 302127 }));
  });

  it("should query albums with search text and return valid albums", async () => {
    expect.hasAssertions();
    const response = await search({ q: "eminem" });
    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
  });
});
