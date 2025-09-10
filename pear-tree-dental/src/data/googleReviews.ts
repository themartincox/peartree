interface GoogleReview {
  id: string;
  author: string;
  rating: 5; // Only 5-star reviews
  date: string;
  review: string;
  verified: boolean;
  profilePhoto?: string;
  helpful?: number;
  response?: {
    author: string;
    date: string;
    text: string;
  };
}

export const googleReviews: GoogleReview[] = [
  {
    id: "google-1",
    author: "Jane Woodcock",
    rating: 5,
    date: "1 day ago",
    review: "An absolute top class dental centre, all the staff are lovely, friendly and very helpful. Javaad Mirza is a wonderful dentist who takes time to explain everything and makes you feel completely at ease.",
    verified: true,
    helpful: 12
  },
  {
    id: "google-2",
    author: "Mike Poyzer",
    rating: 5,
    date: "2 days ago",
    review: "I recently visited the Pear Tree Dental Centre. The reception staff were welcoming and friendly. The clinic looks well maintained and modern. The dentist was professional and took time to explain the treatment options clearly.",
    verified: true,
    helpful: 8
  },
  {
    id: "google-3",
    author: "Phil Colbourn",
    rating: 5,
    date: "2 days ago",
    review: "Two extractions very carefully done with good follow up advice. Could not have been better 😊",
    verified: true,
    helpful: 15
  },
  {
    id: "google-4",
    author: "Patricia Bartlett",
    rating: 5,
    date: "3 days ago",
    review: "Really pleased with the results on my few remaining lower teeth of whitening them and of building them up to be bigger. Very professional service throughout.",
    verified: true,
    helpful: 9
  },
  {
    id: "google-5",
    author: "danielle carr",
    rating: 5,
    date: "2 weeks ago",
    review: "Cant recommend Janet enough, she always puts me at ease and explains in detail what she is doing she advices the best option and is 100% focused on patient care. The receptionist was very helpful and freindly to.",
    verified: true,
    helpful: 18
  },
  {
    id: "google-6",
    author: "Peter Baker",
    rating: 5,
    date: "2 weeks ago",
    review: "I have been with the practice for about a year now and have been extremely impressed with the advice, the staff and the quality of care. Everyone is professional and makes you feel welcome.",
    verified: true,
    helpful: 6,
    response: {
      author: "Pear Tree Dental Centre",
      date: "2 weeks ago",
      text: "Thank you Peter for your kind words and feedback on the service we provide. We look forward to welcoming you back at your next appointment."
    }
  },
  {
    id: "google-7",
    author: "Fiona",
    rating: 5,
    date: "3 weeks ago",
    review: "In the time I have been under Mr Mirza's care, I can honestly say he has reduced my anxiety levels hugely when I'm due a dental appointment. He's so patient and understanding.",
    verified: true,
    helpful: 22,
    response: {
      author: "Pear Tree Dental Centre",
      date: "3 weeks ago",
      text: "Thankyou Fiona, We are glad to hear your dental anxiety has reduced. Our Aim at Pear Tree Dental is to provide comprehensive treatment whilst keeping patients at ease."
    }
  },
  {
    id: "google-8",
    author: "David Wakelin",
    rating: 5,
    date: "3 weeks ago",
    review: "PearTree is a first class dentist practice and my experiences with the whole service has always been excellent. Professional, caring staff who really know what they're doing.",
    verified: true,
    helpful: 11
  },
  {
    id: "google-9",
    author: "Geri Wright",
    rating: 5,
    date: "3 weeks ago",
    review: "Always a pleasant experience to visit PearTree Dental Practice. Very professional treatment and service. Feel so lucky to have Imrana looking after my dental needs. Reception staff all very helpful and polite.",
    verified: true,
    helpful: 7,
    response: {
      author: "Pear Tree Dental Centre",
      date: "3 weeks ago",
      text: "Thankyou, we are blessed to have such amazing patients like yourself Geri. Imrana and the team look forward to welcoming you back."
    }
  },
  {
    id: "google-10",
    author: "Helen Byers",
    rating: 5,
    date: "4 weeks ago",
    review: "My appointment with Jade was on time. She did a scale and polish. Jade is so gentle the best scale and polish I have ever had!",
    verified: true,
    helpful: 25,
    response: {
      author: "Pear Tree Dental Centre",
      date: "4 weeks ago",
      text: "Helen, Jade was so pleased to read your feedback from your hygiene appointment with her and that you were happy with the treatment provided and found her to be gentle. Thank you for your kind words."
    }
  },
  {
    id: "google-11",
    author: "Trevor Edwards",
    rating: 5,
    date: "6 weeks ago",
    review: "Excellent service I felt most welcome from the very first minute. I was given a thorough examination then asked what I would like to achieve with my smile. Very professional approach.",
    verified: true,
    helpful: 8,
    response: {
      author: "Pear Tree Dental Centre",
      date: "5 weeks ago",
      text: "Trevor, the team are delighted to read your comments from your recent visit to the Dental Centre and look forward to welcoming you back at your next appointment. Thank you for your kind words."
    }
  },
  {
    id: "google-12",
    author: "Anne Bennett",
    rating: 5,
    date: "6 weeks ago",
    review: "Javaad is so patient as I am quite nervy around dentists he does a fantastic job of saving my teeth thank you Javaad",
    verified: true,
    helpful: 13,
    response: {
      author: "Pear Tree Dental Centre",
      date: "5 weeks ago",
      text: "Anne, we are pleased to read that you found Javaad to be patient and proficient, thank you for your kind words."
    }
  },
  {
    id: "google-13",
    author: "Collette Chasseaud",
    rating: 5,
    date: "6 weeks ago",
    review: "Outstanding dental care that truly transforms! The team goes above and beyond to ensure excellent results. I'm finally confident about my smile again.",
    verified: true,
    helpful: 16,
    response: {
      author: "Pear Tree Dental Centre",
      date: "5 weeks ago",
      text: "Thank you Collette! What an absolute joy to read, the team are delighted you are so happy! Especially pleased that you have finally found the right dental health provider after so many earlier disappointments!"
    }
  },
  {
    id: "google-14",
    author: "Marie Rigby",
    rating: 5,
    date: "11 weeks ago",
    review: "After visiting a dentist for over 50 years, I can honestly say this is the best one I have been to. Polite, organised, professional and for once in my life, I am not stressed about my appointments.",
    verified: true,
    helpful: 10,
    response: {
      author: "Pear Tree Dental Centre",
      date: "4 weeks ago",
      text: "Marie, the team are not only delighted to read your kind words, but pleased to hear that you no longer feel anxious about dental appointments."
    }
  },
  {
    id: "google-15",
    author: "marie quinn",
    rating: 5,
    date: "11 weeks ago",
    review: "Javaad you have actually made me smile and I've gained so much confidence with my smile. It's been just over 24hrs since my treatment and I'm already receiving compliments. Thank you so much!",
    verified: true,
    helpful: 14
  },
  {
    id: "google-16",
    author: "Dawn Ireland",
    rating: 5,
    date: "14 Oct 2023",
    review: "With all the difficulty of finding a dentist at the moment I just can't believe how lucky I've been to find Pear Tree Dental. Professional, caring service that goes above and beyond.",
    verified: true,
    helpful: 19
  },
  {
    id: "google-17",
    author: "carys leaves",
    rating: 5,
    date: "27 Jun 2023",
    review: "After years of neglect during childhood Javaad Mirza has pretty much saved my teeth from being worn away completely. He is patient, understanding and his work is exceptional. I cannot recommend him highly enough.",
    verified: true,
    helpful: 21
  },
  {
    id: "google-18",
    author: "Elizabeth Buckley-Goddard",
    rating: 5,
    date: "4 Jul 2023",
    review: "Best dentist I've ever had. Couldn't recommend more highly!",
    verified: true,
    helpful: 12
  }
];

export const googleReviewsStats = {
  totalReviews: 486,
  averageRating: 4.9,
  fiveStarCount: 460,
  fourStarCount: 21,
  threeStarCount: 3,
  twoStarCount: 1,
  oneStarCount: 1,
  recentReviews: googleReviews.length,
  verified: googleReviews.filter(review => review.verified).length
};
