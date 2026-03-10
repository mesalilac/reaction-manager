import type { VoidComponent } from 'solid-js';

type Props = {
    ref?: HTMLElement | ((el: HTMLElement) => void);
};

export const Main: VoidComponent<Props> = (props) => {
    return <main ref={props.ref}>hi</main>;
};
