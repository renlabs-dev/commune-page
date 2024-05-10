'use client'

import * as THREE from 'three'
// import * as dat from 'lil-gui'

import { useEffect, useRef } from 'react'

import vertexShader from '!!raw-loader!./shaders/vertex.glsl'
import fragmentShader from '!!raw-loader!./shaders/fragment.glsl'

export default function Animation() {
  const containerRef = useRef(null)

  useEffect(() => {
    const AnimatedTorus = containerRef.current
    const canvas = document.createElement('canvas')
    canvas.classList.add('webgl')
    AnimatedTorus.appendChild(canvas)

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const clock = new THREE.Clock()
    const debugObject = {
      depthColor: '#59931f',
      surfaceColor: '#f0440f',
      wireframe: true,
    }

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      90,
      sizes.width / sizes.height,
      0.1,
      100
    )
    camera.position.set(0, 1.5, 20)
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const tubeRadius = 3
    const torusRadius = 8
    const torus = new THREE.TorusGeometry(torusRadius, tubeRadius, 48, 100)

    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      wireframe: debugObject.wireframe,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,

      uniforms: {
        uTime: { value: 0 },
        uWeight: { value: 0 },
        uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
        uSurfaceColor: {
          value: new THREE.Color(debugObject.surfaceColor),
        },
        uTubeRadius: { value: tubeRadius },
        uTorusRadius: { value: torusRadius },
      },
    })

    torus.computeVertexNormals()
    const animatedObject = new THREE.Mesh(torus, material)

    animatedObject.rotation.x = -Math.PI * 0.3
    scene.add(animatedObject)

    // const gui = new dat.GUI({ width: 340 })
    // gui
    //   .addColor(debugObject, 'depthColor')
    //   .name('depthColor')
    //   .onChange(() => {
    //     animatedObject.material.uniforms.uDepthColor.value.set(
    //       new THREE.Color(debugObject.depthColor)
    //     )
    //   })
    // gui
    //   .addColor(debugObject, 'surfaceColor')
    //   .name('surfaceColor')
    //   .onChange(() => {
    //     animatedObject.material.uniforms.uSurfaceColor.value.set(
    //       new THREE.Color(debugObject.surfaceColor)
    //     )
    //   })
    // gui
    //   .add(debugObject, 'wireframe')
    //   .name('wireframe')
    //   .onChange(() => {
    //     animatedObject.material.wireframe = debugObject.wireframe
    //   })

    const handleResize = () => {
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    const tick = () => {
      const elapsedTime = clock.getElapsedTime() * 0.25

      animatedObject.material.uniforms.uTime.value = elapsedTime
      animatedObject.material.uniforms.uWeight.value =
        0.25 * Math.sin(elapsedTime) + 1.2

      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    window.addEventListener('resize', handleResize)
    tick()

    return () => {
      window.removeEventListener('resize', handleResize)

      // gui.destroy()
    }
  }, [])

  return <div ref={containerRef} className='relative top-0' />
}
