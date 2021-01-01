import { newSpecPage } from '@stencil/core/testing';
import { TrafficLight } from '../traffic-light';
import { TrafficLightState } from '../traffic-light-state';

describe('traffic-light', () => {

  it('renders', async () => {
    const page = await newSpecPage({
      components: [TrafficLight],
      html: `<traffic-light></traffic-light>`,
    });
    expect(page.root).toEqualHtml(`
      <traffic-light current-state="off">
        <mock:shadow-root>
          <div class="wrapper">
            <div class="light top-light"></div>
            <div class="light middle-light"></div>
            <div class="bottom-light light"></div>
          </div>
        </mock:shadow-root>
      </traffic-light>
    `);
  });

  it('should turn all the lights off when the current state if off', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.Off;

    expect(trafficLight.isOn(TrafficLightState.Red)).toBe(false);
    expect(trafficLight.isOn(TrafficLightState.Yellow)).toBe(false);
    expect(trafficLight.isOn(TrafficLightState.Green)).toBe(false);
  });

  it('should turn all lights on when the current state is on', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.On;

    expect(trafficLight.isOn(TrafficLightState.Red)).toBe(true);
    expect(trafficLight.isOn(TrafficLightState.Yellow)).toBe(true);
    expect(trafficLight.isOn(TrafficLightState.Green)).toBe(true);
  });

  it('should turn on the red light when the current state is red', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.Red;

    expect(trafficLight.isOn(TrafficLightState.Red)).toBe(true);
    expect(trafficLight.isOn(TrafficLightState.Yellow)).toBe(false);
    expect(trafficLight.isOn(TrafficLightState.Green)).toBe(false);
  });

  it('should turn on the yellow light when the current state is red', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.Yellow;

    expect(trafficLight.isOn(TrafficLightState.Red)).toBe(false);
    expect(trafficLight.isOn(TrafficLightState.Yellow)).toBe(true);
    expect(trafficLight.isOn(TrafficLightState.Green)).toBe(false);
  });

  it('should turn on the green light when the current state is red', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.Green;

    expect(trafficLight.isOn(TrafficLightState.Red)).toBe(false);
    expect(trafficLight.isOn(TrafficLightState.Yellow)).toBe(false);
    expect(trafficLight.isOn(TrafficLightState.Green)).toBe(true);
  });
});
