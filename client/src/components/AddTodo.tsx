import { useState } from 'react';
import { useForm } from '@mantine/hooks';
import { Button, Modal, Group, TextInput, Textarea } from '@mantine/core';

function AddTodo() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initalValues: {
      title: '',
      body: '',
    },
  });

  function createTodo() {}

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title='Create todo'>
        <form onSubmit={form.onSubmit(createTodo)}>
          <TextInput
            required
            mb={12}
            label='Todo'
            placeholder='What do you want to do?'
            {...form.getInputProps('title')}
          />
          <Textarea />
          <Button type='submit'>Create todo</Button>
        </form>
      </Modal>
      <Group>
        <Button fullWidth mb={12} onClick={() => setOpen(true)}>
          ADD TODO
        </Button>
      </Group>
    </>
  );
}

export default AddTodo;
