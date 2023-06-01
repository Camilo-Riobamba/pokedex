import 'normalize.css';
import './App.css';

import SessionProvider from './context/SessionProvider';
import PokemonsProvider from './context/PokemonsProvider';
import Routes from './routes/index';

function App() {
    return (
        <PokemonsProvider>
            <SessionProvider>
                <Routes />
            </SessionProvider>
        </PokemonsProvider>
    );
}

export default App;
