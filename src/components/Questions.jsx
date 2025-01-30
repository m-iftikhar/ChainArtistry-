import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (question) => {
    setOpen(open === question ? null : question);
  };

  const faqs = [
    {
      question: "What is an NFT?",
      answer: "An NFT (Non-Fungible Token) is a unique digital asset stored on the blockchain.",
    },
    {
      question: "How do I buy an NFT?",
      answer: "Set up a crypto wallet, connect to an NFT marketplace, and purchase using cryptocurrency.",
    },
    {
      question: "How to buy  an NFT?",
      answer: "An NFT (Non-Fungible Token) is a unique digital asset stored on the blockchain.",
    },
    {
      question: "which is website of  an NFT?",
      answer: "Set up a crypto wallet, connect to an NFT marketplace, and purchase using cryptocurrency.",
    },
  ];

  return (
    <div className="text-white flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold text-black font-apex mb-6 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        {faqs.map((faq) => (
          <div key={faq.question} className="border border-gray-300 rounded-lg mb-4 overflow-hidden">
            <div
              className="flex justify-between md:[w-1037px] md:h-[106px] text-black items-center p-4 cursor-pointer bg-white"
              onClick={() => toggle(faq.question)}
            >
              <h2 className="text-lg font-bold">{faq.question}</h2>
              <span className="text-xl">{open === faq.question ? "-" : "+"}</span>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: open === faq.question ? "auto" : 0, opacity: open === faq.question ? 1 : 0 }}
              className="overflow-hidden bg-gray-100 "
            >
              <p className="p-4 text-gray-700 md:h-[113px]">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
