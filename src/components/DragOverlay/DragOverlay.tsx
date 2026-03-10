import { listen, TauriEvent } from '@tauri-apps/api/event';
import clsx from 'clsx';
import type { VoidComponent } from 'solid-js';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { Portal } from 'solid-js/web';

type Props = {
    ref?: HTMLDivElement | ((el: HTMLDivElement) => void);
};

export const DragOverlay: VoidComponent<Props> = (props) => {
    const [isDragActive, setIsDragActive] = createSignal(false);

    onMount(() => {
        const dropListener = listen(TauriEvent.DRAG_DROP, (e) => {
            console.log(e);
            setIsDragActive(false);
        });

        const dragEnterListener = listen(TauriEvent.DRAG_ENTER, (e) => {
            setIsDragActive(true);
            console.log(e);
        });

        const dragLeaveListener = listen(TauriEvent.DRAG_LEAVE, (e) => {
            console.log(e);
            setIsDragActive(false);
        });

        onCleanup(() => {
            dropListener.then((unlisten) => unlisten());
            dragEnterListener.then((unlisten) => unlisten());
            dragLeaveListener.then((unlisten) => unlisten());
        });
    });

    return (
        <Portal>
            <div
                class={clsx(
                    'pointer-events-none fixed inset-0 z-50 flex scale-150 items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-150',
                    { 'pointer-events-none opacity-0': !isDragActive() },
                )}
            >
                <div class='flex flex-col items-center gap-3 rounded-xl border-2 border-white/40 border-dashed bg-white/10 px-13 py-10 text-white shadow-xl'>
                    <p>Drop files here</p>
                </div>
            </div>
        </Portal>
    );
};
