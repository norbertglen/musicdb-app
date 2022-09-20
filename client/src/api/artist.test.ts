import React from "react";
import { getArtist } from "./artist";

describe("test Artists", () => {
  it("should make a successful call with valid artist result", async () => {
    expect.hasAssertions();
    const data = await getArtist(27);
    expect(data).toBeDefined();
    expect(data).toEqual(expect.objectContaining({ name: "Daft Punk" }));
  });

});
