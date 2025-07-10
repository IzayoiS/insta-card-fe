export type LinkItem = {
  id: string;
  title: string;
  url: string;
  visible: boolean;
};

export type ResponseLink = {
  message: string;
  data: LinkItem[];
};
