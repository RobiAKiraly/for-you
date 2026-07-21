/* ==========================================================================
   EVER OURS, a digital love letter
   Vanilla JS only. Organized top to bottom:
   1. Editable settings (start date, envelopes, letter text lives in HTML)
   2. Content data (reasons, compliments, fortunes, quotes, jar messages)
   3. Feature modules (each wrapped in its own init function)
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   1. EDITABLE SETTINGS
   -------------------------------------------------------------------------- */

/** The date it all began. Edit this to your real anniversary date/time. */
const RELATIONSHIP_START = new Date('2026-05-12T00:00:00');

/** Secret message: accepted nicknames (lowercase, trimmed) and the hidden text. */
const SECRET_ACCEPTED_ANSWERS = ['mokus'];
const SECRET_HIDDEN_MESSAGE = "You found it. No matter what nickname I use, there's only one truth underneath all of them: you are the best part of my life, and I would choose you in every timeline there is.";

/** Open When... envelopes. Add or edit freely. */
const OPEN_WHEN_ENVELOPES = [
  {
    label: "Open when you're sad",
    text: "I know today feels heavy. Whatever it is, you don't have to carry it alone, I'm right here, and I'm not going anywhere. Take a breath. This feeling is a visitor, not a resident. I love you, on your hardest days most of all."
  },
  {
    label: "Open when you miss me",
    text: "I miss you too, more than I know how to say. Close your eyes for a second, I'm thinking of you right now, at this exact moment, wherever you are. Distance is just a detail. We'll be together again soon."
  },
  {
    label: "Open when you're stressed",
    text: "Whatever's piling up right now, it doesn't define you, and it won't last forever. Put it down for five minutes. Breathe. You've gotten through every hard day so far, this one is no different. I'm proud of you for trying so hard."
  },
  {
    label: "Open when you're doubting yourself",
    text: "Whatever voice is telling you you're not enough, it's lying. I've seen your strength, your heart, your mind, up close, and I promise you: you are so much more capable and so much more loved than you realize right now."
  },
  {
    label: "Open when you can't sleep",
    text: "Close your eyes. Imagine my hand in yours, my voice low and steady beside you. You're safe. You're loved. Tomorrow can wait. For now, just rest, I've got you, even from here."
  },
  {
    label: "Open when you need a smile",
    text: "Okay, quick: remember the time we couldn't stop laughing over something so silly neither of us can even explain it anymore? That's my favorite kind of memory. You're stuck with a lot more of those, I promise."
  }
];
/* Auto-formatted content data, generated once, freely editable below. */

const REASONS = [
  'I love your smile.',
  'I love your kindness.',
  'I love how safe I feel around you.',
  'I love your laugh.',
  'I love how you always support me.',
  'I love the way you say my name.',
  'I love how you remember the little things.',
  'I love your patience with me.',
  'I love how you make me feel like myself.',
  'I love the way your eyes light up when you\'re excited.',
  'I love how honest you are.',
  'I love how you dance in the kitchen.',
  'I love your terrible jokes.',
  'I love the way you hum without realizing it.',
  'I love how you take care of the people you love.',
  'I love how you never give up on things that matter.',
  'I love your curiosity about the world.',
  'I love the way you listen, really listen.',
  'I love how you make hard days feel lighter.',
  'I love the way you say good morning.',
  'I love your stubbornness, even when it drives me crazy.',
  'I love how gentle you are with things that are breakable.',
  'I love how you always know what to say.',
  'I love your handwriting.',
  'I love the way you get excited about small things.',
  'I love how you apologize when you\'re wrong.',
  'I love your loyalty.',
  'I love how you make everyone around you feel welcome.',
  'I love the way you fall asleep mid-sentence.',
  'I love how you ask about my day like it actually matters to you.',
  'I love your courage.',
  'I love how you always find the silver lining.',
  'I love the way you hold my hand.',
  'I love how you never let me feel alone.',
  'I love your sense of humor.',
  'I love the way you care for the people who can\'t care for themselves.',
  'I love how you make plans just to spend time with me.',
  'I love your quiet confidence.',
  'I love how you remember what I like without me saying it.',
  'I love the way you say \'we\' instead of \'I\'.',
  'I love how you make me want to be better.',
  'I love your resilience.',
  'I love how you dance around the house like no one\'s watching.',
  'I love the way you get lost in things you\'re passionate about.',
  'I love how you never make me feel small.',
  'I love your generosity.',
  'I love how you say sorry with actions, not just words.',
  'I love the way you look at me when you think I\'m not paying attention.',
  'I love how you make the ordinary feel special.',
  'I love your determination.',
  'I love how you comfort me without needing to be asked.',
  'I love the way you get excited for my wins like they\'re your own.',
  'I love how you never rush me.',
  'I love your creativity.',
  'I love how you find joy in the smallest things.',
  'I love the way you say \'I\'m proud of you.\'',
  'I love how you show up, even on hard days.',
  'I love your softness underneath the toughness.',
  'I love how you remember our inside jokes.',
  'I love the way you make me laugh until it hurts.',
  'I love how you always keep your promises.',
  'I love your ambition.',
  'I love how you make me feel chosen, every single day.',
  'I love the way you fight for the people you care about.',
  'I love how calm you make me feel.',
  'I love your thoughtfulness.',
  'I love the way you plan surprises just to see me smile.',
  'I love how you never let a fight end without resolving it.',
  'I love your open heart.',
  'I love the way you make our home feel like home.',
  'I love how you check on me without me asking.',
  'I love your bravery in facing what scares you.',
  'I love the way you take care of yourself, so you can take care of us.',
  'I love how you always find time for me.',
  'I love your warmth.',
  'I love the way you tell stories with your whole body.',
  'I love how you make me feel understood.',
  'I love your grace under pressure.',
  'I love the way you say my flaws like they\'re not flaws at all.',
  'I love how you never stop learning.',
  'I love your empathy for strangers.',
  'I love the way you build a life with me, one small day at a time.',
  'I love how you never let silence feel awkward between us.',
  'I love your steady hands.',
  'I love the way you remember anniversaries I forget.',
  'I love how you make future plans that include me.',
  'I love your fierce protectiveness.',
  'I love the way you say \'come here\' when I\'ve had a hard day.',
  'I love how you turn my bad moods into good ones.',
  'I love your gentle honesty.',
  'I love the way you cheer for me from the sidelines.',
  'I love how you make me believe in forever.',
  'I love your playful side.',
  'I love the way you hold space for my feelings.',
  'I love how you never make love feel like a competition.',
  'I love your unwavering belief in me.',
  'I love the way small moments with you feel like big ones.',
  'I love how effortlessly you became my favorite person.',
  'I love that out of everyone, you picked me.',
  'I love that I get to pick you, too, every single day.',
];

const COMPLIMENTS = [
  'Being around you makes me want to be more lovely.',
  'Anyone lucky enough to know you can see how inspiring you are.',
  'I hope someone tells you today how inspiring you are.',
  'You make confidence look effortless.',
  'Anyone lucky enough to know you can see how beautiful you are.',
  'Anyone lucky enough to know you can see how extraordinary you are.',
  'I hope someone tells you today how captivating you are.',
  'Your gentleness is one of my favorite things about you.',
  'Being around you makes me want to be more thoughtful.',
  'Being around you makes me want to be more effortlessly cool.',
  'You make heart look effortless.',
  'Anyone lucky enough to know you can see how quietly powerful you are.',
  'I hope someone tells you today how irreplaceable you are.',
  'You have the kind of creativity that people remember.',
  'I hope someone tells you today how funny you are.',
  'Anyone lucky enough to know you can see how kind you are.',
  'I still can\'t get over how brilliant you are.',
  'You make laugh look effortless.',
  'Your generosity is one of my favorite things about you.',
  'Your light is one of my favorite things about you.',
  'I hope someone tells you today how brave you are.',
  'Being around you makes me want to be more extraordinary.',
  'I hope someone tells you today how warm you are.',
  'You have the kind of mind that people remember.',
  'I hope someone tells you today how full of light you are.',
  'Being around you makes me want to be more one of a kind.',
  'I hope someone tells you today how graceful you are.',
  'Anyone lucky enough to know you can see how funny you are.',
  'You have the kind of calm that people remember.',
  'You have the kind of light that people remember.',
  'The world is a little softer because you\'re beautiful in it.',
  'Being around you makes me want to be more wonderful.',
  'Your heart is one of my favorite things about you.',
  'You make resilience look effortless.',
  'The world is a little softer because you\'re full of light in it.',
  'You have the kind of grace that people remember.',
  'Your humor is one of my favorite things about you.',
  'I still can\'t get over how sharp-witted you are.',
  'You make wit look effortless.',
  'The world is a little softer because you\'re brilliant in it.',
  'Being around you makes me want to be more brilliant.',
  'You make energy look effortless.',
  'Your calm is one of my favorite things about you.',
  'Anyone lucky enough to know you can see how soulful you are.',
  'I still can\'t get over how quietly powerful you are.',
  'I still can\'t get over how one of a kind you are.',
  'The world is a little softer because you\'re irreplaceable in it.',
  'You make charm look effortless.',
  'I still can\'t get over how clever you are.',
  'You make grace look effortless.',
  'The world is a little softer because you\'re funny in it.',
  'I still can\'t get over how genuine you are.',
  'I hope someone tells you today how thoughtful you are.',
  'You have the kind of smile that people remember.',
  'Your resilience is one of my favorite things about you.',
  'The world is a little softer because you\'re thoughtful in it.',
  'You have the kind of humor that people remember.',
  'I still can\'t get over how brave you are.',
  'Being around you makes me want to be more magnetic.',
  'I hope someone tells you today how strong you are.',
  'You make gentleness look effortless.',
  'You have the kind of strength that people remember.',
  'Anyone lucky enough to know you can see how genuine you are.',
  'You have the kind of generosity that people remember.',
  'Your strength is one of my favorite things about you.',
  'Anyone lucky enough to know you can see how sharp-witted you are.',
  'You make humor look effortless.',
  'You make spirit look effortless.',
  'I hope someone tells you today how comforting you are.',
  'The world is a little softer because you\'re magnetic in it.',
  'The world is a little softer because you\'re genuine in it.',
  'Your spirit is one of my favorite things about you.',
  'I still can\'t get over how down to earth you are.',
  'The world is a little softer because you\'re extraordinary in it.',
  'Being around you makes me want to be more quietly powerful.',
  'I still can\'t get over how irreplaceable you are.',
  'Your charm is one of my favorite things about you.',
  'Your confidence is one of my favorite things about you.',
  'The world is a little softer because you\'re one of a kind in it.',
  'Being around you makes me want to be more inspiring.',
  'I still can\'t get over how effortlessly cool you are.',
  'The world is a little softer because you\'re gentle in it.',
  'I still can\'t get over how captivating you are.',
  'You make creativity look effortless.',
  'I still can\'t get over how graceful you are.',
  'Your courage is one of my favorite things about you.',
  'You make presence look effortless.',
  'I hope someone tells you today how quietly powerful you are.',
  'Anyone lucky enough to know you can see how graceful you are.',
  'You have the kind of wit that people remember.',
  'I hope someone tells you today how wonderful you are.',
  'I still can\'t get over how radiant you are.',
  'The world is a little softer because you\'re strong in it.',
  'Being around you makes me want to be more funny.',
  'You have the kind of curiosity that people remember.',
  'I still can\'t get over how magnetic you are.',
  'Your energy is one of my favorite things about you.',
  'I hope someone tells you today how down to earth you are.',
  'The world is a little softer because you\'re charming in it.',
  'I hope someone tells you today how radiant you are.',
  'You have the kind of empathy that people remember.',
  'Your voice is one of my favorite things about you.',
  'The world is a little softer because you\'re lovely in it.',
  'You have the kind of glow that people remember.',
  'Being around you makes me want to be more full of light.',
  'You make strength look effortless.',
  'Your curiosity is one of my favorite things about you.',
  'The world is a little softer because you\'re inspiring in it.',
  'I hope someone tells you today how brilliant you are.',
  'Anyone lucky enough to know you can see how gentle you are.',
  'You make mind look effortless.',
  'Your kindness is one of my favorite things about you.',
  'Being around you makes me want to be more charming.',
  'Anyone lucky enough to know you can see how irreplaceable you are.',
  'I still can\'t get over how comforting you are.',
  'I hope someone tells you today how magnetic you are.',
  'Anyone lucky enough to know you can see how brave you are.',
  'Your glow is one of my favorite things about you.',
  'Your empathy is one of my favorite things about you.',
  'I hope someone tells you today how kind you are.',
  'You have the kind of charm that people remember.',
  'Your honesty is one of my favorite things about you.',
  'You make touch look effortless.',
  'Being around you makes me want to be more endlessly patient.',
  'You make patience look effortless.',
  'You make generosity look effortless.',
  'You make empathy look effortless.',
  'I still can\'t get over how endlessly patient you are.',
  'Being around you makes me want to be more radiant.',
  'You make honesty look effortless.',
  'I hope someone tells you today how clever you are.',
  'I hope someone tells you today how effortlessly cool you are.',
  'I still can\'t get over how warm you are.',
  'I hope someone tells you today how soulful you are.',
  'Your laugh is one of my favorite things about you.',
  'The world is a little softer because you\'re wonderful in it.',
  'I hope someone tells you today how lovely you are.',
  'You make voice look effortless.',
  'Anyone lucky enough to know you can see how strong you are.',
  'Your grace is one of my favorite things about you.',
  'Anyone lucky enough to know you can see how radiant you are.',
  'The world is a little softer because you\'re clever in it.',
  'I still can\'t get over how charming you are.',
  'You make light look effortless.',
  'You have the kind of gentleness that people remember.',
  'The world is a little softer because you\'re effortlessly cool in it.',
  'You have the kind of confidence that people remember.',
  'Anyone lucky enough to know you can see how full of light you are.',
  'I still can\'t get over how extraordinary you are.',
  'You have the kind of courage that people remember.',
  'The world is a little softer because you\'re warm in it.',
  'Being around you makes me want to be more soulful.',
  'I still can\'t get over how wonderful you are.',
  'You have the kind of touch that people remember.',
  'You have the kind of presence that people remember.',
  'Being around you makes me want to be more brave.',
  'The world is a little softer because you\'re comforting in it.',
  'The world is a little softer because you\'re quietly powerful in it.',
  'I still can\'t get over how kind you are.',
  'You make kindness look effortless.',
  'Your mind is one of my favorite things about you.',
  'Your touch is one of my favorite things about you.',
  'The world is a little softer because you\'re sharp-witted in it.',
  'Anyone lucky enough to know you can see how thoughtful you are.',
  'I still can\'t get over how full of light you are.',
  'Being around you makes me want to be more irreplaceable.',
  'I hope someone tells you today how beautiful you are.',
  'Anyone lucky enough to know you can see how endlessly patient you are.',
  'Anyone lucky enough to know you can see how brilliant you are.',
  'Your creativity is one of my favorite things about you.',
  'The world is a little softer because you\'re graceful in it.',
  'Your warmth is one of my favorite things about you.',
  'I still can\'t get over how strong you are.',
  'The world is a little softer because you\'re soulful in it.',
  'Anyone lucky enough to know you can see how magnetic you are.',
  'I still can\'t get over how soulful you are.',
  'Being around you makes me want to be more down to earth.',
  'The world is a little softer because you\'re captivating in it.',
  'You have the kind of spirit that people remember.',
  'Being around you makes me want to be more sharp-witted.',
  'I hope someone tells you today how gentle you are.',
  'You have the kind of laugh that people remember.',
  'The world is a little softer because you\'re kind in it.',
  'I still can\'t get over how beautiful you are.',
  'Your smile is one of my favorite things about you.',
  'You make glow look effortless.',
  'You have the kind of energy that people remember.',
  'The world is a little softer because you\'re brave in it.',
  'Anyone lucky enough to know you can see how wonderful you are.',
  'Anyone lucky enough to know you can see how charming you are.',
  'I still can\'t get over how thoughtful you are.',
  'Your loyalty is one of my favorite things about you.',
  'I hope someone tells you today how genuine you are.',
  'You have the kind of warmth that people remember.',
  'The world is a little softer because you\'re endlessly patient in it.',
  'Being around you makes me want to be more captivating.',
  'Anyone lucky enough to know you can see how down to earth you are.',
  'Being around you makes me want to be more comforting.',
  'Anyone lucky enough to know you can see how one of a kind you are.',
  'I still can\'t get over how lovely you are.',
];

const FORTUNES = [
  'Keep your heart open: cuddles is on its way.',
  'Expect a small dose of late-night talks before the day ends.',
  'The stars say today calls for more slow dancing in the kitchen.',
  'Today\'s forecast: mostly sunny, with a chance of compliments.',
  'Today\'s forecast: mostly sunny, with a chance of good news.',
  'The stars say today calls for more holding hands.',
  'Today you\'ll receive extra hugs.',
  'Someone is thinking about you right now.',
  'Today is a good day for holding hands.',
  'Keep your heart open: hugs is on its way.',
  'Somewhere, an old friend is smiling just thinking about you.',
  'Somewhere, someone close to you is smiling just thinking about you.',
  'Today\'s forecast: mostly sunny, with a chance of hugs.',
  'Warning: your favorite person misses you very much.',
  'Today\'s forecast: mostly sunny, with a chance of quiet comfort.',
  'Today is a good day for sharing dessert.',
  'Today you\'ll receive extra laughter.',
  'Today\'s forecast: mostly sunny, with a chance of laughter.',
  'Today you\'ll receive extra a long hug goodnight.',
  'Today is a good day for a warm hug.',
  'Today you\'ll receive extra quiet comfort.',
  'Expect a small dose of tight hugs before the day ends.',
  'The stars say today calls for more a lazy morning together.',
  'Your favorite person is thinking of you more than usual today.',
  'Warning: a certain someone misses you very much.',
  'Today you\'ll receive extra surprises.',
  'Expect a small dose of surprises before the day ends.',
  'Today is a good day for texting someone you love.',
  'Warning: an old friend misses you very much.',
  'Today is a good day for planning your next adventure together.',
  'Keep your heart open: late-night talks is on its way.',
  'Today\'s forecast: mostly sunny, with a chance of kisses.',
  'Expect a small dose of a long hug goodnight before the day ends.',
  'Keep your heart open: surprises is on its way.',
  'Today\'s forecast: mostly sunny, with a chance of tight hugs.',
  'Today is perfect for cuddles.',
  'Expect a small dose of sweet texts before the day ends.',
  'Expect a small dose of hugs before the day ends.',
  'Your smile will make someone\'s whole day.',
  'Today is a good day for slow dancing in the kitchen.',
  'A sweet message is heading your way soon.',
  'Today\'s forecast: mostly sunny, with a chance of surprises.',
  'Expect a small dose of a good laugh before the day ends.',
  'Somewhere, your favorite person is smiling just thinking about you.',
  'Today\'s forecast: mostly sunny, with a chance of a good laugh.',
  'Today\'s forecast: mostly sunny, with a chance of a little extra patience.',
  'Today is a good day for doing absolutely nothing together.',
  'Today you\'ll receive extra tight hugs.',
  'Today you\'ll receive extra kisses.',
  'Expect a small dose of a little extra patience before the day ends.',
  'The stars say today calls for more texting someone you love.',
  'Today\'s forecast: mostly sunny, with a chance of warm coffee.',
  'Today you\'ll receive extra good news.',
  'Warning: someone who loves you dearly misses you very much.',
  'Keep your heart open: tight hugs is on its way.',
  'The stars say today calls for more doing absolutely nothing together.',
  'The stars say today calls for more planning your next adventure together.',
  'Today you\'ll receive extra unexpected affection.',
  'Keep your heart open: quiet comfort is on its way.',
  'Keep your heart open: laughter is on its way.',
  'Keep your heart open: sweet texts is on its way.',
  'Keep your heart open: a little extra patience is on its way.',
  'Expect a small dose of good news before the day ends.',
  'Expect a small dose of laughter before the day ends.',
  'Keep your heart open: kisses is on its way.',
  'The stars say today calls for more cuddling on the couch.',
  'Today\'s forecast: mostly sunny, with a chance of sweet texts.',
  'The stars say today calls for more a warm hug.',
  'Keep your heart open: warm coffee is on its way.',
  'Today you\'ll receive extra late-night talks.',
  'Today\'s forecast: mostly sunny, with a chance of late-night talks.',
  'Expect a small dose of quiet comfort before the day ends.',
  'Expect a small dose of compliments before the day ends.',
  'Somewhere, someone who loves you dearly is smiling just thinking about you.',
  'Today you\'ll receive extra sweet texts.',
  'Today you\'ll receive extra a good laugh.',
  'Today you\'ll receive extra compliments.',
  'Today is a good day for a long phone call.',
  'Keep your heart open: a good laugh is on its way.',
  'Warning: someone close to you misses you very much.',
  'Today is a good day for a lazy morning together.',
  'Today, let yourself be a little more spoiled than usual.',
  'Good things happen when you least expect them, today included.',
  'Keep your heart open: good news is on its way.',
  'Expect a small dose of warm coffee before the day ends.',
  'Today\'s forecast: mostly sunny, with a chance of a long hug goodnight.',
  'Today you\'ll receive extra warm coffee.',
  'The stars say today calls for more a long phone call.',
  'Keep your heart open: compliments is on its way.',
  'Today\'s forecast: mostly sunny, with a chance of cuddles.',
  'Keep your heart open: a long hug goodnight is on its way.',
  'Somewhere, the person you least expect is smiling just thinking about you.',
  'Warning: someone misses you very much.',
  'Keep your heart open: unexpected affection is on its way.',
  'Expect a small dose of kisses before the day ends.',
  'Today you\'ll receive extra a little extra patience.',
  'Today is a good day for cuddling on the couch.',
  'A little extra kindness will come back to you today.',
  'The stars say today calls for more sharing dessert.',
  'Today you\'ll receive extra cuddles.',
];

const QUOTES = [
  'You feel like sunshine after a long winter.',
  'I\'d choose doing nothing with you over anything else.',
  'You are the favorite person I didn\'t know I was looking for.',
  'Thank you for existing.',
  'You are worth every mile, every wait, every \'not yet\'.',
  'You are the home I didn\'t know I was looking for.',
  'Home is wherever you are.',
  'You\'re the best \'yes\' I\'ve ever said.',
  'You make slow mornings feel like magic.',
  'You are my best friend.',
  'You are my happy ending and my favorite beginning.',
  'You\'re proof that good things do happen.',
  'You are the best story I never planned.',
  'With you, every ordinary Tuesday feels like a gift.',
  'My favorite sound is your sleepy good morning.',
  'I love you more than yesterday, less than tomorrow.',
  'You\'re my favorite \'what if\' that came true.',
  'You are the softest place my heart has ever landed.',
  'With you, every small moment feels like a gift.',
  'I\'d choose growing old with you over anything else.',
  'I fall for you a little more every day.',
  'You are my softest place to land.',
  'Loving you feels like breathing, quiet, constant, necessary.',
  'You are the best decision I didn\'t know I was looking for.',
  'You are the softest place to land I didn\'t know I was looking for.',
  'You are the reason I believe in soft things.',
  'My favorite sound is your footsteps at the door.',
  'You\'re the calm after every storm.',
  'You are my best decision.',
  'You make laundry days feel like magic.',
  'I\'d choose getting lost with you over anything else.',
  'I\'d choose quiet mornings with you over anything else.',
  'With you, even silence feels like love.',
  'You are the reason I look forward to forever.',
  'You\'re the best part of my every day.',
  'You\'re my favorite place.',
  'My favorite sound is your laugh.',
  'You are my always.',
  'With you, every rainy day feels like a gift.',
  'You\'re my favorite notification.',
  'You are the greatest adventure I didn\'t know I was looking for.',
  'You are my favorite hello.',
  'You are my greatest adventure.',
  'You are my forever person.',
  'Every morning with you is a good one.',
  'You make long drives feel like magic.',
  'I\'d choose building a life with you over anything else.',
  'I choose you, again and again.',
  'With you, every morning feels like a gift.',
  'With you, forever isn\'t long enough.',
  'You are the reason to smile I didn\'t know I was looking for.',
  'You make boring errands feel like magic.',
  'There is no version of my future without you in it.',
  'You are my home.',
  'I didn\'t know home could be a person until you.',
  'You are my favorite person.',
  'You make traffic jams feel like magic.',
  'You are the best friend I didn\'t know I was looking for.',
  'Every small moment with you is a good one.',
  'You are my safe place.',
  'I\'d pick this life with you, every single time.',
  'You are the safe place I didn\'t know I was looking for.',
  'With you, every evening feels like a gift.',
  'You are the favorite habit I didn\'t know I was looking for.',
  'You are my favorite everyday.',
  'You are the forever person I didn\'t know I was looking for.',
  'Every rainy day with you is a good one.',
  'Every love song makes more sense because of you.',
  'My favorite sound is your voice.',
  'Every quiet moment with you is a good one.',
  'I\'d choose staying in with you over anything else.',
  'With you, every quiet moment feels like a gift.',
  'You\'re my person, in every version of this life.',
  'Every ordinary Tuesday with you is a good one.',
  'My favorite sound is your name for me.',
  'You\'re my happiness.',
  'You are my favorite kind of lucky.',
  'Every long day with you is a good one.',
  'You are the favorite hello I didn\'t know I was looking for.',
  'You are my favorite habit.',
  'My heart already knew, long before I did.',
  'Forever yours.',
  'I\'d wait for you in any lifetime.',
  'You are my reason to smile.',
  'Every evening with you is a good one.',
  'I love you.',
  'You turned an ordinary life into a love story.',
  'With you, every long day feels like a gift.',
  'You make grocery runs feel like magic.',
  'You are my once in a lifetime.',
  'I love the ordinary days most, because you are in them.',
  'You are the softest yes my heart has ever said.',
  'Every road feels shorter when I know it leads to you.',
  'You are the peace I did not know I was praying for.',
  'I would choose your hand to hold in any crowd.',
  'You are my favorite reason to stay up late.',
  'You make the whole world feel a little kinder.',
  'My favorite view is you, laughing at something small.',
  'You are the last thought I want every night.',
  'I never believed in forever until I met you.',
];

/* --------------------------------------------------------------------------
   Shuffle-bag helper: returns items in random order without repeating
   until every item has been shown once, then reshuffles.
   -------------------------------------------------------------------------- */
function createShuffleBag(items) {
  let bag = [];
  function refill() {
    bag = items.map((_, i) => i);
    for (let i = bag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
  }
  refill();
  return function next() {
    if (bag.length === 0) refill();
    const idx = bag.pop();
    return items[idx];
  };
}

/* --------------------------------------------------------------------------
   2. LOADING SCREEN
   -------------------------------------------------------------------------- */
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;
  const minTime = new Promise((res) => setTimeout(res, 2400));
  const ready = new Promise((res) => {
    if (document.readyState === 'complete') res();
    else window.addEventListener('load', res, { once: true });
  });
  Promise.all([minTime, ready]).then(() => {
    screen.classList.add('hide');
    screen.setAttribute('aria-hidden', 'true');
  });
}

/* --------------------------------------------------------------------------
   3. BACKGROUND FLOATING HEARTS
   -------------------------------------------------------------------------- */
function initBackgroundHearts() {
  const container = document.getElementById('bg-hearts');
  if (!container) return;
  const HEART_COUNT = 14;
  const svgHeart = (size) => `
    <svg viewBox="0 0 100 90" width="${size}" height="${size * 0.9}">
      <path fill="currentColor" d="M50 84 C 20 62, 4 42, 4 25 C 4 10, 16 2, 28 2 C 38 2, 46 8, 50 18 C 54 8, 62 2, 72 2 C 84 2, 96 10, 96 25 C 96 42, 80 62, 50 84 Z"/>
    </svg>`;
  for (let i = 0; i < HEART_COUNT; i++) {
    const el = document.createElement('div');
    el.className = 'bg-heart';
    const size = 14 + Math.random() * 26;
    const left = Math.random() * 100;
    const duration = 16 + Math.random() * 14;
    const delay = Math.random() * -duration;
    el.style.left = `${left}vw`;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;
    el.innerHTML = svgHeart(size);
    container.appendChild(el);
  }
}

/* --------------------------------------------------------------------------
   4. NAVIGATION, mobile toggle + scroll-spy
   -------------------------------------------------------------------------- */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sections = Array.from(document.querySelectorAll('main > section[id], .hero[id]'));
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
  if (!sections.length || !navAnchors.length) return;

  const byId = {};
  navAnchors.forEach((a) => { byId[a.dataset.section] = a; });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove('active'));
        const link = byId[entry.target.id];
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach((s) => observer.observe(s));
}

/* --------------------------------------------------------------------------
   5. HERO / INTERACTIVE HEART
   -------------------------------------------------------------------------- */
function initHeroHeart() {
  const heart = document.getElementById('hero-heart');
  const msgEl = document.getElementById('hero-heart-msg');
  if (!heart || !msgEl) return;

  const nextQuote = createShuffleBag(QUOTES);
  let clickCount = 0;

  heart.addEventListener('click', () => {
    msgEl.textContent = nextQuote();
    heart.style.animation = 'none';
    // eslint-disable-next-line no-unused-expressions
    heart.offsetHeight; /* reflow to restart animation */
    heart.style.animation = '';
    spawnFloatingHearts(heart, 6, 2200);

    clickCount++;
    if (clickCount === 10) unlockEasterEgg('heart-ten-clicks', 'You clicked it ten times. I noticed. I love you too. 💗');
  });
}

function spawnFloatingHearts(originEl, count, life) {
  const rect = originEl.getBoundingClientRect();
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'floating-heart-burst';
    span.textContent = '❤';
    const jitterX = (Math.random() - 0.5) * 80;
    span.style.left = `${rect.left + rect.width / 2 + jitterX}px`;
    span.style.top = `${rect.top + rect.height / 2}px`;
    span.style.fontSize = `${12 + Math.random() * 10}px`;
    span.style.animationDelay = `${Math.random() * 0.3}s`;
    document.body.appendChild(span);
    setTimeout(() => span.remove(), life);
  }
}

/* --------------------------------------------------------------------------
   6. LOVE COUNTER
   -------------------------------------------------------------------------- */
function initLoveCounter() {
  const els = {
    years: document.getElementById('c-years'),
    months: document.getElementById('c-months'),
    days: document.getElementById('c-days'),
    hours: document.getElementById('c-hours'),
    minutes: document.getElementById('c-minutes'),
    seconds: document.getElementById('c-seconds'),
  };
  if (!els.years) return;

  function update() {
    const now = new Date();
    let years = now.getFullYear() - RELATIONSHIP_START.getFullYear();
    let months = now.getMonth() - RELATIONSHIP_START.getMonth();
    let days = now.getDate() - RELATIONSHIP_START.getDate();
    let hours = now.getHours() - RELATIONSHIP_START.getHours();
    let minutes = now.getMinutes() - RELATIONSHIP_START.getMinutes();
    let seconds = now.getSeconds() - RELATIONSHIP_START.getSeconds();

    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) { months += 12; years--; }

    els.years.textContent = Math.max(years, 0);
    els.months.textContent = Math.max(months, 0);
    els.days.textContent = Math.max(days, 0);
    els.hours.textContent = Math.max(hours, 0);
    els.minutes.textContent = Math.max(minutes, 0);
    els.seconds.textContent = Math.max(seconds, 0);
  }

  update();
  setInterval(update, 1000);
}

/* --------------------------------------------------------------------------
   7. TODAY'S LOVE NOTE, deterministic pick, different every day of the year,
      built from word pools so it's easy to expand without pasting 365 lines.
   -------------------------------------------------------------------------- */
function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
}

const NOTE_OPENERS = [
  "Good morning, beautiful.", "Just so you know,", "A little reminder:", "Before your day gets busy ,",
  "Somewhere between yesterday and tomorrow,", "On today of all days,", "While you're reading this,",
  "Quick thought:", "First thing today ,", "Here's your daily dose of us:"
];
const NOTE_MIDDLES = [
  "I want you to know how proud I am of you.", "I'm grateful for one more day loving you.",
  "you crossed my mind and made me smile.", "I hope today is gentle with you.",
  "I still think you're the best thing that ever happened to me.", "you are exactly where you're supposed to be.",
  "I'm cheering for you, quietly, from wherever I am.", "the world got a little brighter because you're in it.",
  "I hope you remember how loved you are.", "I'm sending you all the calm and courage you need today.",
  "you deserve every good thing coming your way.", "I fall for you a little more with each ordinary day.",
  "you make my life feel like it makes sense.", "I'm thankful for the little life we're building together.",
  "you are enough, exactly as you are, today."
];
const NOTE_CLOSERS = [
  "I love you.", "Always yours.", "Have a beautiful day.", "I'll be thinking of you.",
  "Go be wonderful, you already are.", "See you soon, my love.", "Talk later, love you lots.",
  "That's all. I just love you.", "Carry this with you today.", "Forever your favorite fan."
];

function getTodayNote(date) {
  const day = getDayOfYear(date);
  const openerIdx = day % NOTE_OPENERS.length;
  const middleIdx = Math.floor(day / NOTE_OPENERS.length) % NOTE_MIDDLES.length;
  const closerIdx = Math.floor(day / (NOTE_OPENERS.length * NOTE_MIDDLES.length)) % NOTE_CLOSERS.length;
  return `${NOTE_OPENERS[openerIdx]} ${NOTE_MIDDLES[middleIdx]} ${NOTE_CLOSERS[closerIdx]}`;
}

function initTodayNote() {
  const noteEl = document.getElementById('today-note');
  const dateEl = document.getElementById('today-date');
  if (!noteEl) return;
  const now = new Date();
  noteEl.textContent = getTodayNote(now);
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}

/* --------------------------------------------------------------------------
   8. MODALS (Love Letter, Secret Message, Envelope reader)
   -------------------------------------------------------------------------- */
function initModals() {
  const overlays = document.querySelectorAll('.modal-overlay');
  let lastFocused = null;

  function openModal(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return;
    lastFocused = document.activeElement;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.open));
  });

  overlays.forEach((overlay) => {
    overlay.querySelectorAll('[data-close]').forEach((closer) => {
      closer.addEventListener('click', () => closeModal(overlay));
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach((overlay) => {
        if (overlay.classList.contains('open')) closeModal(overlay);
      });
    }
  });

  window.__openModal = openModal;
  window.__closeAllModals = () => overlays.forEach((o) => closeModal(o));
}

/* --------------------------------------------------------------------------
   9. OPEN WHEN... ENVELOPES
   -------------------------------------------------------------------------- */
function initEnvelopes() {
  const grid = document.getElementById('envelope-grid');
  if (!grid) return;
  OPEN_WHEN_ENVELOPES.forEach((env) => {
    const btn = document.createElement('button');
    btn.className = 'envelope-card';
    btn.innerHTML = `<span class="envelope-label">${env.label}</span>`;
    btn.addEventListener('click', () => {
      const titleEl = document.getElementById('envelope-reader-title');
      const textEl = document.getElementById('envelope-reader-text');
      if (titleEl) titleEl.textContent = env.label;
      if (textEl) textEl.textContent = env.text;
      window.__openModal('modal-envelope-reader');
    });
    grid.appendChild(btn);
  });
}

/* --------------------------------------------------------------------------
   10. REASONS I LOVE YOU
   -------------------------------------------------------------------------- */
function initReasons() {
  const textEl = document.getElementById('reason-text');
  const indexEl = document.getElementById('reason-index');
  const totalEl = document.getElementById('reason-total');
  if (!textEl) return;

  let current = 0;
  totalEl.textContent = REASONS.length;

  function render() {
    textEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = REASONS[current];
      indexEl.textContent = current + 1;
      textEl.style.opacity = '1';
    }, 180);
  }
  textEl.style.transition = 'opacity 0.25s ease';
  render();

  document.getElementById('reason-prev').addEventListener('click', () => {
    current = (current - 1 + REASONS.length) % REASONS.length;
    render();
  });
  document.getElementById('reason-next').addEventListener('click', () => {
    current = (current + 1) % REASONS.length;
    render();
  });
  document.getElementById('reason-random').addEventListener('click', () => {
    let next = current;
    while (next === current && REASONS.length > 1) {
      next = Math.floor(Math.random() * REASONS.length);
    }
    current = next;
    render();
  });
}

/* --------------------------------------------------------------------------
   11. COMPLIMENT GENERATOR
   -------------------------------------------------------------------------- */
function initCompliments() {
  const textEl = document.getElementById('compliment-text');
  const btn = document.getElementById('compliment-btn');
  if (!textEl || !btn) return;

  const nextCompliment = createShuffleBag(COMPLIMENTS);

  function show() {
    textEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = nextCompliment();
      textEl.style.opacity = '1';
    }, 180);
  }
  textEl.style.transition = 'opacity 0.25s ease';
  show();
  btn.addEventListener('click', show);
}

/* --------------------------------------------------------------------------
   12. SECRET MESSAGE
   -------------------------------------------------------------------------- */
function initSecretMessage() {
  const form = document.getElementById('secret-form');
  if (!form) return;
  const input = document.getElementById('secret-input');
  const feedback = document.getElementById('secret-feedback');
  const reveal = document.getElementById('secret-reveal');
  const revealText = document.getElementById('secret-reveal-text');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim().toLowerCase();
    if (SECRET_ACCEPTED_ANSWERS.includes(val)) {
      feedback.textContent = '';
      revealText.textContent = SECRET_HIDDEN_MESSAGE;
      reveal.hidden = false;
    } else {
      feedback.textContent = 'Almost ❤️ Try again.';
      reveal.hidden = true;
    }
  });
}

/* --------------------------------------------------------------------------
   14. LOVE FORTUNE
   -------------------------------------------------------------------------- */
function initFortune() {
  const btn = document.getElementById('fortune-btn');
  const textEl = document.getElementById('fortune-text');
  if (!btn || !textEl) return;
  const nextFortune = createShuffleBag(FORTUNES);

  btn.addEventListener('click', () => {
    textEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = nextFortune();
      textEl.style.opacity = '1';
    }, 180);
  });
  textEl.style.transition = 'opacity 0.25s ease';
}

/* --------------------------------------------------------------------------
   15. SURPRISE BUTTON
   -------------------------------------------------------------------------- */
function initSurprise() {
  const btn = document.getElementById('surprise-btn');
  const quoteEl = document.getElementById('surprise-quote');
  if (!btn || !quoteEl) return;
  const nextQuote = createShuffleBag(QUOTES);
  let glow;

  btn.addEventListener('click', () => {
    if (!glow) {
      glow = document.createElement('div');
      glow.className = 'surprise-glow';
      document.body.appendChild(glow);
    }
    glow.classList.add('show');

    const heroHeart = document.getElementById('hero-heart');
    if (heroHeart) {
      heroHeart.style.animationDuration = '0.6s, 5.5s';
      setTimeout(() => { heroHeart.style.animationDuration = ''; }, 4000);
    }

    for (let i = 0; i < 10; i++) {
      setTimeout(() => spawnSparkle(), i * 140);
    }
    spawnFloatingHearts(btn, 8, 2600);

    quoteEl.textContent = nextQuote();

    setTimeout(() => glow.classList.remove('show'), 4000);
  });
}

function spawnSparkle() {
  const span = document.createElement('span');
  span.className = 'surprise-sparkle';
  span.textContent = '✨';
  span.style.left = `${Math.random() * 100}vw`;
  span.style.top = `${60 + Math.random() * 30}vh`;
  document.body.appendChild(span);
  setTimeout(() => span.remove(), 1900);
}

/* --------------------------------------------------------------------------
   16. HIDDEN EASTER EGGS
   -------------------------------------------------------------------------- */
function unlockEasterEgg(key, message) {
  if (unlockEasterEgg.unlocked && unlockEasterEgg.unlocked.has(key)) return;
  if (!unlockEasterEgg.unlocked) unlockEasterEgg.unlocked = new Set();
  unlockEasterEgg.unlocked.add(key);

  document.body.classList.add('egg-glow');
  setTimeout(() => document.body.classList.remove('egg-glow'), 6000);

  const toast = document.createElement('div');
  toast.className = 'egg-toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 3600);
}

function initEasterEggs() {
  /* Typing "love" anywhere on the page */
  let typedBuffer = '';
  document.addEventListener('keydown', (e) => {
    if (e.key.length !== 1) return;
    typedBuffer = (typedBuffer + e.key.toLowerCase()).slice(-4);
    if (typedBuffer === 'love') {
      unlockEasterEgg('typed-love', "You typed 'love'. Funny, that's exactly what I feel for you. 💕");
    }
  });

  /* Holding the mouse on the big heart for 5 seconds */
  const heart = document.getElementById('hero-heart');
  if (heart) {
    let holdTimer = null;
    const start = () => {
      holdTimer = setTimeout(() => {
        unlockEasterEgg('heart-hold', "Five whole seconds, just for me? I'll take it. I love you.");
      }, 5000);
    };
    const cancel = () => clearTimeout(holdTimer);
    heart.addEventListener('mousedown', start);
    heart.addEventListener('touchstart', start, { passive: true });
    ['mouseup', 'mouseleave', 'touchend', 'touchcancel'].forEach((evt) => heart.addEventListener(evt, cancel));
  }

  /* Tiny hidden heart in the footer */
  const footer = document.getElementById('footer');
  if (footer) {
    const hidden = document.createElement('span');
    hidden.textContent = '·';
    hidden.setAttribute('aria-hidden', 'true');
    hidden.style.cssText = 'cursor:default; opacity:0.15; padding:0 4px; transition: opacity .3s ease;';
    hidden.addEventListener('mouseenter', () => { hidden.style.opacity = '0.6'; });
    hidden.addEventListener('mouseleave', () => { hidden.style.opacity = '0.15'; });
    hidden.addEventListener('click', () => {
      unlockEasterEgg('hidden-heart', "You found the tiny hidden heart. Of course you did, you notice everything.");
    });
    footer.appendChild(hidden);
  }
}

/* --------------------------------------------------------------------------
   17. BOOT
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initBackgroundHearts();
  initNav();
  initHeroHeart();
  initLoveCounter();
  initTodayNote();
  initModals();
  initEnvelopes();
  initReasons();
  initCompliments();
  initSecretMessage();
  initFortune();
  initSurprise();
  initEasterEggs();
});
