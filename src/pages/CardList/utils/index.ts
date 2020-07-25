import queryString from "query-string";

type IParams = {
  term?: string;
  isTag?: boolean;
  userId?: string;
  page?: number;
};

export const convertParamsToQuery = (params: IParams) => {
  return queryString.stringify(params);
};

export const convertQueryToParams = (query: string) => {
  return queryString.parse(query) as IParams;
};
