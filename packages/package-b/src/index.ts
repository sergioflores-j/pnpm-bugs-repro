export type Bar = {
  foo: string;
}

export const fn = async (params: Bar): Promise<void> => {
  return Promise.resolve();
}
