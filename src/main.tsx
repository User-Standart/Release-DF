import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { getLandingPage } from './application';
import { StaticLandingContentRepository } from './infrastructure/repositories/StaticLandingContentRepository';
import { App } from './presentation/App';
import './presentation/styles/index.css';

// Composition root: the only place that knows which concrete adapters are used.
const page = getLandingPage(new StaticLandingContentRepository());

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Missing #root element in index.html');

createRoot(rootElement).render(
  <StrictMode>
    <App page={page} />
  </StrictMode>,
);
