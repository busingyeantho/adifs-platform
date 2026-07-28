import { useId } from "react";
// TextAreaField is intentionally a thin wrapper over a native <input>.
// We extend React.TextAreaHTMLAttributes to preserve compatibility with all
type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    error?: string;
  };

export default function TextAreaField({
  //standard input props while still requiring a visible label for clarity.
  label,
  error,
  ...textareaProps
}: TextAreaProps) {
  const generatedId = useId();
  const TextAreaId = textareaProps.id || generatedId;
  
  return (
    <div className="flex flex-col gap-2">
      {/*
        The label is separated from the input to ensure good form structure.
        This also makes it easier to apply visual spacing and consistent styling.
      */}
      <label htmlFor={TextAreaId}>
        {label}
      </label>

      <textarea
      
        {...textareaProps}
          id={TextAreaId}
  className={`
    w-full
    p-4
    rounded-xl
    border
    ${error ? "border-red-500" : "border-gray-300"}
    outline-none
    transition-all
    duration-300
    focus:border-orange-400
    focus:ring-2
    focus:ring-orange-200
    text-black
    ${textareaProps.className || ""}
  `}
  
/>
{error && (
  <p className="text-red-500 text-sm">
    {error}
  </p>
)}
    </div>
  );
}