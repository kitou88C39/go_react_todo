import { useState } from 'react';
import { useForm } from '@mantine/hooks';
import { Button, Modal, Group, TextInput, Textarea } from '@mantine/core';
import { ENDPOINT } from '../App';

function AddTodo() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initalValues: {
      title: '',
      body: '',
    },
  });

  async function createTodo(values: { title: string; body: string }) {
    const updated = await fetch(`${ENDPOINT}/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

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
          <Textarea
            required
            mb={12}
            label='Body'
            placeholder='Tell me more...'
            {...form.getInputProps('body')}
          />

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
