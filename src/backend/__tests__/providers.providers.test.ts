
import { getLogger } from "../../utils/logconfig";

/* Root categories can and probably will be defined elsewhere, this is just an example */
const logModel = getLogger("model");

/* Create child categories based on a parent category, effectively allowing you to create a tree of loggers when needed */
const logProvider = logModel.getChildCategory("metadata");

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
    logProvider.info("-----------------");
    logProvider.info("-----------------");
    logProvider.info("-----------------");
    logProvider.info("--------${ps}--------");
    logProvider.info("-----------------");
  });
});

describe("getAllProviders", () => {
  it("should return providers with standard fetcher for browser extension", () => {
    const ap = getAllProviders();
    logProvider.info("-----------------");
    logProvider.info("-----------------");
    logProvider.info("-----------------");
    logProvider.info("--------${ap}--------");
    logProvider.info("-----------------");
  });
});
