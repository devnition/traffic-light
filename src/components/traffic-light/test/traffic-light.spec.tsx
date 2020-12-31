import { newSpecPage } from '@stencil/core/testing';
import { TrafficLight } from '../traffic-light';

describe('traffic-light', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TrafficLight],
      html: `<traffic-light></traffic-light>`,
    });
    expect(page.root).toEqualHtml(`
      <traffic-light>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </traffic-light>
    `);
  });
});
