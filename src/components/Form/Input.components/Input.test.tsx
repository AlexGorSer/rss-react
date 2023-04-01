import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { CheckboxInput } from './CheckboxInput';
import { DateInput } from './DataInput';
import { FileUpload } from './FileUpload';
import { SelectInput } from './SelectInput';
import { SwitcherInput } from './SwitcherInput';
import { TextInput } from './TextInput';

describe('CheckboxInput', () => {
  it('CheckboxInput is render', () => {
    render(<CheckboxInput checkboxInput={''} />);

    expect(screen.getByText(/I consent to my personal data :/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
  it('CheckboxInput with props', () => {
    render(<CheckboxInput checkboxInput={'test props'} />);

    expect(screen.getByText(/test props/i)).toBeInTheDocument();
  });
});

describe('DateInput', () => {
  it('DateInput is render', () => {
    render(<DateInput dateInput={''} />);

    expect(screen.getByText(/Date:/i)).toBeInTheDocument();
  });
  it('DateInput with props', () => {
    render(<DateInput dateInput={'test props'} />);

    expect(screen.getByText(/test props/i)).toBeInTheDocument();
  });
});

describe('FileUpload', () => {
  it('FileUpload is render', () => {
    render(<FileUpload fileUpload={''} />);

    expect(screen.getByText(/Upload file/i)).toBeInTheDocument();
  });
  it('FileUpload with props', () => {
    render(<FileUpload fileUpload={'test props'} />);

    expect(screen.getByText(/test props/i)).toBeInTheDocument();
  });
});

describe('SelectInput', () => {
  it('SelectInput is render', () => {
    render(<SelectInput selectInput={''} />);

    expect(screen.getByText(/Select country:/i)).toBeInTheDocument();
  });
  it('SelectInput with props', () => {
    render(<SelectInput selectInput={'test props'} />);

    expect(screen.getByText(/test props/i)).toBeInTheDocument();
  });
});

describe('SwitcherInput', () => {
  it('SwitcherInput is render', () => {
    render(<SwitcherInput switcherInput={''} />);

    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
  });
  it('SwitcherInput with props', () => {
    render(<SwitcherInput switcherInput={'test props'} />);

    expect(screen.getByText(/test props/i)).toBeInTheDocument();
  });
});

describe('TextInput', () => {
  it('TextInput is render', () => {
    render(<TextInput textInputMessage={''} />);

    expect(screen.getByText(/Input your name:/i)).toBeInTheDocument();
  });
  it('TextInput with props', () => {
    render(<TextInput textInputMessage={'test props'} />);

    expect(screen.getByText(/test props/i)).toBeInTheDocument();
  });
});
