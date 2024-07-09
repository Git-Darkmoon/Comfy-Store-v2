"use client"

import {
  Benefits,
  Hero,
  Slider,
  Testimonials,
  TrendingProducts,
} from "@/components/Home/index"

import { setUser } from "@/lib/features/user/userSlice"
import { useAppDispatch } from "@/lib/hooks"
import { userLoginAPIResponse } from "@/utils/types"
import { getCookie } from "cookies-next"
import { useEffect } from "react"

function Home() {
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
  }, [dispatch])

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
