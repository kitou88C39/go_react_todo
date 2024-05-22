import { Box } from '@mantine/core';
import useSWR from 'swr';
import './App.css';

const fetcher = (url: string) => fetch(url).then((r) => r.json());
function App() {
  return <Box></Box>;
}

export default App;
