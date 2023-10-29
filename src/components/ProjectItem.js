import { render, screen } from '@testing-library/react';
import ProjectItem from './ProjectItem';

const handleClick = jest.fn();

const project = {
  name: 'Project 1',
  about: 'This is a project',
  technologies: ['React', 'JavaScript', 'HTML']
};

render(<ProjectItem name={project.name} about={project.about} technologies={project.technologies} handleClick={handleClick} />);

expect(handleClick).not.toHaveBeenCalled();
expect(screen.getByText('Project 1')).toBeInTheDocument();