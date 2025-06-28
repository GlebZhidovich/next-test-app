import { ModalWindow } from '@/features/modal-window';

export default function Home() {
  return (
    <div>
      <ModalWindow renderTriggerButton={() => <ModalWindow.TriggerButton />}>
        Test
      </ModalWindow>
    </div>
  );
}
