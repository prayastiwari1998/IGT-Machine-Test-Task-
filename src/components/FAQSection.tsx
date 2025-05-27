import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How to contact with riders emergency ?',
    answer: 'contact with riders emergency contact with riders emergency contact with riders emergency',
  },
  {
    question: 'App installation failed, how to update system information?',
    answer: '',
  },
  {
    question: 'Website reponse taking time, how to improve?',
    answer:
      'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
  },
  {
    question: 'New update fixed all bug and issues',
    answer: '',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
          Frequent Question
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          Do you have any question
        </h2>
      </div>

      <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start text-left text-gray-900 font-medium text-lg"
            >
              {openIndex === index ? (
                <MinusCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
              ) : (
                <PlusCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
              )}
              <span>{faq.question}</span>
            </button>
            {openIndex === index && faq.answer && (
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      <hr />
      </div>
    </section>
  );
}
