/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

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


declare global {
  interface HTMLPushButtonYipYipComponentElement extends HTMLStencilElement {
    'buttonIconSrc': string;
    'extraHiddenContentSrc': string;
    'hiddenContentSrc': string;
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
      'extraHiddenContentSrc'?: string;
      'hiddenContentSrc'?: string;
      'onHiddenContentClicked'?: (event: CustomEvent) => void;
    }
  }
}


declare global {
  interface HTMLReactionComponentElement extends HTMLStencilElement {

  }
  var HTMLReactionComponentElement: {
    prototype: HTMLReactionComponentElement;
    new (): HTMLReactionComponentElement;
  };
  interface HTMLElementTagNameMap {
    'reaction-component': HTMLReactionComponentElement;
  }
  interface ElementTagNameMap {
    'reaction-component': HTMLReactionComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'reaction-component': JSXElements.ReactionComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface ReactionComponentAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
