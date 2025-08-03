import TitleDescCard from "@/components/global/TitleDesc";
import React from "react";
import { BoostRanking as boost_ranking} from "@/constants"

export default function BoostRanking() {
  return (
    <section className="main-container">
      <h2 className="text-h1-color my-10 text-center font-semibold">
        Boost Your Rankings and Drive Organic Traffic
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {boost_ranking.map((text, index) => (
          <TitleDescCard key={index} {...text} />
        ))}
      </div>
    </section>
  );
}
