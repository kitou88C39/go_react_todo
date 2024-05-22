import { React, useState } from 'react';
import { useForm } from '@mantine/hooks';
import { Button, Modal, Group } from '@mantine/core';

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
      <Modal opened={open} onClose={() => setOpen(false)} title='Create todo'>
        text
      </Modal>
      <Group position='center'>
        <Button fullWidth mb={12} onClick={() => setOpen(true)}>
          ADD TODO
        </Button>
      </Group>
    </>
  );
}

export default AddTodo;
