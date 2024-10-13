"use client";

import { useState } from "react";
import { FaqItem } from "@/types/types";
import { faqData } from "@/data/faqData";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="container">
        <div className="headline">
          <div className="title">Ask Any Question?</div>
          <div className="description">
            Check out our FAQs for helpful tips and answers to make your travel
            effortless!
          </div>
        </div>
        <div className="content">
          <div className="faq-container">
            <div className="faq-image">
              <Image
                src="/img/campaign/1.jpg"
                alt="FAQ Image"
                width={600}
                height={400}
                objectFit="cover"
                className="image-style"
                priority
              />
            </div>
            <div className="faq-content">
              {faqData.map((item: FaqItem, index: number) => (
                <div
                  key={item.id}
                  className={`accordion-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3>{item.question}</h3>
                    <Icon
                      icon={
                        activeIndex === index
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"
                      }
                      className="accordion-icon"
                    />
                  </div>
                  <div
                    className={`accordion-content ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
