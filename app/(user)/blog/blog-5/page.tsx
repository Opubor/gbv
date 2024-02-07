import Navbar from "@/components/Navbar";
import React from "react";

function Page() {
  return (
    <div className="px-2 lg:px-24 xl:px-44 pt-4 lg:pt-24">
      <Navbar />
      {/* ===Heading=== */}
      <div className="px-4 pb-4 pt-20">
        <h2 className="font-extrabold text-lg lg:text-2xl">
          Community Allies:<br></br> How Men Can Stand Against Gender-Based
          Violence
        </h2>
        <p className="text-xs lg:text-sm text-gray-500 lg:font-semibold">
          ~Building Bridges: Connecting Communities to Combat Gender Violence~
        </p>
      </div>

      {/* ===Image=== */}
      <div className="rounded-xl w-full h-96 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/helpinghands.jpg')]"></div>
      {/* ===Introduction=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          Introduction
        </h1>
        <p className="text-sm">
          In the ongoing fight against gender-based violence, the role of male
          allies is pivotal. In this brief blog post, we explore the importance
          of men actively standing against gender-based violence and how their
          involvement can contribute to creating safer and more inclusive
          communities.
        </p>
      </div>
      {/* ===1. Understanding the Impact of Gender-Based Violence=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          1. Understanding the Impact of Gender-Based Violence
        </h1>
        <p className="text-sm">
          Acknowledge the profound impact gender-based violence has on
          individuals and communities. Highlight the need for collective
          awareness to address the root causes and dismantle harmful societal
          norms.
        </p>
      </div>
      {/* ===2. Challenging Stereotypes and Toxic Masculinity=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          2. Challenging Stereotypes and Toxic Masculinity
        </h1>
        <p className="text-sm">
          Encourage men to challenge traditional gender stereotypes and toxic
          masculinity that contribute to a culture of violence. Emphasize the
          importance of promoting healthy masculinity that values respect,
          empathy, and equality.
        </p>
      </div>
      {/* ===3. Listening and Learning=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          3. Listening and Learning
        </h1>
        <p className="text-sm">
          Highlight the significance of active listening and continuous
          learning. Encourage men to engage in conversations about gender-based
          violence, educate themselves on the experiences of survivors, and be
          open to understanding the dynamics at play.
        </p>
      </div>
      {/* ===4. Interrupting Harmful Behavior=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          4. Interrupting Harmful Behavior
        </h1>
        <p className="text-sm">
          Empower men to intervene when witnessing harmful behavior or sexist
          remarks. Discuss strategies for safely and effectively interrupting
          and addressing instances of gender-based violence within their social
          circles.
        </p>
      </div>
      {/* ===5. Amplifying Women's Voices=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          5. Amplifying Women's Voices
        </h1>
        <p className="text-sm">
          Emphasize the importance of amplifying the voices of women and
          non-binary individuals. Encourage men to actively support and uplift
          women's narratives, creating a platform for diverse perspectives and
          experiences.
        </p>
      </div>
      {/* ===6. Advocating for Policy Changes=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          6. Advocating for Policy Changes
        </h1>
        <p className="text-sm">
          Explore the role of men in advocating for policy changes that address
          gender-based violence. Encourage involvement in local and national
          initiatives that focus on legislative measures, support systems, and
          education programs.
        </p>
      </div>
      {/* ===7. Fostering a Culture of Consent=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          7. Fostering a Culture of Consent
        </h1>
        <p className="text-sm">
          Promote the importance of consent in all aspects of life. Discuss how
          men can contribute to fostering a culture that prioritizes clear and
          enthusiastic consent, both in intimate relationships and broader
          social interactions.
        </p>
      </div>
      {/* ===8. Leading by Example in Parenting=== */}
      <div className="py-4">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          8. Leading by Example in Parenting
        </h1>
        <p className="text-sm">
          Address the influence men can have on future generations by modeling
          respectful behavior in parenting. Discuss the significance of teaching
          children about consent, respect, and equality from an early age.
        </p>
      </div>

      {/* ===Conclusion: Allies for a Safer Tomorrow=== */}
      <div className="pt-4 pb-32">
        <h1 className="text-md lg:text-lg text-gray-700 font-bold">
          Conclusion: Allies for a Safer Tomorrow
        </h1>
        <p className="text-sm">
          In conclusion, men play a crucial role as allies in the fight against
          gender-based violence. By actively engaging in conversations,
          challenging harmful norms, and advocating for change, men contribute
          to the creation of safer communities for everyone. Together, let us
          build a future where all individuals can live free from the threat of
          gender-based violence, and where men stand proudly as allies against
          injustice.
        </p>
      </div>
    </div>
  );
}

export default Page;
