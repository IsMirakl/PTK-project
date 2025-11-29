interface CourseFormProps {
  type: string;
  id: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  accept?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  min?: number;
  max?: number;
}

export const CourseFormInput = ({
  type,
  id,
  value,
  onChange,
  className,
  required,
  accept,
  disabled = false,
  isLoading = false,
  onKeyDown,
  placeholder,
  min,
  max,
}: CourseFormProps) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={className}
      required={required}
      accept={accept}
      disabled={isLoading || disabled}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  );
};
