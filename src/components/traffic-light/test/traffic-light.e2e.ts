import { newE2EPage } from '@stencil/core/testing';

describe('traffic-light', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');
    expect(element).toHaveClass('hydrated');
  });
});
