import * as React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import Test from "./features/testFeature/Test";
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {
    public render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Route path="/" component={Test}/>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
