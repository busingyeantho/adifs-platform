type InputFieldProps = {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">

      <label className="font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          p-4
          rounded-xl
          border
          border-gray-300
          outline-none
          transition-all
          duration-300
          focus:border-orange-400
          focus:ring-2
          focus:ring-orange-200
        "
      />

    </div>
  );
}