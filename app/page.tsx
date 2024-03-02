import { ModeToggle } from "@/components/Toggle";
import CheckoutPage from "@/components/step1";

import CounterInput from "@/components/counterInput";
import Image from "next/image";
import Step2 from "@/components/step2";
import Step3 from "@/components/step3";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <a href="/checkout"><Button >checkout</Button></a>
    
  );
}