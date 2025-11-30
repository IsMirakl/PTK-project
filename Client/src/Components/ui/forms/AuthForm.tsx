interface AuthInputProps {
  type: string;
  name?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  required?: boolean;
  minLength?: number;
  className?: string;
}

export const AuthInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  minLength,
  className=''
}: AuthInputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
    />
  );
};
