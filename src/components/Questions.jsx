import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState("What is an NFT?");

  const toggle = (question) => {
    setOpen(open === question ? "" : question);
  };

  const faqs = [
    {
      question: "What is an NFT?",
      answer:
        "An NFT (Non-Fungible Token) is a unique digital asset stored on the blockchain, representing ownership of items like art, music, or collectibles.",
    },
    {
      question: "How do I buy an NFT?",
      answer:
        "To buy an NFT, set up a crypto wallet, connect it to an NFT marketplace, and use cryptocurrency to purchase your desired NFT.",
    },
    {
      question: "How do I sell an NFT?",
      answer:
        "To sell an NFT, list it on an NFT marketplace, set your price, and wait for a buyer to complete the transaction.",
    },
    {
      question: "What cryptocurrencies do you accept?",
      answer:
        "We accept popular cryptocurrencies like Ethereum, Bitcoin, and USDT, but the specific options depend on the marketplace.",
    },
  ];

  return (
    <div className="text-white flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold  text-black font-apex mb-6 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className={`border ${
              open === faq.question ? "border-gray-400" : "border-gray-700"
            } rounded-md mb-4 font-roboto overflow-hidden`}
          >
            <div
              className={`flex justify-between text-black items-center p-4 cursor-pointer ${
                open === faq.question ? "bg-pink-200" : "bg-white"
              }`}
              onClick={() => toggle(faq.question)}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold">{faq.question}</h2>
              <span className="text-lg">{open === faq.question ? "-" : "+"}</span>
            </div>
            {open === faq.question && (
              <div className="p-4 bg-white">
                <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
