const siteData = {
  profile: {
    name: "Ningning Wang",
    photo: "figures/photo.jpg",
    title: "Incoming Master's Student",
    affiliation: "University of Science and Technology of China",
    bio: `I received my Bachelor's degree in Artificial Intelligence from <a href="https://www.dlut.edu.cn/" target="_blank">Dalian University of Technology</a>. I will begin my Master's degree in Information and Communication Engineering at the <a href="https://www.ustc.edu.cn/" target="_blank">University of Science and Technology of China (USTC)</a> in September 2026, advised by Xun Yang and Beier Zhu. My research focuses on visual reasoning in vision-language models.`,
    email: "NingningWang0608@gmail.com",
  },

  socialLinks: [
    {
      name: "Email",
      url: "mailto:NingningWang0608@gmail.com",
      icon: "figures/email.svg",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=36loOMgAAAAJ&hl=zh-CN",
      icon: "figures/google-scholar.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: "figures/github-fill.svg",
    },
    {
      name: "Xiaohongshu",
      url: "https://www.xiaohongshu.com/user/profile/65086bf60000000012004513",
      icon: "figures/xiaohongshu.svg",
    },
  ],

  researchInterests: [
    "Visual Reasoning in Vision-Language Models",
  ],

  academicJourney: [
    {
      institution: "University of Science and Technology of China",
      degree: "Master's in Information and Communication Engineering",
      period: "2026 - 20xx (expected)",
      status: "Incoming Master's Student",
      logo: "",
    },
    {
      institution: "Dalian University of Technology",
      degree: "Bachelor of Engineering in Artificial Intelligence",
      period: "2022 - 2026",
      status: "Graduated",
      logo: "",
    },
  ],

  news: [
    { date: "Jul. 2026", content: "One paper has been accepted by ECCV 2026!" },
    { date: "Jun. 2026", content: "I graduated from Dalian University of Technology with a Bachelor's degree in Artificial Intelligence!" },
    { date: "Dec. 2025", content: "Admitted to USTC Master's Program(expect 26 Fall)!" },
  ],

  publications: [
    {
      title: "Contrastive-Guided Self-Supervised Latent Visual Reasoning for Hallucination Mitigation",
      authors: "Aoxue Dai, Ningning Wang<sup>*</sup>",
      venue: "European Conference on Computer Vision (ECCV), 2026",
      venueShort: "ECCV 2026",
      highlight: "",
      tags: ["Visual Reasoning", "VLM"],
      image: "figures/papers/colvr.png",
      links: [],
    },
    // ── Example (remove or replace with your real papers) ──
    {
      title: "Efficient Agents: Building Effective Agents While Reducing Cost",
      authors: "N Wang, X Hu, P Liu, H Zhu, Y Hou, H Huang, S Zhang, J Yang, J Liu, et al.",
      venue: "arxiv:2508.02694",
      venueShort: "arxiv",
      highlight: "",
      tags: ["Agent"],
      image: "figures/papers/efficient_agents.png",   // 160×100 thumbnail; replace with paper figure
      links: [
        { label: "ARXIV", url: "https://arxiv.org/abs/2508.02694" },
        { label: "CODE", url: "https://arxiv.org/abs/2508.02694" },
      ],
    },
    // To add more papers, copy the block above and fill in your data.
    // {
    //   title: "Paper Title",
    //   authors: "Ningning Wang, ...",
    //   venue: "Conference / Journal, Year",
    //   venueShort: "CONF",
    //   highlight: "Oral",          // or "" if none
    //   tags: ["RL"],
    //   image: "figures/paper2.png", // put your thumbnail in figures/
    //   links: [
    //     { label: "PDF", url: "#" },
    //   ],
    // },
  ],
  footer: {
    text: "© 2026 Ningning Wang. Hosted by GitHub Pages.",
  },
};
