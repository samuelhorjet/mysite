"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Blockchain?",
    answer:
      "Blockchain is a decentralized, immutable, and shared digital ledger (or record of data) that is stored on multiple computers (or nodes) across the globe. It allows data to be recorded chronologically in a way that cannot be altered or deleted without consensus from the network participants.",
  },
  {
    question: "How is Blockchain Secure?",
    answer:
      "Blockchain security comes from its decentralized nature, cryptographic techniques, consensus mechanisms, and immutability. Each block contains a cryptographic hash of the previous block, creating a chain that cannot be altered without changing all subsequent blocks and gaining network consensus.",
  },
  {
    question: "What is the Difference Between Public and Private Blockchains?",
    answer:
      "Public blockchains are open to anyone, fully decentralized, and transparent. Private blockchains restrict access to approved participants, offer greater privacy and control, and are often used by enterprises for specific business applications.",
  },
  {
    question: "How Can I Get Started with Blockchain?",
    answer:
      "To get started with blockchain, learn the fundamentals through online courses, experiment with cryptocurrency wallets, explore development platforms like Ethereum, join blockchain communities, and consider building simple applications to gain hands-on experience.",
  },
  {
    question: "What Are Some Real-World Use Cases of Blockchain?",
    answer:
      "Blockchain has numerous applications beyond cryptocurrency, including supply chain management, digital identity verification, voting systems, healthcare record management, intellectual property protection, cross-border payments, and smart contracts for automated agreements.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="gradient1-bg py-20">
      <div className="md:px-8 px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-medium md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto text-xl text-gray-400">
            Find answers to the most common questions
          </p>
        </div>

        <div className="mx-auto max-w-8xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg1 transition duration-300"
            >
              <button
                className="flex w-full items-center justify-between p-8 text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-3xl font-medium">{faq.question}</h3>
                <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#00082d]">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary" />
                  )}
                </div>
              </button>
              <div
                className={`px-4 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100 pb-4"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-400 text-xl w-300 font-semibold pl-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
