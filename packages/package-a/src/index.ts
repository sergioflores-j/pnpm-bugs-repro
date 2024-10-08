export type Foo = {
  bar: string;
}

export const fn = async (params: Foo): Promise<void> => {
  return Promise.resolve();
}
