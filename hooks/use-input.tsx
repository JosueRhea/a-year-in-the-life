import { useState } from "react";

interface InputProps {
  defaultValue?: string;
  limit?: number;
}
export function useInput({ defaultValue = "", limit = 4000 }: InputProps) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value: string) => {
    if (limit && value.length > limit) {
      return;
    }
    setValue(value);
  };
  return {
    value,
    onChange,
  };
}
