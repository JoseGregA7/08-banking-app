import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomeComponent from '../../../../src/app/ui/components/WelcomeComponent'; 
import { describe, expect, test, vitest } from 'vitest';

describe('WelcomeComponent', () => {
  test('should render the component with the expected buttons and links', () => {
    const handleLoginClick = vitest.fn();
    const handleSignUpClick = vitest.fn();
    
    const { getByText, getByRole } = render(
      <WelcomeComponent 
        handleLoginClick={handleLoginClick} 
        handleSignUpClick={handleSignUpClick} 
      />
    );
    
    expect(getByText('Ya tienes cuenta?')).toBeInTheDocument();
    expect(getByText('Unete ahora')).toBeInTheDocument();
    expect(getByText('Olvide mi contraseña')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Ingresar' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Regístrate' })).toBeInTheDocument();
  });

  test('should call handleLoginClick when the "Ingresar" button is clicked', () => {
    const handleLoginClick = vitest.fn();
    const handleSignUpClick = vitest.fn();
    
    const { getByRole } = render(
      <WelcomeComponent 
        handleLoginClick={handleLoginClick} 
        handleSignUpClick={handleSignUpClick} 
      />
    );
    
    fireEvent.click(getByRole('button', { name: 'Ingresar' }));
    
    expect(handleLoginClick).toHaveBeenCalledTimes(1);
  });

  test('should call handleSignUpClick when the "Regístrate" button is clicked', () => {
    const handleLoginClick = vitest.fn();
    const handleSignUpClick = vitest.fn();
    
    const { getByRole } = render(
      <WelcomeComponent 
        handleLoginClick={handleLoginClick} 
        handleSignUpClick={handleSignUpClick} 
      />
    );
    
    fireEvent.click(getByRole('button', { name: 'Regístrate' }));
    
    expect(handleSignUpClick).toHaveBeenCalledTimes(1);
  });

  test('should have correct classes applied to elements', () => {
    const handleLoginClick = vitest.fn();
    const handleSignUpClick = vitest.fn();
    
    const { getByRole, getByText } = render(
      <WelcomeComponent 
        handleLoginClick={handleLoginClick} 
        handleSignUpClick={handleSignUpClick} 
      />
    );

    expect(getByRole('button', { name: 'Ingresar' })).toHaveClass('button');
    expect(getByRole('button', { name: 'Regístrate' })).toHaveClass('button');
    expect(getByText('Olvide mi contraseña')).toHaveClass('home__forgot-password');
  });

  test('should match snapshot', () => {
    const handleLoginClick = vitest.fn();
    const handleSignUpClick = vitest.fn();
    
    const { asFragment } = render(
      <WelcomeComponent 
        handleLoginClick={handleLoginClick} 
        handleSignUpClick={handleSignUpClick} 
      />
    );
    
    expect(asFragment()).toMatchSnapshot();
  });
});
