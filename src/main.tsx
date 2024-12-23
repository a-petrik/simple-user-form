import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Form from './templates/Form.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Form />
  </StrictMode>,
);
