import React from "react";
import CompanionCards from "@/components/CompanionCards";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCards
          id="123"
          name="Neura the Brainly Explorer"
          topic="Neural Network of the brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCards
          id="456"
          name="Countsy the number wizard"
          topic="Derivatives & integrals"
          subject="Math"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCards
          id="789"
          name="Verba the builder"
          topic="Language"
          subject="English Literature"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
