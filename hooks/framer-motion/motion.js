import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const useMotion = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  const boxVariants = {
    hidden: { scale: 0.4 },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  }

  const slideVariants = {
    hidden: { x: '-100vw' },
    visible: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  return { boxVariants, ref, controls, slideVariants }
}

export default useMotion
