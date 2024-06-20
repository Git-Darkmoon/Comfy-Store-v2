"use client"

import Benefits from "@/components/Home/Benefits"
import Hero from "@/components/Home/Hero"
import Slider from "@/components/Home/Slider"
import Testimonials from "@/components/Home/Testimonials"
import TrendingProducts from "@/components/Home/TrendingProducts"
import { useAppSelector } from "@/lib/hooks"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Home() {
  const router = useRouter()
  const { user } = useAppSelector((state) => state.user)

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
    router.push("/")
  }, [user, router])

  return (
    <>
      <Hero />
      <Slider />
      <TrendingProducts />
      <Testimonials />
      <Benefits />
    </>
  )
}
export default Home
