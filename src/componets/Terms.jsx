import React from 'react'

const Terms = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-10 max-w-5xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-[#D65F00]">Privacy Policy & Terms and Conditions</h1>

      <section>
        <h2 className="text-2xl font-semibold text-[#D65F00] mb-2">Privacy Policy</h2>
        <p className="text-sm leading-7">
          Landsathi.com respects your privacy. We collect personal information to provide real estate services,
          including name, contact details, and preferences. By using our platform, you consent to the collection
          and use of your data to improve user experience and enable communication with relevant third parties
          such as agents, developers, and financial institutions.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-sm">
          <li>Your profile visibility and communication preferences can be managed via your account settings.</li>
          <li>We are not responsible for how third parties use your data once it has been shared with them.</li>
          <li>You should not share sensitive or confidential information publicly on the platform.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#D65F00] mb-2">Terms of Use for Users</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>By using Landsathi.com, you allow us and our partners to contact you even if you are on DND/NCPR.</li>
          <li>Your shared details can be accessed by agents, builders, or service providers you engage with.</li>
          <li>Content shared publicly on your profile or listings may be visible worldwide.</li>
          <li>It is your responsibility to control who can access your data using privacy settings.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#D65F00] mb-2">
          Terms for Builders / Dealers / Banks / Partners
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Comply with all applicable data protection laws.</li>
          <li>Implement security practices to protect shared user data.</li>
          <li>Do not retain or misuse personal data beyond the intended purpose.</li>
          <li>Ensure proper data handling by any third-party processors or sub-contractors.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#D65F00] mb-2">Disputes & Arbitration</h2>
        <p className="text-sm leading-7">
          Any dispute between a user and Landsathi.com shall be resolved by arbitration under the Arbitration &
          Conciliation Act, 1996. The arbitration will take place in Pune, India, and the arbitrator's decision
          shall be final and binding.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#D65F00] mb-2">Governing Law & Jurisdiction</h2>
        <p className="text-sm leading-7">
          By using this platform, you agree that the laws of India govern the use of Landsathi.com and any
          disputes shall fall under the jurisdiction of the courts in Pune, India.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#D65F00] mb-2">Monitoring & Enforcement</h2>
        <p className="text-sm leading-7">
          While Landsathi.com does not routinely monitor user content, we reserve the right to moderate and take
          action when necessary. Illegal activity may be reported to law enforcement, and we will cooperate as
          required.
        </p>
      </section>
    </div>
  )
}

export default Terms