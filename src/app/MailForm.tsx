"use client";

import { MailSchema, MailType } from "./mail.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { createUtilisateur } from "./utilisateur.action";
import { toast } from "sonner";
import { MdOutlineEmail, MdSend } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";

export type MailFormProps = {
  defaultValues?: MailType;
  productId?: string;
};

export const MailForm = (props: MailFormProps) => {
  const form = useZodForm({
    schema: MailSchema,
    defaultValues: props.defaultValues,
  });
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: MailType) => {
      const { data, serverError } = await createUtilisateur(values)
      if (serverError || !data) {
        toast.error(serverError);
        return;
      }
      router.refresh();
    },
  });

  return (
    <Form
      form={form}
      className="mx-auto"
      onSubmit={async (values) => {
        await mutation.mutateAsync(values);
      }}
    >
      <div className="flex relative mt-2 rounded-md">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MdOutlineEmail />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  className="block w-full rounded-md border-0 py-1.5 pl-9 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="mon@email.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="bg-secondary ml-3"><MdSend className="text-white"/></Button>
      </div>
    </Form>
  );
};
