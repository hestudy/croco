import { createFormHook } from "@tanstack/react-form";
import FInput from "./components/input";
import FSubmit from "./components/submit";
import { fieldContext, formContext } from "./form-context";

const { useAppForm } = createFormHook({
  fieldContext: fieldContext,
  formContext: formContext,
  // We'll learn more about these options later
  fieldComponents: {
    FInput,
  },
  formComponents: {
    FSubmit,
  },
});

export { useAppForm };
