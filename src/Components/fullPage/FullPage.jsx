import ReactFullpage from "@fullpage/react-fullpage";
import './index.css'
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Project from "../../Pages/Projects/Project";
import Contact from "../../Pages/Contact/Contact";



const anchors = ["Home", "About", "Projects", "Contact"];

const FullPage = () => (
    <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        continuousVertical={true}
        scrollBar={false}
        autoScrolling={true}
        navigat
        parallax={true}
        parallaxKey="reveal"
        sectionsColor={["#202020", "#202020", "#202020", "#202020"]}
        onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
            console.log("render prop change", state, fullpageApi);



            return (
                <div>
                    
                    <div className="section"><Home /></div>
                    
                    <div className="section"><About /></div>
                    
                    <div className="section"><Project /></div>
                    
                    <div className="section"><Contact /></div>
                </div>
            );
        }}
    />
);
export default FullPage;