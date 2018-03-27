import {Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'push-button-yip-yip-component',
  styleUrl: 'push-button-yip-yip-component.css'
})
export class PushButtonYipYipComponent {

  @Prop()
  buttonIconSrc: string = 'https://wiki.discorddungeons.me/_media/items/banana.png';

  @Prop()
  hiddenContentSrc: string = 'https://i.imgur.com/3TIWj.gif';

  @State()
  buttonPushed: boolean = false;

  render() {
    if (!this.buttonPushed) {
      return (
        <div>
          <button class="btn btn-primary" onClick={this.handleClick.bind(this)}>
            <img class="button-icon" src={this.buttonIconSrc} />
            PUSH BUTTON
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button class="btn btn-danger" onClick={this.handleClick.bind(this)}>
            <img class="button-icon" src={this.buttonIconSrc} />
            YIP YIP YIP YIP YIP YIP !
          </button>
          <p>
            <img src={this.hiddenContentSrc} />
          </p>
        </div>
      );
    }
  }

  handleClick(): void {
    this.buttonPushed = !this.buttonPushed;
  }
}
