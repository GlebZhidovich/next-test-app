import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { ModalTriggerButton } from './modal-trigger-button';

type ModalWindowProps = {
  title?: string;
  description?: string;
  renderTriggerButton: () => ReactNode;
} & PropsWithChildren;

interface ModalComposition {
  TriggerButton: typeof ModalTriggerButton;
}

export const ModalWindow: FC<ModalWindowProps> & ModalComposition = ({
  title,
  description,
  children,
  renderTriggerButton,
}) => {
  function renderHeader() {
    const hasTitle = !!title;
    const hasDescription = !!description;

    if (!hasTitle && !hasDescription) {
      return null;
    }

    return (
      <DialogHeader>
        {hasTitle && <DialogTitle>{title}</DialogTitle>}
        {hasDescription && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
    );
  }

  return (
    <Dialog>
      {renderTriggerButton()}
      <DialogContent className='sm:max-w-[425px]'>
        {renderHeader()}
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

ModalWindow.TriggerButton = ModalTriggerButton;
