// eslint-disable-next-line import/no-extraneous-dependencies

import { LogLevel } from "typescript-logging";
import { Category, CategoryProvider } from "typescript-logging-category-style";

// Create a provider
const provider = CategoryProvider.createProvider("ExampleProvider");

export function getLogger(name: string): Category {
  return provider.getCategory(name);
}

export function setLogLevel(level: string): void {
  provider.updateRuntimeSettings({
    level: LogLevel[level as keyof typeof LogLevel] as LogLevel,
  });
}
