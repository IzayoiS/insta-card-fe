import { z } from "zod";

export const updateLink = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  url: z.string().optional(),
  visible: z.boolean().optional(),
});

export type updateLinkDTO =z.infer<typeof updateLink>
