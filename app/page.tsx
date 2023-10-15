"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Login from "./login/page";

export default function Home() {
  // const [data, setData] = useState("Too");
  // useEffect(() => {
  //   fetch("http://localhost:5550/url/analytics/iezC1BQqy")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.totalClicks));
  // }, []);

  return (
    <>
      <Login />
      {/* <h1>{data}</h1> */}
    </>
  );
}
