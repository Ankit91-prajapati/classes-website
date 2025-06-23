import React from "react";
import { Link } from "react-router-dom";
const Admission = () => {
  return (
    <div className=" text-gray-800 ">
      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-cyan-400 to-blue-500 text-zinc-200 py-16 px-6 text-center font-bold">
        <h1 className="text-4xl font-bold mb-4">Admissions Open</h1>
        <p className="text-lg">Join our  coaching institute for IIT, NEET, and Board Classes (10th, 11th, 12th)</p>
      </section>

      {/* Admission Process */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Admission Process</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>Fill the online admission form or visit the campus.</li>
          <li>Choose the course (IIT/NEET/10th/11th/12th).</li>
          <li>Submit required documents.</li>
          <li>Pay registration/admission fee (online or offline).</li>
          <li>Receive confirmation and batch schedule.</li>
        </ol>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-12 px-6 max-w-5xl mx-auto bg-blue-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Eligibility Criteria</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>IIT-JEE:</strong> Students entering Class 11 or 12 (Science stream with PCM).</li>
          <li><strong>NEET:</strong> Students entering Class 11 or 12 (Science stream with PCB).</li>
          <li><strong>Class 10:</strong> Must have passed Class 9 from a recognized board.</li>
          <li><strong>Class 11:</strong> Must have passed Class 10 with minimum required marks.</li>
          <li><strong>Class 12:</strong> Must have completed Class 11 from a recognized board.</li>
        </ul>
      </section>

      {/* Required Documents */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Required Documents</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Passport-size photographs (2 copies)</li>
          <li>Previous class mark sheet or report card</li>
          <li>Transfer Certificate (TC) if applicable</li>
          <li>Aadhar Card copy</li>
          <li>Migration Certificate (for Class 11 & 12 admissions from another board)</li>
        </ul>
      </section>

      {/* Program-Specific Info */}
      <section className="py-12 px-6 max-w-5xl mx-auto bg-sky-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Program Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">IIT-JEE</h3>
            <p>Two-year or one-year intensive coaching for JEE Mains & Advanced with test series and expert guidance.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">NEET</h3>
            <p>Complete NEET preparation with regular tests, doubt sessions, and NCERT-focused learning.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Class 10th</h3>
            <p>Foundation courses with strong focus on Math, Science, English and exam strategies.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Class 11th & 12th</h3>
            <p>Subject-wise board exam preparation with parallel competitive coaching (optional).</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16  text-purple-700 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
        <p className="mb-6">Enroll now and secure your future with expert guidance and proven results.</p>
        <a href="/apply" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">Apply Now</a>
      </section>

    </div>
  );
};

export default Admission;
