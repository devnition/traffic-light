/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TrafficLight {
    }
}
declare global {
    interface HTMLTrafficLightElement extends Components.TrafficLight, HTMLStencilElement {
    }
    var HTMLTrafficLightElement: {
        prototype: HTMLTrafficLightElement;
        new (): HTMLTrafficLightElement;
    };
    interface HTMLElementTagNameMap {
        "traffic-light": HTMLTrafficLightElement;
    }
}
declare namespace LocalJSX {
    interface TrafficLight {
    }
    interface IntrinsicElements {
        "traffic-light": TrafficLight;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "traffic-light": LocalJSX.TrafficLight & JSXBase.HTMLAttributes<HTMLTrafficLightElement>;
        }
    }
}
