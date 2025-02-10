import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ContactForm from './ContactForm';
import './app.css';
import Container from './Container';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <ContactForm />
    </Container>
  </StrictMode>
);
