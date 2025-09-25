const startUpList = [
  {
    "id": 1,
    "name": "LearnMate AI",
    "AIFeatures": "Adaptive quizzes, real-time feedback, personalized learning paths",
    "gradeOrSubject": "Grades 4-8 / Math & Science",
    "effectivenessRating": 4.8,
    "description": "LearnMate AI is an intelligent learning assistant designed to help students master math and science concepts at their own pace. By providing adaptive quizzes, it tailors each practice session to the learner’s current skill level, ensuring that students are consistently challenged but never overwhelmed. Its real-time feedback system highlights mistakes as they happen and provides step-by-step guidance, which helps students correct misunderstandings quickly. Personalized learning paths adapt dynamically based on performance, giving students a clear roadmap to improvement. Teachers and parents can also track student progress, making it a valuable tool for both classroom instruction and at-home study."
  },
  {
    "id": 2,
    "name": "CodeBuddy",
    "AIFeatures": "Interactive coding exercises, AI debugging hints, gamified challenges",
    "gradeOrSubject": "Grades 6-12 / Coding & STEM",
    "effectivenessRating": 4.7,
    "description": "CodeBuddy acts as a supportive AI coding companion for students learning computer programming and STEM subjects. It offers interactive coding exercises that allow learners to immediately practice new concepts while receiving instant feedback on their code. When errors occur, the AI provides helpful debugging hints rather than just answers, fostering problem-solving skills and deeper understanding. Gamified challenges keep students engaged by rewarding progress with badges, levels, and achievements, making coding feel less intimidating and more fun. Whether students are building small projects or preparing for advanced programming, CodeBuddy encourages persistence and growth while developing real-world coding skills."
  },
  {
    "id": 3,
    "name": "ReadSmart",
    "AIFeatures": "AI reading comprehension, vocabulary builder, progress tracking",
    "gradeOrSubject": "Grades 2-6 / Literacy",
    "effectivenessRating": 4.6,
    "description": "ReadSmart is an AI-driven literacy platform that strengthens reading comprehension and language skills in younger students. Its AI reading comprehension exercises adapt to each student’s reading level, ensuring texts are neither too simple nor too challenging. A built-in vocabulary builder introduces new words in engaging ways and reinforces retention through practice and contextual learning. Progress tracking tools allow teachers and parents to monitor growth, identify areas for improvement, and celebrate milestones. By combining fun interactive activities with personalized instruction, ReadSmart helps students become more confident readers while nurturing a lifelong love of reading."
  },
  {
    "id": 4,
    "name": "MathWhiz AI",
    "AIFeatures": "Step-by-step problem solving, adaptive difficulty, instant hints",
    "gradeOrSubject": "Grades 5-10 / Mathematics",
    "effectivenessRating": 4.9,
    "description": "MathWhiz AI functions like a personal digital math tutor, guiding students through problem-solving in a clear and structured way. The platform breaks down each math problem into manageable steps, showing learners how to approach challenges logically rather than memorizing answers. Its adaptive difficulty system automatically adjusts the complexity of problems based on the student’s performance, keeping learners motivated while steadily building mastery. Instant hints provide support when students get stuck, encouraging them to think critically rather than giving away full solutions too quickly. By combining structured problem-solving with personalization, MathWhiz AI helps students build both confidence and long-term mathematical understanding."
  },
  {
    "id": 5,
    "name": "SciExplorer",
    "AIFeatures": "Virtual experiments, AI explanations, concept quizzes",
    "gradeOrSubject": "Grades 6-12 / Science",
    "effectivenessRating": 4.7,
    "description": "SciExplorer immerses students in the world of science through interactive and AI-guided virtual experiments. It allows learners to safely simulate experiments that would otherwise require expensive lab equipment or pose safety risks, making advanced concepts more accessible to all classrooms. The AI provides detailed explanations of each step and the underlying principles, ensuring students understand not just the ‘how’ but also the ‘why.’ After experiments, students can reinforce their learning with concept quizzes that adapt to their progress. By blending interactive experimentation with personalized instruction, SciExplorer transforms abstract science topics into engaging, hands-on experiences that inspire curiosity."
  },
  {
    "id": 6,
    "name": "LangAI",
    "AIFeatures": "Language conversation practice, pronunciation correction, grammar tips",
    "gradeOrSubject": "Grades 4-12 / Language Learning",
    "effectivenessRating": 4.5,
    "description": "LangAI is an advanced language learning assistant that helps students build fluency through interactive practice. It engages learners in AI-driven conversations that mimic real-world dialogue, making practice sessions both practical and immersive. The AI listens carefully and provides real-time pronunciation correction, helping students develop more natural speech patterns. Grammar tips and instant feedback guide students toward better sentence construction without overwhelming them. LangAI covers a wide range of languages, offering personalized practice tailored to the learner’s proficiency level. With its focus on practical communication skills, LangAI enables students to gain confidence and express themselves effectively in a foreign language."
  },
  {
    "id": 7,
    "name": "STEM Sparks",
    "AIFeatures": "Project-based learning, AI mentorship, skill tracking",
    "gradeOrSubject": "Grades 7-12 / STEM",
    "effectivenessRating": 4.8,
    "description": "STEM Sparks empowers students to learn by doing through hands-on, project-based activities across science, technology, engineering, and math. The platform acts like an AI mentor, guiding students as they plan, design, and execute their projects. It provides timely advice, resources, and encouragement to help students overcome challenges and think creatively. Skill tracking tools allow learners to see their growth in key areas such as problem-solving, collaboration, and innovation. By focusing on experiential learning rather than rote memorization, STEM Sparks prepares students for future academic and career opportunities in STEM while keeping them engaged through real-world problem-solving."
  },
  {
    "id": 8,
    "name": "QuizAI",
    "AIFeatures": "AI-generated quizzes, adaptive difficulty, performance analysis",
    "gradeOrSubject": "Grades 3-10 / Various Subjects",
    "effectivenessRating": 4.6,
    "description": "QuizAI specializes in creating personalized quizzes that reinforce classroom learning across multiple subjects. Its AI engine generates quizzes tailored to each student’s current understanding, automatically adjusting the difficulty level to maintain engagement and promote steady progress. After each quiz, detailed performance analysis highlights strengths and identifies weak areas, helping both students and teachers focus on what matters most. With its ability to deliver quick, customized practice sessions, QuizAI helps learners solidify their knowledge, track their improvement over time, and prepare confidently for tests and exams."
  },
  {
    "id": 9,
    "name": "TutorBot",
    "AIFeatures": "24/7 AI tutoring, topic recommendation, instant problem explanations",
    "gradeOrSubject": "Grades 5-12 / Math & Science",
    "effectivenessRating": 4.7,
    "description": "TutorBot is a round-the-clock AI tutor designed to provide instant academic support in math and science. Students can ask questions at any time and receive clear, step-by-step explanations that break down complex topics into understandable parts. The AI also recommends topics to review based on student performance, ensuring learners focus on areas where they need the most improvement. With its always-available support, TutorBot empowers students to complete homework independently, prepare for tests effectively, and build confidence in challenging subjects."
  },
  {
    "id": 10,
    "name": "Creative Minds AI",
    "AIFeatures": "AI-guided art & creativity exercises, personalized prompts",
    "gradeOrSubject": "Grades 3-8 / Arts & Creativity",
    "effectivenessRating": 4.4,
    "description": "Creative Minds AI nurtures imagination and artistic growth by offering interactive, AI-guided creative exercises. It provides students with personalized prompts for drawing, storytelling, music, and design, encouraging them to explore different forms of artistic expression. The AI gives constructive feedback that helps learners refine their skills without stifling creativity. By combining structured guidance with open-ended exploration, Creative Minds AI helps students unlock their creative potential and build confidence in sharing their ideas. It is particularly valuable in classrooms that want to balance academic rigor with opportunities for self-expression and innovation."
  },
  {
    "id": 11,
    "name": "HistoryLens",
    "AIFeatures": "Interactive timelines, AI storytelling, comprehension quizzes",
    "gradeOrSubject": "Grades 6-12 / History",
    "effectivenessRating": 4.6,
    "description": "HistoryLens brings historical events to life with interactive timelines and AI-generated storytelling. Instead of memorizing dates and facts, students can explore history as a dynamic narrative, connecting events, people, and causes in meaningful ways. The AI provides engaging explanations and context, making complex periods of history easier to grasp. Comprehension quizzes follow each module to reinforce knowledge and encourage critical thinking. By transforming history into an interactive journey rather than a static subject, HistoryLens helps students develop a deeper appreciation of the past and understand how it shapes the present."
  },
  {
    "id": 12,
    "name": "BrainBoost AI",
    "AIFeatures": "Memory exercises, adaptive review, cognitive skill tracking",
    "gradeOrSubject": "Grades 3-12 / General Learning",
    "effectivenessRating": 4.5,
    "description": "BrainBoost AI strengthens cognitive skills and memory retention through engaging, AI-powered exercises. Its adaptive review system revisits material at optimal intervals to reinforce long-term memory and reduce forgetting. Students participate in fun brain-training activities that target concentration, problem-solving, and logical reasoning skills. The platform tracks progress across cognitive areas, giving teachers and parents insights into how a student’s mental abilities are developing. By going beyond traditional subjects, BrainBoost AI equips students with the foundational skills needed to succeed across all areas of learning."
  },
  {
    "id": 13,
    "name": "EcoLearn AI",
    "AIFeatures": "Environmental simulations, AI quizzes, sustainability projects",
    "gradeOrSubject": "Grades 4-10 / Environmental Science",
    "effectivenessRating": 4.7,
    "description": "EcoLearn AI teaches students about ecology, conservation, and sustainability through immersive simulations and interactive projects. Learners can explore environmental scenarios, such as managing resources, balancing ecosystems, or reducing pollution, in a safe virtual environment where every decision has consequences. AI-generated quizzes reinforce understanding and challenge students to apply what they’ve learned to real-world issues. Sustainability projects encourage learners to design creative solutions for environmental challenges, fostering awareness and responsibility. EcoLearn AI blends science education with practical application, inspiring the next generation of environmentally conscious citizens."
  },
  {
    "id": 14,
    "name": "MathGenius",
    "AIFeatures": "Gamified math challenges, AI hints, leaderboards",
    "gradeOrSubject": "Grades 4-12 / Mathematics",
    "effectivenessRating": 4.8,
    "description": "MathGenius transforms math practice into an exciting, competitive experience by offering gamified challenges that motivate students to push their limits. Learners compete individually or in groups on leaderboards, which fosters friendly competition and a sense of achievement. When students encounter difficulties, the AI provides tailored hints that encourage critical thinking without spoiling the solution. By merging the fun of gaming with the rigor of math education, MathGenius keeps learners highly engaged while steadily improving their problem-solving skills and confidence."
  },
  {
    "id": 15,
    "name": "CodeCraft",
    "AIFeatures": "Interactive coding projects, AI error detection, real-time feedback",
    "gradeOrSubject": "Grades 6-12 / Coding & Programming",
    "effectivenessRating": 4.7,
    "description": "CodeCraft is a hands-on coding platform that teaches students programming by guiding them through real projects. The AI actively supports learners by detecting errors in their code, suggesting fixes, and offering real-time feedback that improves both logic and efficiency. Students can work on creative projects such as building games, websites, or simple apps, which makes learning both practical and exciting. By combining structured lessons with creative freedom, CodeCraft prepares students for real-world programming while fostering independence, problem-solving, and resilience."
  }
]

export default startUpList;
