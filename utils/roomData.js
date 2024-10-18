const roomNames = ["Hoarding OCD", "Paranoid Schizophrenia", "Generalized Anxiety Disorder", "Major Depressive Disorder"];

const generatePersonDescription = (condition, name) => {
  const descriptions = {
    "Hoarding OCD": `${name}'s apartment is a carefully curated space, filled with items that hold deep personal significance. Diagnosed with Hoarding OCD in their 30s, ${name}'s journey has been one of self-discovery and gradual progress. "Each object carries a memory or potential," they explain, "and the thought of discarding them can be overwhelming." ${name} is working hard to manage their condition, attending therapy and support groups to develop healthier coping mechanisms. They've made strides in organizing their living space, creating designated areas for their collections while ensuring safety and functionality. ${name} finds solace in art, transforming some of their collected items into beautiful collages. This creative outlet not only helps them process their emotions but also allows them to share their unique perspective with others. Through their volunteer work at a local community center, ${name} uses their experiences to foster understanding and reduce stigma around Hoarding OCD. Their story is one of ongoing effort, small victories, and the complex relationship between objects and emotions.`,
    "Paranoid Schizophrenia": `Meet ${name}. At 25, ${name}'s life was turned upside down by a diagnosis of paranoid schizophrenia. Plagued by constant suspicions and fears of being watched or persecuted, ${name} struggled to trust even close friends and family. Voices warning of conspiracies and hidden dangers became a daily challenge, making work and social interactions nearly impossible. After several hospitalizations and trying various medications, ${name} found a treatment plan that helped manage the paranoid thoughts and auditory hallucinations. Now 38, ${name} lives independently and works from home as a data entry specialist. ${name} finds solace in online support groups and is learning to question paranoid thoughts without letting them control their life. "Every day is a battle against my own mind," ${name} says, "but I'm determined to not let it define me."`,
    "Generalized Anxiety Disorder": `Meet ${name}. Diagnosed with Generalized Anxiety Disorder at 19, ${name}'s journey has been one of resilience and growth. Now 32, they have transformed their constant worries into a source of strength. As a successful graphic designer, ${name} channels their energy into their art, creating beautiful and inspiring works. Through therapy, medication, and mindfulness, they has developed effective strategies to manage their anxiety. ${name} describes their GAD as "having a cautious friend always looking out for me," but they have learned to navigate life with optimism and grace. An advocate for mental health awareness, ${name} shares their experiences and insights through a popular blog, inspiring others to find their own paths to well-being. Their story is a testament to the fact that while anxiety may be a part of their life, it doesn't define them.`,
    "Major Depressive Disorder": `${name}'s journey with Major Depressive Disorder began during their freshman year of college. "It felt like a heavy, dark cloud had settled over my entire life," they recalled. Since then, ${name} has faced ongoing challenges managing their condition. Through a combination of therapy, medication adjustments, and lifestyle changes, they've worked hard to build a stable life. Some days are better than others, and ${name} still struggles with periods of low mood, lack of motivation, and feelings of worthlessness. "Depression is a part of my life, but I'm learning to cope," ${name} says. "It's an ongoing process of self-care and management." Their journey has been marked by ups and downs – they've faced job difficulties, relationship strains, and days when basic self-care feels overwhelming. ${name} has found some solace in creating art and participating in support groups, which helps them feel less isolated. While they still grapple with their depression daily, ${name} hopes that by sharing their experiences, they can help others feel less alone in their struggles.`
  };
  return descriptions[condition];
};

const generateQuestions = (condition) => {
  const questions = {
    "Hoarding OCD": [
      "Can you tell me about a special item in your collection and why it's meaningful to you?",
      "How has creating art from your collected items helped you in your journey?",
      "What's one misconception about Hoarding OCD that you'd like to address?",
    ],
    "Paranoid Schizophrenia": [
      "What is one thing you wish people understood about schizophrenia?",
      "How do you stay positive despite the challenges?",
      "What hobbies or activities help you relax?",
    ],
    "Generalized Anxiety Disorder": [
      "You mentioned channeling your energy into art. How has graphic design helped you manage your anxiety?",
      "Can you share how you've transformed your worries into a source of strength?",
      "As an advocate for mental health awareness, what's one message you'd like to share with others about living with GAD?",
    ],
    "Major Depressive Disorder": [
      "What's a hobby or activity that brings you joy, even on difficult days?",
      "Can you share a small victory you've had recently in managing your condition?",
      "How has your perspective on life changed since your diagnosis?",
    ],
  };
  return questions[condition];
};

const generateConversations = (condition) => {
  const conversations = {
    "Hoarding OCD": [
      "Can you tell me about a special item in your collection and why it's meaningful to you?",
      "Sure! I have this old baseball glove from my grandpa. We used to play catch in the backyard when I was a kid. He passed away when I was a teen, so it's one of the few things I have left of him.",
      "That's really special. How do you balance keeping sentimental items like this with managing your Hoarding OCD?",
      "It's tough. My therapist helped me create a 'memory box' for the most important stuff. Helps keep things under control without losing the memories.",
      "That's a great idea. Has creating art from your collected items helped you let go of other things?",
      "Totally! Making collages or sculptures gives items new life. It's easier to part with stuff when it becomes art. Plus, it's really therapeutic.",
      "That's so cool. Has this changed how you view objects and their importance?",
      "Definitely. I'm learning that memories matter more than things. Still struggle daily, but I'm finding comfort in myself, not just possessions. Small steps, you know?"
    ],
    "Paranoid Schizophrenia": [
      "You mentioned that every day is a battle against your own mind. What's one thing you wish people understood about schizophrenia?",
      "One thing I really wish people understood is that schizophrenia doesn't make me dangerous or violent. My struggles are internal - battling my own thoughts and perceptions. It's exhausting, but it doesn't make me a threat to anyone.",
      "That's really eye-opening. Um, so how do you stay upbeat no matter what?",
      "Hmmm it's not always easy, but I've found that routine and small goals help a lot. I also celebrate those little victories, like successfully questioning a paranoid thought or having a good day at work. My online support group is also a lifeline - knowing I'm not alone makes a huge difference.",
      "Thanks for helping me to understand schizophrenia better! Take care!",
    ],
    "Generalized Anxiety Disorder": [
      "You mentioned channeling your energy into art. How has graphic design helped you manage your anxiety?",
      "Oh man, for me it's like a pressure valve for my anxious thoughts. When I'm creating, my worries just fade into the background. It's such a relief, you know?",
      "Huh. Does it help you relax much?",
      "Absolutely! It's my form of mindfulness. When I'm designing, I'm fully present. No room for what-ifs, just colors and shapes. I lose track of time and suddenly realize I've been anxiety-free for hours!",
      "I never knew, well, I guess I should ask the last icebreaker. How else have you transformed your worries into strength?",
      "I've learned to focus on my strengths. I work in a detail-oriented field, and now I've learned to work with my 'anxious brain'. It actually helps me spot issues that others miss. It's like having a built-in quality control system, haha!",
      "This might be personal, but my mother seems to be anxious a lot, do you have any advice for working with people who have GAD?",
      "From my experience, just be patient and understanding. Sometimes we just need someone to listen without judgment. And hey, don't forget to remind us to take breaks and breathe. It's all about those small, supportive gestures. I know when my partner reminds me to take a deep breath, it means the world to me.",
      "Wow, that's really inspiring. Thanks for sharing your unique perspective!",
    ],
    "Major Depressive Disorder": [
      "What's a hobby or activity that brings you joy, even on difficult days?",
      "Painting is my emotional outlet. 🎨 Even on my darkest days, a few brush strokes can express what I can't say in words. It's... freeing. Sometimes I just sit there with my paints and let my emotions flow onto the canvas.",
      "That sounds therapeutic. Has it helped you recently?",
      "Yeah, actually. Last week was tough, but I finished a small painting. It wasn't perfect, but it felt like a huge victory. To me, it was a reminder that I can still create beauty, even when I'm feeling my worst.",
      "That's great! Small victories are important. Any other recent wins?",
      "I've been consistent with my meds and therapy this month. It's a daily battle, but I'm showing up for myself. That's huge for me. Some days just getting out of bed feels like climbing a mountain, you know?",
      "That's definitely progress! 👏 How has your view on life changed since your diagnosis?",
      "It's... complex. I appreciate small joys more deeply now. But I also know life can be incredibly hard. I'm learning to be kinder to myself, especially on bad days. Like, yesterday I managed to do laundry and it felt like a major accomplishment. Pre-diagnosis me would've scoffed at that.",
      "That's a powerful perspective. Thank you for sharing your journey.",
    ]
  };
  return conversations[condition];
};

export const roomData = roomNames.reduce((acc, room) => {
  acc[room] = {
    description: (name) => generatePersonDescription(room, name),
    questions: generateQuestions(room),
    conversation: generateConversations(room)
  };
  return acc;
}, {});
