import { convertFileSrc } from '@tauri-apps/api/core';
import { createSignal, onMount, Show, type VoidComponent } from 'solid-js';
import type { Audio } from '@/bindings';
import { Button, ButtonIcon, IconMoreVertical, Popover } from '@/components';

type Props = {
    audio: Audio;
    ref?: HTMLDivElement | ((el: HTMLDivElement) => void);
};

export const AudioCard: VoidComponent<Props> = (props) => {
    let popoverMenuRef!: HTMLButtonElement;
    let audioRef!: HTMLAudioElement;

    const [showPopoverMenu, setShowPopoverMenu] = createSignal(false);

    onMount(() => {
        if (audioRef) audioRef.volume = 0.1;
    });

    const handleCopy = () => {};

    const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();

        setShowPopoverMenu(true);
    };

    const handleViewDetails = () => {};
    const handleOpenExternalLink = () => {};
    const handleEditDetails = () => {};
    const handleDelete = () => {};

    return (
        <div
            class='flex h-80 flex-col gap-4 rounded-lg bg-neutral-900 p-4'
            onContextMenu={handleContextMenu}
            ref={props.ref}
            role='none'
        >
            <audio class='w-full focus:outline-none' controls ref={audioRef}>
                <source
                    src={convertFileSrc(props.audio.filePath)}
                    type={props.audio.mimeType}
                />
                <track kind='captions' />
            </audio>
            <div class='flex flex-col gap-4'>
                <div class='flex flex-col gap-2'>
                    <span class='truncate'>{props.audio.title}</span>
                </div>
                <div class='flex flex-row justify-between'>
                    <div class='flex flex-row gap-2'>
                        <Button onClick={handleCopy} variant='primary'>
                            Copy
                        </Button>
                    </div>
                    <div class='flex flex-row gap-2'>
                        <ButtonIcon ref={popoverMenuRef}>
                            <IconMoreVertical />
                        </ButtonIcon>
                        <Popover
                            onOpenChange={setShowPopoverMenu}
                            open={showPopoverMenu()}
                            targetPositionArea='top center'
                            triggerElement={popoverMenuRef}
                        >
                            <div class='rounded-lg bg-neutral-800 p-1 text-white'>
                                <Button
                                    class='w-full text-nowrap capitalize'
                                    onClick={handleViewDetails}
                                    variant='ghost'
                                >
                                    view details
                                </Button>
                                <Show when={props.audio.externalLink}>
                                    <Button
                                        class='w-full text-nowrap capitalize'
                                        onClick={handleOpenExternalLink}
                                        variant='ghost'
                                    >
                                        open external link
                                    </Button>
                                </Show>
                                <Button
                                    class='w-full text-nowrap capitalize'
                                    onClick={handleEditDetails}
                                    variant='ghost'
                                >
                                    edit details
                                </Button>
                                <Button
                                    class='w-full text-nowrap text-red-500 capitalize'
                                    onClick={handleDelete}
                                    variant='ghost'
                                >
                                    delete
                                </Button>
                            </div>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
};
