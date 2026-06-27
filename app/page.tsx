"use client";

import { useState } from "react";
import Intro from "@/components/Intro";
import Question from "@/components/Question";
import PlaceSelect from "@/components/PlaceSelect";
import Pickup from "@/components/Pickup";
import Result from "@/components/Result";

export type Place =
  | "Night Drive"
  | "Coffee"
  | "Dinner"
  | "City Walk"
  | "You Decide"
  | "";

export type PickupType =
  | "Come Pick Me Up"
  | "I'll Come"
  | "Let's Decide Later"
  | "";

export default function Home() {
  const [step, setStep] = useState(0);

  const [place, setPlace] = useState<Place>("");

  const [pickup, setPickup] = useState<PickupType>("");

  const next = () => setStep((prev) => prev + 1);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Intro */}

      {step === 0 && <Intro onFinish={() => setStep(1)} />}

      {/* Question */}

      {step === 1 && <Question onYes={() => setStep(2)} />}

      {/* Place */}

      {step === 2 && (
        <PlaceSelect
          value={place}
          onSelect={(value: Place) => {
            setPlace(value);
            next();
          }}
        />
      )}

      {/* Pickup */}

      {step === 3 && (
        <Pickup
          value={pickup}
          onSelect={(value: PickupType) => {
            setPickup(value);
            next();
          }}
        />
      )}

      {/* Result */}

      {step === 4 && <Result place={place} pickup={pickup} />}
    </main>
  );
}
