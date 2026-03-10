import clsx from 'clsx';
import { Toaster } from 'solid-toast';
import { DragOverlay, Main } from '@/components';
import { GlobalDataProvider } from './store';

function App() {
    return (
        <GlobalDataProvider>
            <Toaster
                toastOptions={{
                    position: 'bottom-center',
                    style: {
                        'background-color': '#262626',
                        color: '#a1a1a1',
                    },
                }}
            />
            <DragOverlay />
            <Main />
        </GlobalDataProvider>
    );
}

export default App;
