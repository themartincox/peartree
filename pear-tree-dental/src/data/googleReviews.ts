interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  review: string;
  date: string;
  verified?: boolean;
  helpful?: number;
  response?: {
    author: string;
    text: string;
    date: string;
  };
}

interface GoogleReviewStats {
  averageRating: number;
  totalReviews: number;
  fiveStarCount: number;
}

export const googleReviewsStats: GoogleReviewStats = {
  averageRating: 5.0,
  totalReviews: 628,
  fiveStarCount: 596
};

export const googleReviews: GoogleReview[] = [
  {
    id: "1",
    author: "Marie Q",
    rating: 5,
    review: "Javaad you have actually made me smile and I've gained so much confidence with my smile. It's been just over 24hrs since you fitted my composite and my family and friends are amazed at the result, as am I! Thank you so much for your time and patience with a rather nervous patient.",
    date: "2 weeks ago",
    verified: true,
    helpful: 7
  },
  {
    id: "2",
    author: "Meekz",
    rating: 5,
    review: "Thanx Pear Tree Dentist! Janet is always so friendly and makes me feel great about looking after my teeth. She always goes above and beyond, I would definitely recommend Pear Tree Dentist in Burton Joyce.",
    date: "1 month ago",
    verified: true,
    helpful: 3
  },
  {
    id: "3",
    author: "Marie R",
    rating: 5,
    review: "After visiting a dentist for over 50 years, I can honestly say this is the best one I have been to. Polite, organised, professional and for once in my life, I am not stressed about my appointments.",
    date: "3 weeks ago",
    verified: true,
    helpful: 12,
    response: {
      author: "Pear Tree Dental",
      text: "Thank you Marie for your kind review! We're delighted to hear about your positive experience and that we've been able to make your dental visits stress-free. We appreciate your feedback and look forward to continuing to provide you with excellent care.",
      date: "2 weeks ago"
    }
  },
  {
    id: "4",
    author: "Miriam B",
    rating: 5,
    review: "Had to join here with my 2 small boys as nowhere nearer was taking NHS patients but am really pleased we did because the dentist Imrana is very good at her job and very reassuring. Great with my two boys age 1 and 3. Would recommend!",
    date: "1 week ago",
    verified: true
  },
  {
    id: "5",
    author: "Emily M",
    rating: 5,
    review: "I've been coming to this dentist for 30 years since the age of 3! I travel 45 minutes to get here and I wouldn't change it. Janet is absolutely brilliant and has always looked after me and all the family that see her too.",
    date: "2 months ago",
    verified: true,
    helpful: 9
  },
  {
    id: "6",
    author: "Charlotte P",
    rating: 5,
    review: "I'm frightened about going to the dentist. So glad I found this one. Great dentist. She is very patient and positive with me. Wouldn't go anywhere else!",
    date: "5 days ago",
    verified: true
  }
];
