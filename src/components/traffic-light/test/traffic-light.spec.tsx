import { newSpecPage } from '@stencil/core/testing';
import { TrafficLight } from '../traffic-light';
import { TrafficLightColor } from '../traffic-light-color';
import { TrafficLightMode } from '../traffic-light-mode';
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
            <div class="light red-light"></div>
            <div class="light yellow-light"></div>
            <div class="light green-light"></div>
          </div>
        </mock:shadow-root>
      </traffic-light>
    `);
  });

  function runLightsOffTests(color: TrafficLightColor) {
    it(`should turn the lights off when current state is off and color is ${color}`, () => {
      const trafficLight = new TrafficLight();
      
      trafficLight.currentState = TrafficLightState.Off;
      trafficLight.color = color;
  
      expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(false);
    });
  }

  runLightsOffTests(TrafficLightColor.Red);
  runLightsOffTests(TrafficLightColor.Yellow);
  runLightsOffTests(TrafficLightColor.Green);

  function runAllLightsOnTests(color: TrafficLightColor) {
    it(`should turn all lights on when current state is all-on and color is ${color}`, () => {
      const trafficLight = new TrafficLight();
      
      trafficLight.currentState = TrafficLightState.AllOn;
      trafficLight.color = color;
  
      expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(true);
      expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(true);
      expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(true);
    });
  }

  runAllLightsOnTests(TrafficLightColor.Red);
  runAllLightsOnTests(TrafficLightColor.Yellow);
  runAllLightsOnTests(TrafficLightColor.Green);

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
