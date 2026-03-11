import type { VoidComponent } from 'solid-js';

type Props = {
    ref?: HTMLElement | ((el: HTMLElement) => void);
};

export const Main: VoidComponent<Props> = (props) => {
    return <main class='flex gap-2' ref={props.ref}></main>;
};
