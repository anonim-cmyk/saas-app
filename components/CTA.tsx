import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Building and personalize learning companion
      </h2>
      <p>
        Pick a name, subject, voice & personality - and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src={"images/cta.svg"} alt="cta" width={350} height={230} />
      <button className="btn-primary">
        <Image src={"icons/plus.svg"} width={14} height={14} alt="" />
        <Link href={"companions/new"}>
          <p>Build a new companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
