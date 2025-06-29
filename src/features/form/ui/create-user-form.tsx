'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema, User } from '@/entities/user/model/schema';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { usersRepository } from '@/entities/user/model/users.repository';
import { Label } from '@/shared/ui/label';

export function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  function renderFormError(fieldName: keyof User) {
    return (
      errors[fieldName] && (
        <span className='text-xs text-red-500 italic'>
          {errors[fieldName].message}
        </span>
      )
    );
  }

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={handleSubmit(usersRepository.addUser)}
    >
      <Label htmlFor='name'>User Name:</Label>
      <Input id='name' placeholder='Name' {...register('name')} />
      {renderFormError('name')}
      <Label htmlFor='email'>User Email:</Label>
      <Input
        id='email'
        placeholder='Email'
        type='email'
        {...register('email')}
      />
      {renderFormError('email')}
      <Button>Submit</Button>
    </form>
  );
}
