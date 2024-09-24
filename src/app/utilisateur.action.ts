"use server";

import { prisma } from "@/prisma";
import { action } from "@/safe-actions";
import { MailSchema } from "./mail.schema";
import { revalidatePath } from 'next/cache';
import { useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const createUtilisateur = action(
  MailSchema,
  async (input, context) => {
    const user = await prisma.utilisateur.create({
      data: {
        email: input.email
      },
    });
    // revalidatePath("/");
    const queryClient = useQueryClient();
    queryClient.invalidateQueries({ queryKey: ['todos'] })
    return user;
  }
);

export const getEmailsCount = action(
  z.object({}),
  async () => {
    console.log("TEST GUI 3");
    const emailCount = await prisma.utilisateur.count();
    console.log("TEST GUI 4:", emailCount);
    return emailCount;
  }
);