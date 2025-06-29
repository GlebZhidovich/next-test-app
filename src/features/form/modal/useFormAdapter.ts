import { cloneElement } from 'react';
import { Path, Resolver, useForm } from 'react-hook-form';

type FieldValues = {
  [k: string]: unknown;
};

type FormParams<T extends FieldValues> = {
  resolver: Resolver<T>;
};

type Form<T extends FieldValues> = {
  registerField(name: Path<T>, element: React.ReactElement): React.ReactElement;
  getErrorMessage(name: Path<T>): string | undefined;
  handleSubmit: (cb: (values: T) => void) => (event: React.FormEvent) => void;
};

export const useFormAdapter = <T extends FieldValues>(
  params: FormParams<T>,
): Form<T> => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>(params);

  return {
    registerField(name, element) {
      const clonedElement = cloneElement(element, register(name));
      return clonedElement;
    },
    handleSubmit: (cb) => handleSubmit(cb),
    getErrorMessage(name) {
      if (typeof errors[name]?.message === 'string') {
        return errors[name].message;
      }
    },
  };
};
