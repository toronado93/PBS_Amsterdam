import servicepic1 from "../assets/img/icons/services/icon-Tech&Development.png";
import servicepic2 from "../assets/img/icons/services/icon-Data.png";
import servicepic3 from "../assets/img/icons/services/icon-Support.png";
import servicepic4 from "../assets/img/icons/services/icon-Strategy.png";

export const services = [
  {
    id: 0,
    serviceName: "Tech&Development",
    subTitle:
      "Empowering Your Digital Success: Methodical Development Solutions.",
    iconsrc: servicepic1,
    nestedService: [
      {
        nestedServiceTitle: "Software & Web Development",
        nestedServiceParag:
          "Create customized software solutions that enhance productivity. Develop visually appealing websites optimized for search engines.",
      },
      {
        nestedServiceTitle: "Mobile & Application Development",
        nestedServiceParag:
          "Build engaging mobile solutions for iOS and Android.Craft user-centric mobile applications that captivate your audience.",
      },
      {
        nestedServiceTitle: "Code Audit",
        nestedServiceParag:
          "Conduct comprehensive code audits to identify vulnerabilities and optimize code efficiency.Ensure code security and performance through rigorous auditing.",
      },
      {
        nestedServiceTitle: "High-Performance & High-Traffic Web Solutions:",
        nestedServiceParag:
          "Capable of handling high traffic loads. Optimize web applications for peak performance even under heavy usage",
      },
      {
        nestedServiceTitle: "Video Streaming Solutions",
        nestedServiceParag:
          "Create platforms for smooth and efficient video content delivery. Streamline video streaming services for seamless user experiences.",
      },
      {
        nestedServiceTitle: "Database Architecture/Optimization",
        nestedServiceParag:
          "Design and optimize database structures for efficient data management. Ensure databases are well-structured for optimal performance.Optimize databases for faster data retrieval and improved efficiency.",
      },
      {
        nestedServiceTitle: "Code Architecture",
        nestedServiceParag:
          "Create scalable and maintainable code architectures that align with long-term goals. Architect code for future growth and ease of maintenance.",
      },
    ],
  },
  {
    id: 1,
    serviceName: "Data&Insights",
    subTitle: "",
    iconsrc: servicepic2,
    nestedService: [
      {
        nestedServiceTitle: "Data Science",
        nestedServiceParag:
          "Extract valuable insights from your data using advanced techniques. Leverage data analytics to make data-driven decisions and gain a competitive edge.",
      },
      {
        nestedServiceTitle: "Cyber Security",
        nestedServiceParag:
          "Protect your digital assets and sensitive information with comprehensive cybersecurity solutions. Safeguard your business from online threats and vulnerabilities.",
      },
    ],
  },
  {
    id: 2,
    serviceName: "Support",
    subTitle: "",
    iconsrc: servicepic3,
    nestedService: [
      {
        nestedServiceTitle: "Bug Fixing",
        nestedServiceParag:
          "Identify and resolve software bugs to ensure a seamless user experience.Keep your applications and systems free from glitches.",
      },
      {
        nestedServiceTitle: "Maintenance",
        nestedServiceParag:
          "Ensure the reliability and performance of your IT systems.",
      },
      {
        nestedServiceTitle: "Cloud Solutions",
        nestedServiceParag:
          "Harness the power of the cloud for scalability and efficiency.",
      },
    ],
  },
  {
    id: 3,
    serviceName: "Digital Strategy",
    subTitle:
      "Develop a tailored digital strategy to achieve your business objectives. We help you navigate the digital landscape and stay ahead of the competition.",
    iconsrc: servicepic4,
    nestedService: [
      {
        nestedServiceTitle: "IT Consulting",
        nestedServiceParag: "Get expert guidance on your IT strategy.",
      },
      {
        nestedServiceTitle: "UI/UX Design",
        nestedServiceParag:
          "Create user-centric designs that captivate your audience.",
      },
      {
        nestedServiceTitle: "Online Marketing Strategy",
        nestedServiceParag:
          "Conduct comprehensive code audits to identify vulnerabilities and optimize code efficiency.Ensure code security and performance through rigorous auditing.",
      },
      {
        nestedServiceTitle: "SEO Services",
        nestedServiceParag:
          "Improve your online visibility with our SEO expertise. Optimize your website for search engines to attract more organic traffic and enhance your online presence.",
      },
    ],
  },
];

export default services;
