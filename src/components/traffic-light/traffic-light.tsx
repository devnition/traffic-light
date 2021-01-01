import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { TrafficLightState } from './traffic-light-state';

@Component({
  tag: 'traffic-light',
  styleUrl: 'traffic-light.css',
  shadow: true,
})
export class TrafficLight {
  @Prop({ reflect: true }) currentState: TrafficLightState = TrafficLightState.Off;

  @Watch('currentState')
  validateName(newValue: TrafficLightState) {
    if (!Object.values(TrafficLightState).includes(newValue)) {
      throw new Error('Invalid value for attribute current-state: ' + newValue);
    }
  }

  isOn(whichState: TrafficLightState) : boolean {
    return this.currentState === whichState || this.currentState === TrafficLightState.On;
  }

  lightOnClassName = "on";

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class={"light top-light " + `${this.isOn(TrafficLightState.Red) ? this.lightOnClassName : ''}`}></div>
          <div class={"light middle-light " + `${this.isOn(TrafficLightState.Yellow) ? this.lightOnClassName : ''}`}></div>
          <div class={"light bottom-light " + `${this.isOn(TrafficLightState.Green) ? this.lightOnClassName : ''}`}></div>
        </div>
      </Host>
    );
  }
}
