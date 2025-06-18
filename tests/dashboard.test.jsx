
import { render, screen } from '@testing-library/react';
import DashboardPage from '../src/app/dashboard/page.jsx';

describe('Dashboard Page', () => {
  it('renders dashboard heading', () => {
    render(<DashboardPage />);
    expect(screen.getByRole('heading', { name: /AI IT Assistant – Unified Troubleshooting Dashboard/i })).toBeInTheDocument();
  });
});
