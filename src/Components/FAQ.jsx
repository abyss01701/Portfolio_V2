import { useState } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import ChipTabs from "./ChipsTabs";
import { fontFamily } from "@mui/system";

const faqData = {
  "Web Dev": [
    { question: "What frameworks and libraries do you use for web development?", answer: "I primarily use React for building dynamic, component-based user interfaces. For styling, I rely on Tailwind CSS to create responsive designs quickly. Additionally, I use JavaScript, HTML5, and CSS3 to implement custom functionality and ensure accessibility across devices." },
    { question: "How do you ensure that the websites you build are SEO-friendly?", answer: "I follow best practices for SEO by using semantic HTML, optimizing images and assets, and implementing meta tags and structured data. I also focus on improving load times through performance optimizations, ensuring that the site is easily indexed by search engines." },
    { question: "What tools do you use for version control and collaboration?", answer: "I use Git and GitHub for version control. This helps me track changes in the codebase, collaborate with others, and manage project branches. GitHub allows for easy collaboration on open-source projects and ensures that the code remains organized and error-free." },
    { question: "How do you handle cross-browser compatibility?", answer: "I use a combination of CSS resets and normalization, along with extensive testing across different browsers (Chrome, Firefox, Safari, Edge). I ensure that my websites look great and function well on all major browsers by using progressive enhancement techniques and ensuring feature compatibility." },
  ],
  "Mobile Dev": [
    { question: "Do you develop mobile apps for both iOS and Android?", answer: "Yes! I use React Native to develop cross-platform mobile apps that work on both iOS and Android. React Native allows me to write the app once and deploy it across multiple platforms, saving development time and ensuring consistency between versions." },
    { question: "How do you ensure that your mobile apps perform well?", answer: "I focus on optimizing performance by using techniques such as lazy loading, reducing unnecessary re-renders, and keeping the app lightweight. I also optimize assets (like images) and make use of caching and other tools to minimize load times and improve the overall user experience." },
    { question: "What is your experience with native mobile development?", answer: "While I specialize in React Native, I also have experience with native development for both Android (Java/Kotlin) and iOS (Swift). This allows me to implement custom native features that might not be easily achievable through cross-platform tools." },
    { question: "How do you handle app deployment on the App Store and Google Play?", answer: "I follow the guidelines provided by both the App Store and Google Play Store to ensure smooth deployment. This includes setting up the necessary certificates, optimizing app descriptions, taking screenshots, and addressing any review requirements for approval." },
  ],
  "UI/UX": [
    { question: "What tools do you use for UI/UX design?", answer: 'I use Figma and Adobe XD for wireframing, prototyping, and designing high-fidelity UI mockups. These tools allow me to collaborate effectively with teams and clients, enabling rapid iteration and visualizing user flows before development begins.' },
    { question: "How do you approach user research in your design process?", answer: "I start by gathering insights through user surveys, interviews, and usability testing. This helps me understand the pain points and preferences of the target audience. I then create personas and user journeys to guide the design process and ensure that the final product meets user needs." },
    { question: "What is your approach to making designs accessible?", answer: "Accessibility is crucial, so I ensure that all my designs follow WCAG (Web Content Accessibility Guidelines). This includes using sufficient contrast ratios, clear typography, providing alternative text for images, and making sure that the site is navigable via keyboard for users with disabilities." },
    { question: "How do you ensure a consistent and intuitive user experience across devices?", answer: "I use a mobile-first approach to design, starting with small-screen layouts and scaling up for larger screens. Consistency is key, so I create design systems that include standardized colors, typography, and components that can be reused across the website or app. I also test designs on multiple devices to ensure a seamless user experience." },
  ],
};

export default function FAQ() {
  const [selected, setSelected] = useState("Web Dev");

  return (
    <>
      <h2 className="text-4xl font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#027af3] to-[#01f2fac2]">
        FAQs
      </h2>
      <p className="text-gray-400 text-center font">Let’s answer some questions</p>
      <div className="max-w-4xl mx-auto p-6">
        <div className="font-berlin text-10pt font-bold">
        {/* Tab System */}
        <ChipTabs tabs={["Web Dev", "Mobile Dev", "UI/UX"]} selected={selected} setSelected={setSelected} className/>
        </div>
        {/* FAQ Content */}
        <div className="space-y-4">
          {faqData[selected].map(({ question, answer }, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <motion.div
                  data-aos="fade-up" // Add scroll animation here (fade-up or from the side)
                  data-aos-duration="1000"
                  data-aos-delay={`${index * 100}`} // Optional: Delay each item by a little
                  initial={false}
                  animate={{ backgroundColor: open ? "#4B5563" : "transparent" }} // Darker gray when open
                  transition={{ duration: 0.3 }}
                  className="border border-gray-500 rounded-md p-4 transition-all"
                >
                  <Disclosure.Button className="flex justify-between items-center w-full text-left">
                    <span className={`transition-colors duration-300 ${open ? "text-white" : "text-gray-400"}`}>
                      {question}
                    </span>
                    <motion.svg
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-white cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </Disclosure.Button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-2 text-gray-300">{answer}</p>
                  </motion.div>
                </motion.div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </>
  );
}

