/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


import {
  PushButtonYipYipComponent as PushButtonYipYipComponent
} from './components/push-button-yip-yip-component/push-button-yip-yip-component';

declare global {
  interface HTMLPushButtonYipYipComponentElement extends PushButtonYipYipComponent, HTMLStencilElement {
  }
  var HTMLPushButtonYipYipComponentElement: {
    prototype: HTMLPushButtonYipYipComponentElement;
    new (): HTMLPushButtonYipYipComponentElement;
  };
  interface HTMLElementTagNameMap {
    'push-button-yip-yip-component': HTMLPushButtonYipYipComponentElement;
  }
  interface ElementTagNameMap {
    'push-button-yip-yip-component': HTMLPushButtonYipYipComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'push-button-yip-yip-component': JSXElements.PushButtonYipYipComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface PushButtonYipYipComponentAttributes extends HTMLAttributes {
      'buttonIconSrc'?: string;
      'hiddenContentSrc'?: string;
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
