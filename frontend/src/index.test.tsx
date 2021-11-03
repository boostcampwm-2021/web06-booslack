import Input from '@atoms/Input';
import '@testing-library/jest-dom/';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import 'jest-styled-components';
import React from 'react';

/**
 * @jest-environment node
 */

describe('this is temporal test, do not try like this (use snapshot) />', () => {
  it('renders component correctly', () => {
    const { container } = render(
      <RecoilRoot>
        <Input placeholder="apple" />
      </RecoilRoot>,
    );

    expect(container.querySelector('input').placeholder).toEqual('apple');
  });
});
