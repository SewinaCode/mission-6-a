import cpu from "../assets/cpu-icon.png" 
import gpu from "../assets/gpu.png" 
import ram from "../assets/ram-memory-icon1.png"
import screenres from "../assets/screensize.png"
import camera from "../assets/black-camera-icon 1.png" 
import monitor from "../assets/computer-monitor-icon.png"
import wifi from "../assets/wifi.png"
import orangesale from "../assets/sale-tag.png"
import battery from "../assets/battery.png"
import blacktag from "../assets/black-tag.png"
import ssd from "../assets/SSD.png"

import FeatureIcon from "../components/p-feat"



export default function FeatureSpec(features) {

    return (
        < div className="p-features" >
            <FeatureIcon
                image={cpu}
                name="Processor"
                spec="Intel Core i7"
            />
            <FeatureIcon
                image={null}
                name="OS"
                spec="Windows 11 Pro"
            />
            <FeatureIcon
                image={ssd}
                name="SSD"
                spec="1tb"
            />
            <FeatureIcon
                image={ram}
                name="DDR-4"
                spec="124gb"
            />
            <FeatureIcon
                image={screenres}
                name='15.6"'
                spec="inch"
            />
        </div>
    )
}








/*
{
    ssd: "../assets/SSD.png
 return [
        { cpu: "../assets/cpu-icon.png" },
        { gpu: "../assets/gpu.png" },
        { ram: "../assets/ram-memory-icon-1.png" },
        { screenres: "../assets/screensize.png" },
        { camera: "../assets/black-camera-icon 1.png" },
        { monitor: "../assets/computer-monitor-icon.png" },
        { wifi: "../assets/wifi.png" },
        { orangesale: "../assets/sale-tag.png" },
        { battery: "../assets/battery.png" },
        { blacktag: "../assets/black-tag.png" },
        {ssd:"../assets/SSD.png"}
    ]
*/



