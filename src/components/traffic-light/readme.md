# traffic-light



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                                                                                                                                                                                                      | Type                                                                           | Default                 |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ----------------------- |
| `color`        | `color`         | The color of the light that should be turned on. This is ignored when `current-state` is off or when in `three-lights` mode and with `current-state` set to `all-on`.                                                                                                                                                                                                                            | `TrafficLightColor.Green \| TrafficLightColor.Red \| TrafficLightColor.Yellow` | `undefined`             |
| `currentState` | `current-state` | Specifies whether lights should be turned on or off. It defaults to `off`.  Setting it to `on` will turn on the light specified in the `color` property.  Setting it to `all-on` will turn on all the lights when `mode` is set to `three-lights`. When in `single-light` mode, setting the `current-state` to `all-on` has the same effect as setting it to `on` (turning on the single light). | `TrafficLightState.AllOn \| TrafficLightState.Off \| TrafficLightState.On`     | `TrafficLightState.Off` |
| `mode`         | `mode`          | Mode in which the component is displayed. It defaults to `three-lights-mode`.                                                                                                                                                                                                                                                                                                                    | `TrafficLightMode.SingleLight \| TrafficLightMode.ThreeLights`                 | `undefined`             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
