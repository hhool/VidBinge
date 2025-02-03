import {
  makeProviders,
  makeStandardFetcher,
  targets,
} from "@movie-web/providers";

import { isExtensionActiveCached } from "@/backend/extension/messaging";
import {
  makeExtensionFetcher,
  makeLoadBalancedSimpleProxyFetcher,
} from "@/backend/providers/fetchers";
import { getLogger } from "@/utils/logconfig";

export function getProviders() {
  if (isExtensionActiveCached()) {
    getLogger("providers").info("Extension is active");
    const providers = makeProviders({
      fetcher: makeExtensionFetcher(),
      target: targets.BROWSER_EXTENSION,
      consistentIpForRequests: true,
    });

    // if dev mode, log the providers info to the console
    if (process.env.NODE_ENV === "development") {
      // out put the providers info to the console, out more details about the providers
      // loop through the providers and log the metadata of each provider
      // Assuming providers is an array, otherwise convert it to an array if necessary
      const sources = providers?.listSources();
      const embeds = providers?.listEmbeds();
      getLogger("providers").info("getProviders sources:", sources);
      getLogger("providers").info("getProviders embeds:", embeds);
    }
    return providers;
  }

  const providers = makeProviders({
    fetcher: makeStandardFetcher(fetch),
    proxiedFetcher: makeLoadBalancedSimpleProxyFetcher(),
    target: targets.BROWSER,
  });
  if (process.env.NODE_ENV === "development") {
    const sources = providers?.listSources();
    const embeds = providers?.listEmbeds();
    getLogger("providers").info("getProviders sources:", sources);
    getLogger("providers").info("getProviders embeds:", embeds);
  }
  return providers;
}

export function getAllProviders() {
  const providers = makeProviders({
    fetcher: makeStandardFetcher(fetch),
    target: targets.BROWSER_EXTENSION,
    consistentIpForRequests: true,
  });

  if (process.env.NODE_ENV === "development") {
    const sources = providers?.listSources();
    const embeds = providers?.listEmbeds();
    getLogger("providers").info("getProviders sources:", sources);
    getLogger("providers").info("getProviders embeds:", embeds);
  }
  return providers;
}
