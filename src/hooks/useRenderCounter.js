import { Counter } from "../Counter";

export const renders = new Counter();

export function useRenderCounter(label = "default") {
  renders.count(label);

  return [renders.get(label)];
}
