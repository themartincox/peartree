// Central source of truth for practice information
export const practiceInfo = {
  name: "Pear Tree Dental",
  address: {
    street: "22 Nottingham Road",
    city: "Burton Joyce",
    county: "Nottingham",
    postcode: "NG14 5AL",
    full: "22 Nottingham Road, Burton Joyce, Nottingham NG14 5AE"
  },
  contact: {
    phone: "0115 931 2935",
    email: "hello@peartree.dental",
    emergencyPhone: "0115 931 2935"
  },
  openingHours: [
    { day: "Monday", hours: "8:45 AM - 5:00 PM", isOpen: true, emergency: false },
    { day: "Tuesday", hours: "8:45 AM - 5:00 PM", isOpen: true, emergency: false },
    { day: "Wednesday", hours: "8:45 AM - 5:00 PM", isOpen: true, emergency: false },
    { day: "Thursday", hours: "8:45 AM - 5:00 PM", isOpen: true, emergency: false },
    { day: "Friday", hours: "8:00 AM - 3:30 PM", isOpen: true, emergency: false },
    { day: "Saturday", hours: "Closed", isOpen: false, emergency: false },
    { day: "Sunday", hours: "Closed", isOpen: false, emergency: false }
  ],
  // Formatted for display
  openingHoursDisplay: {
    weekdays: "Monday - Thursday: 8:45 AM - 5:00 PM",
    friday: "Friday: 8:00 AM - 3:30 PM",
    weekend: "Saturday - Sunday: Closed",
    emergency: "Emergency appointments available by calling 0115 931 2935"
  },
  // For structured data/schema
  openingHoursStructured: [
    { dayOfWeek: "Monday", opens: "08:45", closes: "17:00" },
    { dayOfWeek: "Tuesday", opens: "08:45", closes: "17:00" },
    { dayOfWeek: "Wednesday", opens: "08:45", closes: "17:00" },
    { dayOfWeek: "Thursday", opens: "08:45", closes: "17:00" },
    { dayOfWeek: "Friday", opens: "08:00", closes: "15:30" },
    { dayOfWeek: "Saturday", opens: null, closes: null },
    { dayOfWeek: "Sunday", opens: null, closes: null }
  ]
};

export default practiceInfo;
