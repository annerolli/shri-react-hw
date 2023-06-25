export type CallApiMethodOptions = {
  url: string;
  method?: 'GET' | 'POST';
  params?: CallApiMethodParams;
};
export type CallApiMethodParams = Record<string, string>;
