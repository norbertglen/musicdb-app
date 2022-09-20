import React from "react";
import { getTrack, search } from "./tracks";

describe("test Tracks", () => {
  it("should make a successful call with valid track result", async () => {
    expect.hasAssertions();
    const data = await getTrack(3135556);
    expect(data).toBeDefined();
    expect(data).toEqual(expect.objectContaining({ id: 3135556 }));
  });

  it("should query tracks with search text and return valid tracks", async () => {
    expect.hasAssertions();
    const response = await search({ q: "eminem" });
    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
  });
});
