import { CreateUserForm } from '@/features/form/ui/create-user-form';
import { ModalWindow } from '@/features/modal-window';

const { TriggerButton } = ModalWindow;

export const CreateUserModalWindow = () => {
  return (
    <ModalWindow
      title='Create User'
      renderTriggerButton={() => <TriggerButton />}
    >
      <CreateUserForm />
    </ModalWindow>
  );
};
