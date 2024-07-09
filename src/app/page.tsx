"use client"

import Benefits from "@/components/Home/Benefits"
import Hero from "@/components/Home/Hero"
import Slider from "@/components/Home/Slider"
import Testimonials from "@/components/Home/Testimonials"
import TrendingProducts from "@/components/Home/TrendingProducts"
import { setUser } from "@/lib/features/user/userSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { userLoginAPIResponse } from "@/utils/types"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Home() {
  const router = useRouter()
  const { user } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const getFromLocalStorage = (): userLoginAPIResponse | null => {
    const user = getCookie("user")
    if (user) {
      return JSON.parse(user)
    }
    return null
  }

  useEffect(() => {
    dispatch(setUser(getFromLocalStorage()))
  }, [])

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
