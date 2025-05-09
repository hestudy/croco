import { ComponentProps, ReactNode } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useFieldContext } from "../form-context";
import { isEmpty } from "lodash";

export default function FInput({
  label,
  ...props
}: { label?: ReactNode } & ComponentProps<"input">) {
  const field = useFieldContext<string>();
  const errors = field.state.meta.errors;

  return (
    <div className="grid gap-3">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        {...props}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      {!isEmpty(errors) && (
        <>
          {typeof errors.at(0) === "string" && (
            <p className="text-sm text-red-500">
              {field.state.meta.errors.join(",")}
            </p>
          )}
          {typeof errors.at(0) === "object" && (
            <p className="text-sm text-red-500">
              {field.state.meta.errors.map((d) => d.message).join(",")}
            </p>
          )}
        </>
      )}
    </div>
  );
}
