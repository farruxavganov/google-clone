import React from 'react';
import ReactDOM from 'react-dom/client';
import StateProvider from './store/StateProvider';
import reducer, {initState} from './store/reducer';
import App from './App';

ReactDOM.createRoot(document.getElementById("root")).render(
	<StateProvider reducer={reducer} initState={initState}>
		<App />
	</StateProvider>
)