// Import useState and useClient hooks
"use client";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const Faqs = () => {
  const [expanded, setExpanded] = useState(Array(8).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const faqs = [
    {
      question: "I'm new to this. Is Bikinioff easy to use?",
      answer:
        "As easy and pleasant as gently touching yourself! Bikinioff's AI is powerful, and it's designed for creators of all experience levels. Our intuitive and clear interface makes it easy to jump in and start creating stunning visuals. No technical expertise required!",
    },
    {
      question: 'What are "moans" and how do they work?',
      answer:
        "Through sophisticated AI technology,it interprets your concepts to create personalized,high-quality images,ensuring a respectful approach to content generation,whether it's for creating nude images or manipulating photos for artistic purposes",
    },
    {
      question: "Which plan is right for me?",
      answer:
        "We offer free and paid subscription plans. Free users recieve 5 credits monthly. Our three paid plans-Basic,Plus, Pro-cater to varying needs and budgets. For detailed plan information, visit our pricing page",
    },
    {
      question: "I'm worried about privacy. Is my work safe with Bikinioff?",
      answer:
        "Yes, Absolutely. We prioritize your privacy with stringent policies and technology design to keep your identity and creations secure. Our commitment to data protection and user privacy is unwavering, allowing you to explore your creativity with confidence.",
    },
    {
      question:
        "How can I purchase the subscription and start undressing images?",
      answer:
        "Sharing it at your discretion. You control if and how you want to share your images, with full autonomy over your content's privacy. We remind users that they hold sole responsibility for their creations and encourage ethical use of our technology",
    },
    {
      question: "What if I have never used crypto purchases before?",
      answer:
        "While we champion creative freedom, we also uphold a policy of responsible content creation. We prohibit the creation of illegal or harmful content and adhere to ethical guidelines to ensure our platform remains a positive space for creativity.",
    },
    {
      question: "Do you offer discounts for annual subscriptions?",
      answer:
        "Our use of Undress Al technology raises important ethical issues, such as privacy, consent, and the risk of misuse. We are committed to ethical practices by protecting user privacy, requiring consent for all content creation, using content moderation to prevent harmful outputs, and educating our users on responsible Al use. Our goal is to ensure our technology is used in a way that respects individual rights and promotes positive societal impact.",
    },
    {
      question: "What kind of images can I create with Bikinioff?",
      answer:
        "Misusing Undress Al technology can lead to legal repercussions, including privacy law violations, copyright infringement, and potential criminal charges. Users are responsible for their creations and must comply with all applicable laws.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className=" px-16 mx-auto w-full overflow-hidden py-14 galaxyImage">
        <div className="flex flex-col gap-[30px]">
          <div className="flex justify-center gap-10 items-center">
            <div className="text-white text-3xl font-semibold pt-10 overflow-y-hidden">
              Frequently Asked Questions
            </div>
          </div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border-b border-gray-300"
            >
              <div
                className="flex items-center cursor-pointer pb-2"
                onClick={() => toggleExpand(index)}
              >
                <div className="text-white text-md font-bold flex-grow">
                  {faq.question}
                </div>
                <motion.div
                  className="ml-2"
                  animate={{ rotate: expanded[index] ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-white"
                  />
                </motion.div>
              </div>
              {expanded[index] && (
                <motion.div
                  className="text-white text-sm mt-2 "
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
              <motion.div
                className=""
                initial={{ scaleY: 0 }}
                animate={{ scaleY: expanded[index] ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faqs; // Use useClient to mark the component as client-side
