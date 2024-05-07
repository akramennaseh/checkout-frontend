"use client"
import TawkTo from "next-tawkto";
import { useEffect } from "react";
import React from 'react';


export default function Tawk() {
  useEffect(() => {
    const tawk = new TawkTo("663a16039a809f19fb2e4ac1", "1ht9ebvps");
    tawk.hideWidget();
  }, []);
  return (
    <div></div>
  )
}