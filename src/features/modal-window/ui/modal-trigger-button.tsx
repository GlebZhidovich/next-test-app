import { Button } from '@/shared/ui/button';
import { DialogTrigger } from '@/shared/ui/dialog';
import { FC } from 'react';

type ModalTriggerButtonProps = {
  title?: React.ReactNode;
};

export const ModalTriggerButton: FC<ModalTriggerButtonProps> = ({
  title = 'Open Dialog',
}) => {
  return (
    <DialogTrigger asChild>
      <Button variant='outline'>{title}</Button>
    </DialogTrigger>
  );
};
