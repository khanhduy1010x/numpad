import BgNumpad from "./BgNumpad";
import ModelSection from "./ModelSection";

export default function ComponentModel() {
    return (
        <div style={{position: "relative"}}>
            <BgNumpad/>
        <div style={{position: "absolute",  top: 0, left: 0, bottom: 0, right: 0}}>
            <ModelSection/>
        </div>
        </div>
    )
}