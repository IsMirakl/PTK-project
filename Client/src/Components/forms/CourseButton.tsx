interface CourseButtonProps {
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const CourseButton = ({
  type,
  className,
  disabled = false,
  isLoading = false,
  children,
  onClick,
}: CourseButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading ? 'Создание' : children}
    </button>
  );
};
