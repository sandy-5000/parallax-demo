import './css/Home.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
    return (
        <Parallax pages={2} className='animation top-0 left-0'>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='artBack'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='mountain'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='logoLand'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='jungle1'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='jungle2'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='jungle3'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='jungle4'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='manoMountain'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2.5}>
                <div className='animation-layer parallax' id='jungle5'></div>
            </ParallaxLayer>
        </Parallax>
    )
}
