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
    { question: "How do I buy an NFT?", answer: "To buy an NFT, set up a crypto wallet, connect it to an NFT marketplace, and use cryptocurrency to purchase your desired NFT." },
    { question: "How do I sell an NFT?", answer: "To sell an NFT, list it on an NFT marketplace, set your price, and wait for a buyer to complete the transaction." },
    { question: "What cryptocurrencies do you accept?", answer: "We accept popular cryptocurrencies like Ethereum, Bitcoin, and USDT, but the specific options depend on the marketplace." },
  ];

  return (
    <div className=" text-white  flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl font-bold text-black font-apex mb-6 text-center">FREQUENTLY ASKED QUESTIONS</h1>
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className={`border ${
              open === faq.question ? "border-red-500" : "border-gray-700"
            } rounded-md mb-4 font-apex overflow-hidden`}
          >
            <div
              className={`flex justify-between text-black items-center p-4 cursor-pointer ${
                open === faq.question ? "bg-pink-200" : "bg-white"
              }`}
              onClick={() => toggle(faq.question)}
            >
              <h2 className="text-lg font-bold">{faq.question}</h2>
              <span>{open === faq.question ? "-" : "+"}</span>
            </div>
            {open === faq.question && (
              <div className="p-4 bg-gray-900">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;