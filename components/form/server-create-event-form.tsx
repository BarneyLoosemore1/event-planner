"use client";
import { createEvent } from "@/app/events/create/actions";
import { useFormState } from "react-dom";
import { Field } from "./field";
import { SubmitButton } from "./submit-button";

export const ServerCreateEventForm = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [error, formAction] = useFormState(createEvent, null);

  return (
    <form
      action={formAction}
      className="flex w-full max-w-xs flex-col [&>input]:text-black [&>textarea]:text-black"
    >
      <Field label="Title *" name="title" required />
      <Field label="Description *" name="description" required />
      <Field label="Location *" name="location" required />
      <Field
        label="Date *"
        name="date"
        type="date"
        min={currentDate}
        required
      />
      <Field label="Image" name="image" type="file" accept="image/*" />
      {error && <p className="mb-2 text-red-800">{error}</p>}

      <SubmitButton>Create Event</SubmitButton>
    </form>
  );
};
