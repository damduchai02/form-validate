import { Button } from './ui/button';

type Variant = 'default' | 'destructive' | 'outline';
type Size = 'default' | 'lg' | 'sm' | 'icon';

type CustomButtonProps = {
  size?: Size;
  variant: Variant;
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
};

function CustomButton(props: CustomButtonProps) {
  const { size, variant, onClick, className, children } = props;
  return (
    <Button
      type='button'
      size={size}
      variant={variant}
      className={`capitalize ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
