import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, ElementType } from 'react';

interface PageTitleProps<T extends ElementType> {
  as?: T;
  className?: string;
}

function PageTitle<T extends ElementType = 'p'>({
  as,
  className,
  ...props
}: PageTitleProps<T> & ComponentPropsWithoutRef<T>) {
  const Component = as || 'p';

  return <Component className={cn('text-primary text-3xl', className)} {...props} />;
}
export default PageTitle;
