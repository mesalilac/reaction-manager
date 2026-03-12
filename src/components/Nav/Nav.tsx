import { createMemo, Show, type VoidComponent } from 'solid-js';
import {
    Button,
    ButtonIcon,
    IconAddPlus,
    IconSettings,
    Tab,
} from '@/components';
import { useGlobalData } from '@/store';

type Props = {
    ref?: HTMLDivElement | ((el: HTMLDivElement) => void);
};

export const Nav: VoidComponent<Props> = (props) => {
    const globalData = useGlobalData();

    return (
        <div class='flex justify-between'>
            <div class='flex gap-3' ref={props.ref}>
                <Tab
                    count={globalData.resources.images.get()?.length || 0}
                    type='Images'
                />
                <Tab
                    count={globalData.resources.videos.get()?.length || 0}
                    type='Videos'
                />
                <Tab
                    count={globalData.resources.audio.get()?.length || 0}
                    type='Audio'
                />
                <Tab
                    count={globalData.resources.snippets.get()?.length || 0}
                    type='Snippets'
                />
            </div>
            <div class='flex gap-5'>
                <Show when={globalData.store.activeTab === 'Snippets'}>
                    <Button variant='primary'>
                        <IconAddPlus />
                        <span>New</span>
                    </Button>
                </Show>

                <ButtonIcon>
                    <IconSettings />
                </ButtonIcon>
            </div>
        </div>
    );
};
