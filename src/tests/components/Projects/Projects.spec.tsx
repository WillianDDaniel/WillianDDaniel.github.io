import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Projects from '@/components/Projects'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'menu.projects': 'My Projects'
      }
      return translations[key] || key
    }
  })
}))

vi.mock('@/components/Card', () => ({
  default: ({ project }: { project: { id: string; title: string } }) => (
    <div data-testid={`project-card-${project.id}`}>{project.title}</div>
  )
}))

describe('Projects Component', () => {
  const mockProjects: any[] = [
    { id: '1', title: 'Project Alpha' },
    { id: '2', title: 'Project Beta' }
  ]

  it('should render the section with the correct id and title', () => {
    const { container } = render(<Projects projects={[]} />)

    const section = container.querySelector('#projects')
    expect(section).toBeInTheDocument()
    expect(screen.getByText('My Projects')).toBeInTheDocument()
  })

  it('should render project cards based on passed props', () => {
    render(<Projects projects={mockProjects} />)

    expect(screen.getByTestId('project-card-1')).toBeInTheDocument()
    expect(screen.getByText('Project Alpha')).toBeInTheDocument()
    expect(screen.getByTestId('project-card-2')).toBeInTheDocument()
    expect(screen.getByText('Project Beta')).toBeInTheDocument()
  })

  it('should render no cards if projects array is empty', () => {
    render(<Projects projects={[]} />)

    expect(screen.queryByTestId(/project-card-/)).not.toBeInTheDocument()
  })
})
