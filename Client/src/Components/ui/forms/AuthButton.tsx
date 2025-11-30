interface AuthButtonProps {
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const AuthButton = ({
  type,
  onClick,
  disabled = false,
  isLoading = false,
  children,
  className = '',
}: AuthButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={isLoading || disabled}
    >
      {isLoading ? 'Загрузка' : children}
    </button>
  );
};
