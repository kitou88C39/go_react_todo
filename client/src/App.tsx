import { Box, List, ThemeIcon } from '@mantine/core';
import { CheckCircleFillIcon } from '@primer/octicons-react';
import useSWR from 'swr';
import './App.css';
import AddTodo from './components/AddTodo';

export interface Todo {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

export const ENDPOINT = 'http://localhost:4000';

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data, mutate } = useSWR<Todo[]>('api/todos', fetcher);

  function markTodoAdDone() {
    const updated = await fetch;
  }

  return (
    <Box
      sx={(theme) => ({
        padding: '2rem',
        windth: '100%',
        maxWidth: '40rem',
        margin: '0 auto',
      })}
    >
      <List spacing='xs' size='sm' mb={12} center>
        {data?.map((todo) => {
          return (
            <List.Item key={`todo_list__${todo.id}`}>
              icon=
              {todo.done ? (
                <ThemeIcon color='teal' size={24} radius='xl'>
                  <CheckCircleFillIcon size={20} />
                </ThemeIcon>
              ) : (
                <ThemeIcon color='gray' size={24} radius='xl'>
                  <CheckCircleFillIcon size={20} />
                </ThemeIcon>
              )}
              {todo.title}
            </List.Item>
          );
        })}
      </List>
      <AddTodo mutate={mutate} />
    </Box>
  );
}

export default App;
