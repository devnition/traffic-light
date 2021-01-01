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

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="light top-light on"></div>
          <div class="light middle-light on"></div>
          <div class="light bottom-light on"></div>
        </div>
      </Host>
    );
  }

}
