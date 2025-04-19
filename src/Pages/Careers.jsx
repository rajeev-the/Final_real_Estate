import React from 'react'

const Careers = () => {
  return (
    <section className="py-16 px-6 sm:px-12 md:px-20 bg-white text-[#1C2B2D]  mt-[80px]">
    <div className="max-w-7xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1C2B2D]">Careers at <span className="text-[#1C2B2D]">Landsathi</span></h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Join our mission to revolutionize land transactions with trust, transparency, and innovation.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://img.freepik.com/free-photo/bussiness-people-working-team-office_1303-22863.jpg?t=st=1743929864~exp=1743933464~hmac=82caab85e2ab4d5229a2f924336f3acb0e4cc7b114b5206f87f10f394f8b5413&w=1380"
          alt="Team working at Landsathi"
          className="w-full rounded-3xl shadow-xl object-cover h-full"
        />
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#D65F00]">Why Work With Us?</h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-[#D65F00] font-bold text-xl">✔</span>
              <p>Make real impact in transforming real estate through tech and trust.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#D65F00] font-bold text-xl">✔</span>
              <p>Work with passionate, diverse, and experienced professionals.</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#D65F00] font-bold text-xl">✔</span>
              <p>Grow in a fast-paced startup culture where your ideas matter.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-gray-50 p-8 rounded-2xl shadow-md text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#D65F00] mb-4">We’re not hiring right now</h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            But we’re always excited to hear from talented people! Feel free to share your profile with us at <a href="mailto:careers@landsathi.com" className="text-[#4B2E83] font-medium underline">careers@landsathi.com</a> and we’ll get in touch when something opens up.
          </p>
        </section>
      
    </div>
  </section>
  )
}

export default Careers