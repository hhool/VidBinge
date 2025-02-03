// backend/__tests__/metadata.test.ts

import * as console from "console";

import { describe, vi } from "vitest";

import { searchForMedia } from "../metadata/search";
import { it } from "vitest";

vi.mock("@/backend/extension/messaging", () => ({
  isExtensionActiveCached: vi.fn(),
}));

vi.mock("@/backend/providers/fetchers", () => ({
  makeExtensionFetcher: vi.fn(),
  makeLoadBalancedSimpleProxyFetcher: vi.fn(),
}));

describe("searchForMedia", () => {
  it("should return search results", async () => {
    console.log("-----------------");
    console.log("-----------------");
  });
});
