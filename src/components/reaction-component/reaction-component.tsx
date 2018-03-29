import {Component, Listen, State} from "@stencil/core";

@Component({
    tag: 'reaction-component'
})
export class ReactionComponent {

    @State()
    reaction: string;

    render() {
        if (this.reaction) {
            return (
                <div>
                    <img src={this.reaction}/>
                </div>
            );
        }
    }

    @Listen('hiddenContentClicked')
    reactToPushButtonYipYip(event: CustomEvent) {
        this.reaction = event.detail;
    }
}