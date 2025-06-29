'use client';

import { createUserSchema, User } from '@/entities/user/model/schema';
import { usersRepository } from '@/entities/user/model/users.repository';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormAdapter } from '../modal/useFormAdapter';

export function CreateUserForm() {
  const { registerField, handleSubmit, getErrorMessage } = useFormAdapter({
    resolver: zodResolver(createUserSchema),
  });

  function renderFormError(fieldName: keyof User) {
    const message = getErrorMessage(fieldName);

    return (
      message && <span className='text-xs text-red-500 italic'>{message}</span>
    );
  }

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={handleSubmit(usersRepository.addUser)}
    >
      <Label htmlFor='name'>User Name:</Label>
      {registerField('name', <Input id='name' placeholder='Name' />)}
      {renderFormError('name')}
      <Label htmlFor='email'>User Email:</Label>
      {registerField(
        'email',
        <Input id='email' placeholder='Email' type='email' />,
      )}
      {renderFormError('email')}
      <Button>Submit</Button>
    </form>
  );
}
