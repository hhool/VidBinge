// backend/__tests__/metadata.test.ts

import { getLogger } from "../../utils/logconfig";

/* Root categories can and probably will be defined elsewhere, this is just an example */
const logModel = getLogger("model");

/* Create child categories based on a parent category, effectively allowing you to create a tree of loggers when needed */
const logPerson = logModel.getChildCategory("metadata");

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
    logPerson.error("-----------------");
    logPerson.info("-----------------");
  });
});
