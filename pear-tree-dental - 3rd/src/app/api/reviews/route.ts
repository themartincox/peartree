import { NextResponse } from 'next/server';

// Hardcoded genuine Google Reviews from the website
const reviews = [
  {
    id: "1",
    author: "Marie Q",
    rating: 5,
    text: "Javaad you have actually made me smile and I've gained so much confidence with my smile. It's been just over 24hrs since you fitted my composite and my family and friends are amazed at the result, as am I! Thank you so much for your time and patience with a rather nervous patient.",
    date: "2 weeks ago"
  },
  {
    id: "2",
    author: "Meekz",
    rating: 5,
    text: "Thanx Pear Tree Dentist! Janet is always so friendly and makes me feel great about looking after my teeth. She always goes above and beyond, I would definitely recommend Pear Tree Dentist in Burton Joyce.",
    date: "1 month ago"
  },
  {
    id: "3",
    author: "Marie R",
    rating: 5,
    text: "After visiting a dentist for over 50 years, I can honestly say this is the best one I have been to. Polite, organised, professional and for once in my life, I am not stressed about my appointments.",
    date: "3 weeks ago"
  },
  {
    id: "4",
    author: "Miriam B",
    rating: 5,
    text: "Had to join here with my 2 small boys as nowhere nearer was taking NHS patients but am really pleased we did because the dentist Imrana is very good at her job and very reassuring. Great with my two boys age 1 and 3. Would recommend!",
    date: "1 week ago"
  },
  {
    id: "5",
    author: "Emily M",
    rating: 5,
    text: "I've been coming to this dentist for 30 years since the age of 3! I travel 45 minutes to get here and I wouldn't change it. Janet is absolutely brilliant and has always looked after me and all the family that see her too.",
    date: "2 months ago"
  },
  {
    id: "6",
    author: "Charlotte P",
    rating: 5,
    text: "I'm frightened about going to the dentist. So glad I found this one. Great dentist. She is very patient and positive with me. Wouldn't go anywhere else!",
    date: "5 days ago"
  },
  {
    id: "7",
    author: "Ian P",
    rating: 5,
    text: "Javaad is an absolutely lovely chap and a truly skilled Dentist. No one wants a tooth extraction, but if I'm having one done, it's him I want on the business end. Cheers chap.",
    date: "1 week ago"
  }
];

// Return Google Reviews data formatted to match what the GoogleReviews component expects
export async function GET() {
  // Transform the reviews to match the expected format
  const formattedReviews = reviews.map(review => ({
    author_name: review.author,
    rating: review.rating,
    text: review.text,
    time: Date.now(), // Current timestamp as fallback
    relative_time_description: review.date,
    profile_photo_url: null // No profile photos available
  }));

  // Return the reviews and stats
  return NextResponse.json({
    rating: 5.0,
    total: 628,
    reviews: formattedReviews
  });
}
