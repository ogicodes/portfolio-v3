'use client'
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Models from "./Models"

export default function FloatingShape() {


    return (
        <div className="h-[70vh] pointer-events-non">
            <Canvas orthographic camera={{ position:[0, 0, 2], zoom: 90 }} shadows>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                <Suspense fallback={null}>
                <Models />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} enableDamping />
            </Canvas>
        </div>
    )
}

