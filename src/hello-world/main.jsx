import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld';
import Container from './Container';
import './app.css';
import Todolist from '../todolist/Todolist';
import Table from '../table/Table';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <Todolist />
      <Table />
    </Container>
  </StrictMode>
);
