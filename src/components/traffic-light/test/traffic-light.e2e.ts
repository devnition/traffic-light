import { newE2EPage } from '@stencil/core/testing';
import { TrafficLightColor } from '../traffic-light-color';
import { TrafficLightMode } from '../traffic-light-mode';
import { TrafficLightState } from '../traffic-light-state';

describe('traffic-light', () => {
  it('should render traffic-light in three-lights mode and currentState off by default', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');
    const lights = await page.findAll("traffic-light >>> .light");

    expect(element).toHaveClass('hydrated');
    expect(element).toHaveAttribute('current-state');
    expect(lights).toHaveLength(3);
  });

  it('should render traffic-light in three-lights mode and currentState off', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');

    element.setProperty('mode', TrafficLightMode.ThreeLights);
    element.setProperty('currentState', TrafficLightState.Off);
    
    await page.waitForChanges();

    const lights = await page.findAll("traffic-light >>> .light");
    const currentStateValue = await element.getProperty('currentState');

    expect(element).toHaveClass('hydrated');
    expect(element).toHaveAttribute('current-state');
    expect(currentStateValue).toBe(TrafficLightState.Off);
    expect(lights).toHaveLength(3);
    
  });

  it('should render traffic-light in single-light mode and currentState off', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');
    element.setProperty('mode', TrafficLightMode.SingleLight);
    element.setProperty('currentState', TrafficLightState.Off);
    
    await page.waitForChanges();

    const lights = await page.findAll("traffic-light >>> .light");

    const currentStateValue = await element.getProperty('currentState');
    const currentModeValue = await element.getProperty('mode');

    expect(element).toHaveClass('hydrated');
    expect(element).toHaveAttribute('current-state');
    expect(currentStateValue).toBe(TrafficLightState.Off);
    expect(element).toHaveAttribute('mode');
    expect(currentModeValue).toBe(TrafficLightMode.SingleLight);
    expect(lights).toHaveLength(1);
  });

  it('should turn on each selected color in three-lights mode', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');
    element.setProperty('mode', TrafficLightMode.ThreeLights);
    element.setProperty('currentState', TrafficLightState.On);

    await page.waitForChanges();

    let lights = await page.findAll("traffic-light >>> .light.on");

    const currentStateValue = await element.getProperty('currentState');
    const currentModeValue = await element.getProperty('mode');

    expect(currentStateValue).toBe(TrafficLightState.On);
    expect(currentModeValue).toBe(TrafficLightMode.ThreeLights);
    expect(lights).toHaveLength(0);
    
    element.setProperty('color', TrafficLightColor.Red);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('red-light');

    element.setProperty('color', TrafficLightColor.Yellow);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('yellow-light');

    element.setProperty('color', TrafficLightColor.Green);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('green-light');
  });

  it('should turn on all colors in three-lights mode when currentState is all-on whether a color has been defined or not', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');
    element.setProperty('mode', TrafficLightMode.ThreeLights);
    element.setProperty('currentState', TrafficLightState.AllOn);

    await page.waitForChanges();

    let lights = await page.findAll("traffic-light >>> .light.on");

    const currentStateValue = await element.getProperty('currentState');
    const currentModeValue = await element.getProperty('mode');

    expect(currentStateValue).toBe(TrafficLightState.AllOn);
    expect(currentModeValue).toBe(TrafficLightMode.ThreeLights);
    expect(lights).toHaveLength(3);

    element.setProperty('color', TrafficLightColor.Red);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(3);

    element.setProperty('color', TrafficLightColor.Yellow);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(3);

    element.setProperty('color', TrafficLightColor.Green);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(3);
  });

  it('should turn on one color at a time in single-light mode when currentState is on', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');
    element.setProperty('mode', TrafficLightMode.SingleLight);
    element.setProperty('currentState', TrafficLightState.On);

    await page.waitForChanges();

    let lights = await page.findAll("traffic-light >>> .light.on");

    const currentStateValue = await element.getProperty('currentState');
    const currentModeValue = await element.getProperty('mode');

    expect(currentStateValue).toBe(TrafficLightState.On);
    expect(currentModeValue).toBe(TrafficLightMode.SingleLight);
    expect(lights).toHaveLength(0);

    element.setProperty('color', TrafficLightColor.Red);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('red-light');

    element.setProperty('color', TrafficLightColor.Yellow);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('yellow-light');

    element.setProperty('color', TrafficLightColor.Green);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('green-light');
  });

  it('should not turn on the light in single-light mode when currentState is off', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');
    element.setProperty('mode', TrafficLightMode.SingleLight);
    element.setProperty('currentState', TrafficLightState.Off);

    await page.waitForChanges();

    let lights = await page.findAll("traffic-light >>> .light.on");

    const currentStateValue = await element.getProperty('currentState');
    const currentModeValue = await element.getProperty('mode');

    expect(currentStateValue).toBe(TrafficLightState.Off);
    expect(currentModeValue).toBe(TrafficLightMode.SingleLight);
    expect(lights).toHaveLength(0);

    element.setProperty('color', TrafficLightColor.Red);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(0);

    element.setProperty('color', TrafficLightColor.Yellow);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(0);

    element.setProperty('color', TrafficLightColor.Green);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(0);
  });

  it('should turn on one color at a time in single-light mode when currentState is all-on', async () => {
    const page = await newE2EPage();
    await page.setContent('<traffic-light></traffic-light>');

    const element = await page.find('traffic-light');
    element.setProperty('mode', TrafficLightMode.SingleLight);
    element.setProperty('currentState', TrafficLightState.AllOn);

    await page.waitForChanges();

    let lights = await page.findAll("traffic-light >>> .light.on");

    const currentStateValue = await element.getProperty('currentState');
    const currentModeValue = await element.getProperty('mode');

    expect(currentStateValue).toBe(TrafficLightState.AllOn);
    expect(currentModeValue).toBe(TrafficLightMode.SingleLight);
    expect(lights).toHaveLength(0);

    element.setProperty('color', TrafficLightColor.Red);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('red-light');

    element.setProperty('color', TrafficLightColor.Yellow);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('yellow-light');

    element.setProperty('color', TrafficLightColor.Green);
    await page.waitForChanges();
    
    lights = await page.findAll("traffic-light >>> .light.on");

    expect(lights).toHaveLength(1);
    expect(lights[0]).toHaveClass('green-light');
  });
});
