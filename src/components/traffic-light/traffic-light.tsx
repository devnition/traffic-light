import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { TrafficLightState } from './traffic-light-state';
import { TrafficLightColor } from './traffic-light-color';
import { TrafficLightMode } from './traffic-light-mode';

@Component({
  tag: 'traffic-light',
  styleUrl: 'traffic-light.css',
  shadow: true,
})
export class TrafficLight {
  /** Specifies whether lights should be turned on or off. It defaults to `off`.
   * 
   *  Setting it to `on` will turn on the light specified in the `color` property.
   * 
   *  Setting it to `all-on` will turn on all the lights when `mode` is set to `three-lights`.
   *  When in `single-light` mode, setting the `current-state` to `all-on` has the same effect as setting it to `on` (turning on the single light).
   */
  @Prop({ reflect: true }) currentState: TrafficLightState = TrafficLightState.Off;
  
  /** The color of the light that should be turned on. This is ignored when `current-state` is off or when in `three-lights` mode and with `current-state` set to `all-on`. */
  @Prop({ reflect: true }) color: TrafficLightColor;

  /** Mode in which the component is displayed. It defaults to `three-lights-mode`. */
  @Prop({ reflect: true }) mode: TrafficLightMode;   // will default to TrafficLightMode.ThreeLights

  @Watch('currentState')
  validateCustomState(newValue: TrafficLightState) {
    if (!Object.values(TrafficLightState).includes(newValue)) {
      throw new Error('Invalid value for attribute current-state: ' + newValue);
    }
  }

  @Watch('color')
  validateColor(newValue: TrafficLightColor) {
    if (((newValue ?? null) !== null) && !Object.values(TrafficLightColor).includes(newValue)) {
      throw new Error('Invalid value for attribute color: ' + newValue);
    }
  }

  @Watch('mode')
  validateMode(newValue: TrafficLightMode) {
    if (((newValue ?? null) !== null) && !Object.values(TrafficLightMode).includes(newValue)) {
      throw new Error('Invalid value for attribute mode: ' + newValue);
    }
  }

  isOn(whichColor: TrafficLightColor) : boolean {
    const hasDefinedColor = (whichColor ?? null) !== null;
    const askedForDefinedColor = this.color === whichColor;

    switch (this.currentState) {
      case TrafficLightState.On:
        return hasDefinedColor && askedForDefinedColor;
      case TrafficLightState.AllOn:
        if (this.mode === TrafficLightMode.SingleLight) {
          return hasDefinedColor && askedForDefinedColor;
        }
        return true; // Three lights mode
      default:
        return false;
    }
  }

  getClassesForColor(whichColor: TrafficLightColor): string {
    return [
      "light",
      whichColor ? `${whichColor}-light` : "",
      this.isOn(whichColor) ? ` ${this.lightOnClassName}` : "",
    ].join(" ");
  }

  lightOnClassName: string = "on";

  render() {
    return (
      <Host>
        <div class="traffic-light">
          <div class="wrapper">
            {this.mode === TrafficLightMode.SingleLight
              ? <div class={this.getClassesForColor(this.color)}></div>
              : [
                <div class={this.getClassesForColor(TrafficLightColor.Red)}></div>,
                <div class={this.getClassesForColor(TrafficLightColor.Yellow)}></div>,
                <div class={this.getClassesForColor(TrafficLightColor.Green)}></div>
              ]}
          </div>
        </div>
      </Host>
    );
  }
}
