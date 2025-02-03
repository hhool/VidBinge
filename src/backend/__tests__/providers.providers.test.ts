import * as console from "console";

import { describe, it, vi } from "vitest";


import { getAllProviders, getProviders } from "../providers/providers";

vi.mock("@/backend/extension/messaging", () => ({
  isExtensionActiveCached: vi.fn(),
}));

vi.mock("@/backend/providers/fetchers", () => ({
  makeExtensionFetcher: vi.fn(),
  makeLoadBalancedSimpleProxyFetcher: vi.fn(),
}));

describe("getProviders", () => {
  it("should return providers with extension fetcher when extension is active", () => {
    const ps = getProviders();
    // output ps to see what it is
    console.log("-----------------");
    console.log(ps);
    console.log("-----------------");
    console.log(ps?.getMetadata("123"));
    console.log("-----------------");
    console.log(ps?.listSources());
    console.log("-----------------");
    console.log(ps?.listEmbeds());
    console.log("-----------------");
  });
});

describe("getAllProviders", () => {
  it("should return providers with standard fetcher for browser extension", () => {
    const ap = getAllProviders();
    console.log("-----------------");
    console.log(ap);
    console.log("-----------------");
    console.log(ap?.listSources());
    console.log("-----------------");
    console.log(ap?.listEmbeds());
    console.log("-----------------");
  });
});
