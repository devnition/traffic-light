import { TrafficLight } from '../traffic-light';
import { TrafficLightColor } from '../traffic-light-color';
import { TrafficLightMode } from '../traffic-light-mode';
import { TrafficLightState } from '../traffic-light-state';

describe('traffic-light', () => {

  function runLightsOffTests(color: TrafficLightColor, mode: TrafficLightMode) {
    it(`should turn the lights off in ${mode} mode when current state is off and color is ${color}`, () => {
      const trafficLight = new TrafficLight();
      
      trafficLight.mode = mode;
      trafficLight.currentState = TrafficLightState.Off;
      trafficLight.color = color;
  
      expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(false);
    });
  }

  runLightsOffTests(TrafficLightColor.Red, TrafficLightMode.ThreeLights);
  runLightsOffTests(TrafficLightColor.Yellow, TrafficLightMode.ThreeLights);
  runLightsOffTests(TrafficLightColor.Green, TrafficLightMode.ThreeLights);
  runLightsOffTests(TrafficLightColor.Red, TrafficLightMode.SingleLight);
  runLightsOffTests(TrafficLightColor.Yellow, TrafficLightMode.SingleLight);
  runLightsOffTests(TrafficLightColor.Green, TrafficLightMode.SingleLight);

  function runLightsOffWithoutColorTests(mode: TrafficLightMode, currentState: TrafficLightState) {
    it(`should turn the lights off in ${mode} mode when current state is ${currentState} and no color is specified`, () => {
      const trafficLight = new TrafficLight();
      
      trafficLight.mode = mode;
      trafficLight.currentState = currentState;
  
      expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(false);
    });
  }

  runLightsOffWithoutColorTests(TrafficLightMode.SingleLight, TrafficLightState.AllOn);
  runLightsOffWithoutColorTests(TrafficLightMode.SingleLight, TrafficLightState.On);
  runLightsOffWithoutColorTests(TrafficLightMode.SingleLight, TrafficLightState.Off);
  runLightsOffWithoutColorTests(TrafficLightMode.ThreeLights, TrafficLightState.On);
  runLightsOffWithoutColorTests(TrafficLightMode.ThreeLights, TrafficLightState.Off);

  function runRedLightTests(currentState: TrafficLightState, mode: TrafficLightMode) {
    it(`should turn on the red light in ${mode} mode when the color is red and the state is ${currentState}`, () => {
      const trafficLight = new TrafficLight();
      
      trafficLight.mode = mode;
      trafficLight.currentState = currentState;
      trafficLight.color = TrafficLightColor.Red;
  
      expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(true);
      expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(false);
    });
  }

  runRedLightTests(TrafficLightState.On, TrafficLightMode.SingleLight);
  runRedLightTests(TrafficLightState.On, TrafficLightMode.ThreeLights);

  function runYellowLightTests(currentState: TrafficLightState, mode: TrafficLightMode) {
    it(`should turn on the yellow light in ${mode} mode when the color is yellow and the state is ${currentState}`, () => {
      const trafficLight = new TrafficLight();
      
      trafficLight.mode = mode;
      trafficLight.currentState = currentState;
      trafficLight.color = TrafficLightColor.Yellow;
  
      expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(true);
      expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(false);
    });
  }

  runYellowLightTests(TrafficLightState.On, TrafficLightMode.SingleLight);
  runYellowLightTests(TrafficLightState.On, TrafficLightMode.ThreeLights);

  function runGreenLightTests(currentState: TrafficLightState, mode: TrafficLightMode) {
    it(`should turn on the green light in ${mode} mode when the color is green and the state is ${currentState}`, () => {
      const trafficLight = new TrafficLight();
      
      trafficLight.mode = mode;
      trafficLight.currentState = currentState;
      trafficLight.color = TrafficLightColor.Green;
  
      expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(false);
      expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(true);
    });
  }

  runGreenLightTests(TrafficLightState.On, TrafficLightMode.SingleLight);
  runGreenLightTests(TrafficLightState.On, TrafficLightMode.ThreeLights);

  function runThreeLightsModeAllLightsOnTests(color: TrafficLightColor) {
    it(`should turn all lights on in three lights mode when current state is all-on and color is ${color}`, () => {
      const trafficLight = new TrafficLight();
      
      trafficLight.mode = TrafficLightMode.ThreeLights;
      trafficLight.currentState = TrafficLightState.AllOn;
      trafficLight.color = color;
  
      expect(trafficLight.isOn(TrafficLightColor.Red)).toBe(true);
      expect(trafficLight.isOn(TrafficLightColor.Yellow)).toBe(true);
      expect(trafficLight.isOn(TrafficLightColor.Green)).toBe(true);
    });
  }

  runThreeLightsModeAllLightsOnTests(TrafficLightColor.Red);
  runThreeLightsModeAllLightsOnTests(TrafficLightColor.Yellow);
  runThreeLightsModeAllLightsOnTests(TrafficLightColor.Green);
});
