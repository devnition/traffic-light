import { newSpecPage } from '@stencil/core/testing';
import { TrafficLight } from '../traffic-light';
import { TrafficLightColor } from '../traffic-light-color';
import { TrafficLightState } from '../traffic-light-state';

describe('traffic-light', () => {

  it('renders', async () => {
    const page = await newSpecPage({
      components: [TrafficLight],
      html: `<traffic-light></traffic-light>`,
    });
    expect(page.root).toEqualHtml(`
      <traffic-light current-state="off" color="all">
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

    expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(false);
    expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(false);
    expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(false);
  });

  it('should turn all lights on when the current state is on and the color is all', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.On;
    trafficLight.color = TrafficLightColor.All;

    expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(true);
    expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(true);
    expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(true);
  });

  it('should turn on the red light when the color is red and the state is on', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.On;
    trafficLight.color = TrafficLightColor.Red;

    expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(true);
    expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(false);
    expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(false);
  });

  it('should turn on the yellow light when the color is yellow and the state is on', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.On;
    trafficLight.color = TrafficLightColor.Yellow;

    expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(false);
    expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(true);
    expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(false);
  });

  it('should turn on the green light when the color is green and the state is on', () => {
    const trafficLight = new TrafficLight();
    
    trafficLight.currentState = TrafficLightState.On;
    trafficLight.color = TrafficLightColor.Green;

    expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(false);
    expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(false);
    expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(true);
  });
});
