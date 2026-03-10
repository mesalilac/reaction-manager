import { Toaster } from 'solid-toast';
import { DragOverlay } from '@/components';
import { GlobalDataProvider } from './store';

function App() {
    return (
        <GlobalDataProvider>
            <main>hi</main>

            <DragOverlay />
            <Toaster
                toastOptions={{
                    position: 'bottom-center',
                }}
            />
        </GlobalDataProvider>
    );
}

export default App;
