import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'traffic-light',
  styleUrl: 'traffic-light.css',
  shadow: true,
})
export class TrafficLight {

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
