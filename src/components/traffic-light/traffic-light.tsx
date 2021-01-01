import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { TrafficLightState } from './traffic-light-state';
import { TrafficLightColor } from './traffic-light-color';

@Component({
  tag: 'traffic-light',
  styleUrl: 'traffic-light.css',
  shadow: true,
})
export class TrafficLight {
  @Prop({ reflect: true }) currentState: TrafficLightState = TrafficLightState.Off;
  @Prop({ reflect: true }) color: TrafficLightColor = TrafficLightColor.All;

  @Watch('currentState')
  validateName(newValue: TrafficLightState) {
    if (!Object.values(TrafficLightState).includes(newValue)) {
      throw new Error('Invalid value for attribute current-state: ' + newValue);
    }
  }

  isOn(whichColor: TrafficLightColor) : boolean {
    return this.currentState == TrafficLightState.On &&
      (this.color === whichColor || this.color === TrafficLightColor.All);
  }

  lightOnClassName: string = "on";

  render() {
    const redOn = this.isOn(TrafficLightColor.Red) ? this.lightOnClassName : '';
    const yellowOn = this.isOn(TrafficLightColor.Yellow) ? this.lightOnClassName : '';
    const greenOn = this.isOn(TrafficLightColor.Green) ? this.lightOnClassName : '';

    return (
      <Host>
        <div class="wrapper">
          <div class={"light top-light " + `${redOn}`}></div>
          <div class={"light middle-light " + `${yellowOn}`}></div>
          <div class={"light bottom-light " + `${greenOn}`}></div>
        </div>
      </Host>
    );
  }
}
