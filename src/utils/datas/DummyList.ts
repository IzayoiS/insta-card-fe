import type { LinkItem } from "../schemas/DummySchema";

export const initialLinks: LinkItem[] = [
  { id: "1", title: "My Website", url: "https://example.com", active: true },
  { id: "2", title: "Digital CV", url: "https://notion.so/mycv", active: true },
  {
    id: "3",
    title: "Portfolio Design",
    url: "https://canva.com",
    active: true,
  },
  {
    id: "4",
    title: "Github",
    url: "https://github.com/yourname",
    active: true,
  },
  {
    id: "5",
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourname",
    active: true,
  },
];
