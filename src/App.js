import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";

function App() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="one" title="One">
                <One/>
            </Tab>
            <Tab eventKey="two" title="two">
                <Two/>
            </Tab>
            <Tab eventKey="three" title="three">
                <Three/>
            </Tab>
            <Tab eventKey="four" title="four">
                <Four/>
            </Tab>
            <Tab eventKey="five" title="five">
                <Five/>
            </Tab>

        </Tabs>
    );
}

export default App;