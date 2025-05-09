import { LoaderCircleIcon } from "lucide-react";
import { ComponentProps } from "react";
import { Button } from "~/components/ui/button";
import { useFormContext } from "../form-context";

export default function FSubmit(props: ComponentProps<"button">) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          {...props}
          disabled={isSubmitting || props.disabled}
          onClick={() => form.handleSubmit()}
        >
          {isSubmitting && (
            <LoaderCircleIcon
              className="-ms-1 animate-spin"
              size={16}
              aria-hidden="true"
            />
          )}
          {props.children}
        </Button>
      )}
    </form.Subscribe>
  );
}
