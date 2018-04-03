import {Component, Event, EventEmitter, Prop, State, Watch} from '@stencil/core';

@Component({
    tag: 'push-button-yip-yip-component',
    styleUrl: 'push-button-yip-yip-component.css'
})
export class PushButtonYipYipComponent {

    @Prop({
        mutable: true
    })
    buttonIconSrc: string = 'https://wiki.discorddungeons.me/_media/items/banana.png';

    initialButtonIconSrc: string;

    @Prop()
    hiddenContentSrc: string = 'https://i.imgur.com/3TIWj.gif';

    @Prop()
    extraHiddenContentSrc: string = 'https://i.pinimg.com/originals/61/f9/44/61f9445cfc93c83824a67fa9c81055c2.gif';

    @State()
    buttonPushed: boolean = false;

    @Event()
    hiddenContentClicked: EventEmitter;

    componentDidLoad() {
        this.initialButtonIconSrc = this.buttonIconSrc;
    }

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
                    <button
                        class="btn btn-danger"
                        onClick={this.handleClick.bind(this)}>
                        <img
                            class="button-icon"
                            src={this.buttonIconSrc} />
                        YIP YIP YIP YIP YIP YIP !
                    </button>
                    <p>
                        <img
                            src={this.hiddenContentSrc}
                            onClick={this.handleHiddenContentClick.bind(this)}/>
                    </p>
                </div>
            );
        }
    }

    @Watch('buttonPushed')
    buttonHasBeenPushedYipYip(newValue: boolean, /* oldValue: boolean */) {
        if (newValue) {
            this.buttonIconSrc = 'https://jcw87.github.io/c2-sans-fight/icon-256.png';
        } else {
            this.buttonIconSrc = this.initialButtonIconSrc;
        }
    }

    private handleClick(): void {
        this.buttonPushed = !this.buttonPushed;
        this.hiddenContentClicked.emit(null);
    }

    private handleHiddenContentClick(): void {
        this.hiddenContentClicked.emit(this.extraHiddenContentSrc);
    }
}