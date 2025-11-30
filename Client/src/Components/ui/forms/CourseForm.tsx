interface CourseFormProps {
  type?: string;
  id: string;
  value?: string | number;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextareaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
  accept?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onTextareaKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  rows?: number;
  as?: 'input' | 'textarea';
}

export const CourseFormInput = ({
  type = 'text',
  id,
  value,
  onInputChange,
  onTextareaChange,
  className,
  required,
  accept,
  disabled = false,
  isLoading = false,
  onInputKeyDown,
  onTextareaKeyDown,
  placeholder,
  min,
  max,
  rows = 3,
  as = 'input',
}: CourseFormProps) => {
  const commonProps = {
    id,
    value,
    className,
    required,
    disabled: isLoading || disabled,
    placeholder,
  };

  if (as === 'textarea') {
    return (
      <textarea
        {...commonProps}
        onChange={onTextareaChange}
        rows={rows}
        onKeyDown={onTextareaKeyDown}
      />
    );
  }

  return (
    <input
      type={type}
      {...commonProps}
      onChange={onInputChange}
      onKeyDown={onInputKeyDown}
      accept={accept}
      min={min}
      max={max}
    />
  );
};
