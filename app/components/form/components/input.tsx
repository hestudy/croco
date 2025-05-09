import { ComponentProps, ReactNode } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useFieldContext } from "../form-context";

export default function FInput({
  label,
  ...props
}: { label?: ReactNode } & ComponentProps<"input">) {
  const field = useFieldContext<string>();
  return (
    <div className="grid gap-3">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        {...props}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      {field.state.meta.errors && (
        <p className="text-sm text-red-500">
          {field.state.meta.errors.join(",")}
        </p>
      )}
    </div>
  );
}
