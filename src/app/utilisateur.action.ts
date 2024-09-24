"use server";

import { prisma } from "@/prisma";
import { action } from "@/safe-actions";
import { MailSchema } from "./mail.schema";
import { z } from "zod";

export const createUtilisateur = action(
  MailSchema,
  async (input, context) => {
    const user = await prisma.utilisateur.create({
      data: {
        email: input.email
      },
    });
    return user;
  }
);

export const getEmailsCount = action(
  z.object({}),
  async () => {
    const emailCount = await prisma.utilisateur.count();
    return emailCount;
  }
);