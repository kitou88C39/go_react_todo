import React from 'react';
import { useState } from 'react';
import { useForm } from '@mantine/hooks';
import { Modal } from '@mantine/core';

function AddTodo() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initalValues: {
      title: '',
      body: '',
    },
  });

  return (
    <>
      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title='Create todo'
      ></Modal>
    </>
  );
}

export default AddTodo;
