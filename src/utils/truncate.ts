// https://github.com/ven/ven-earth/blob/master/src/lib/utils.ts
export const truncate = (str: string, n: number) =>
  str.length > n ? str.substr(0, n - 1) + "..." : str;
