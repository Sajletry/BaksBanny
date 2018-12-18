import * as React from 'react';
// import { Test } from './features/testFeature/Test';
import { Provider } from "react-redux";
import { store } from "./store";


class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <div> hi</div>
            </Provider>
        );
    }
}

export default App;
