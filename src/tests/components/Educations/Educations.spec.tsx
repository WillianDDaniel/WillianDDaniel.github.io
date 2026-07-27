import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Educations from '@/components/Educations'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, defaultValue?: string) => defaultValue || key
  })
}))

vi.mock('@/components/EducationItem', () => ({
  default: ({ currentEdu }: { currentEdu: { id: string, title?: string } }) => (
    <div data-testid="education-item">{currentEdu?.id || currentEdu?.title}</div>
  )
}))

describe('Educations Component', () => {
  const mockEducations: any[] = [
    { id: 'edu-1', title: 'Graduation' },
    { id: 'edu-2', title: 'Post-Graduation' },
    { id: 'edu-3', title: 'Certification' }
  ]

  it('should return null (empty DOM) if no educations are returned', () => {
    const { container } = render(<Educations educations={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('should render section and single item without navigation if array has length 1', () => {
    render(<Educations educations={[mockEducations[0]]} />)

    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-1')
    expect(screen.getByText('Educação')).toBeInTheDocument()

    expect(screen.queryByLabelText('Próxima formação')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Formação anterior')).not.toBeInTheDocument()
  })

  it('should render navigation controls and cycle through items correctly', () => {
    render(<Educations educations={mockEducations} />)

    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-1')

    const nextBtn = screen.getByLabelText('Próxima formação')
    const prevBtn = screen.getByLabelText('Formação anterior')

    const dotsContainer = nextBtn.previousElementSibling
    expect(dotsContainer?.children).toHaveLength(3)

    fireEvent.click(nextBtn)
    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-2')

    fireEvent.click(nextBtn)
    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-3')

    fireEvent.click(nextBtn)
    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-1')

    fireEvent.click(prevBtn)
    expect(screen.getByTestId('education-item')).toHaveTextContent('edu-3')
  })
})
