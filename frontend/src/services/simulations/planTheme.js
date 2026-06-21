export const planTheme = {
  free: {
    name: "Free",
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    softBadge: "bg-violet-50 text-violet-600",
    imageBadge: "bg-violet-50 text-violet-700",
    iconBox: "bg-violet-50 text-violet-600",
    title: "text-blue-950",
    mutedIcon: "text-violet-600",
    backButton:
      "hover:border-violet-100 hover:bg-violet-50 hover:text-violet-600",
    timerBox: "border-violet-100 bg-violet-50 text-violet-700",
    timerIcon: "text-violet-600",
    button:
      "bg-violet-600 text-white hover:bg-violet-700 focus-visible:ring-violet-200",
    lightButton:
      "border-violet-100 bg-white text-violet-700 hover:bg-violet-50",
    activeQuestion:
      "border-violet-500 bg-violet-600 text-white shadow-violet-200",
    answeredQuestion:
      "border-violet-100 bg-violet-50 text-violet-700 hover:border-violet-200",
    reviewQuestion:
      "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300",
    selectedAlternative:
      "border-violet-400 bg-violet-50 shadow-sm ring-4 ring-violet-100",
    selectedLetter: "bg-violet-600 text-white",
    selectedCheck: "text-violet-700",
    hoverAlternative: "hover:border-violet-200 hover:bg-violet-50/40",
    progress: "bg-violet-600",
  },

  pro: {
    name: "Pro",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    softBadge: "bg-blue-50 text-blue-600",
    imageBadge: "bg-blue-50 text-blue-700",
    iconBox: "bg-blue-50 text-blue-600",
    title: "text-blue-950",
    mutedIcon: "text-blue-700",
    backButton: "hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700",
    timerBox: "border-blue-100 bg-blue-50 text-blue-700",
    timerIcon: "text-blue-700",
    button:
      "bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-blue-200",
    lightButton: "border-blue-100 bg-white text-blue-700 hover:bg-blue-50",
    activeQuestion: "border-blue-500 bg-blue-700 text-white shadow-blue-200",
    answeredQuestion:
      "border-blue-100 bg-blue-50 text-blue-700 hover:border-blue-200",
    reviewQuestion:
      "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300",
    selectedAlternative:
      "border-blue-400 bg-blue-50 shadow-sm ring-4 ring-blue-100",
    selectedLetter: "bg-blue-700 text-white",
    selectedCheck: "text-blue-700",
    hoverAlternative: "hover:border-blue-200 hover:bg-blue-50/40",
    progress: "bg-blue-700",
  },

  premium: {
    name: "Premium",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    softBadge: "bg-amber-50 text-amber-700",
    imageBadge: "bg-amber-50 text-amber-700",
    iconBox: "bg-amber-50 text-amber-600",
    title: "text-blue-950",
    mutedIcon: "text-amber-600",
    backButton: "hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700",
    timerBox: "border-amber-200 bg-amber-50 text-amber-700",
    timerIcon: "text-amber-600",

    button:
      "bg-blue-950 text-white hover:bg-violet-700 focus-visible:ring-amber-200",
    lightButton: "border-amber-200 bg-white text-amber-700 hover:bg-amber-50",

    activeQuestion:
      "border-amber-400 bg-amber-400 text-blue-950 shadow-amber-200",
    answeredQuestion:
      "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300",
    reviewQuestion:
      "border-violet-200 bg-violet-50 text-violet-700 hover:border-violet-300",

    selectedAlternative:
      "border-amber-300 bg-amber-50 shadow-sm ring-4 ring-amber-100",
    selectedLetter: "bg-amber-400 text-blue-950",
    selectedCheck: "text-amber-700",
    hoverAlternative: "hover:border-amber-200 hover:bg-amber-50/50",

    progress: "bg-amber-400",
  },
};

export const planThemeResult = {
  free: {
    name: "Free",
    title: "text-blue-950",
    badge: "border-violet-100 bg-violet-50 text-violet-700",
    iconBox: "border-violet-100 bg-violet-50 text-violet-600",
    iconText: "text-violet-700",
    gradientIcon: false,
    softBox: "border-violet-100 bg-violet-50",
    progress: "bg-violet-600",
    button: "text-white bg-violet-600 shadow-violet-600/25",
    lightButton: "border-violet-100 bg-white text-violet-700 bg-violet-50",
    accentText: "text-violet-600",
    backButton: "border-violet-200 bg-violet-50 text-violet-700",
  },

  pro: {
    name: "Pro",
    title: "text-blue-950",
    badge: "border-blue-100 bg-blue-50 text-blue-700",
    iconBox: "border-blue-100 bg-blue-50 text-blue-700",
    iconText: "text-blue-700",
    gradientIcon: false,
    softBox: "border-blue-100 bg-blue-50",
    progress: "bg-blue-700",
    button: "text-white bg-blue-700 shadow-blue-700/25",
    lightButton: "border-blue-100 bg-white text-blue-700 bg-blue-50",
    accentText: "text-blue-700",
    backButton: "border-blue-200 bg-blue-50 text-blue-800",
  },

  premium: {
    name: "Premium",
    title: "text-blue-950",
    badge:
      "border-purple-200 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    iconBox:
      "border-purple-200 bg-white text-purple-700 shadow-sm shadow-purple-950/5",
    iconText: "text-purple-700",
    gradientIcon: true,
    softBox: "border-purple-200 bg-white",
    progress: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500",
    button:
      "text-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 shadow-purple-700/25",
    lightButton:
      "border-purple-200 bg-white bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent border-blue-300 shadow-purple-950/10",
    accentText:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    backButton:
      "border-purple-300 bg-white text-purple-700 shadow-purple-950/10",
  },
};

export const planThemesAside = {
  free: {
    active: "bg-violet-600 text-white shadow-violet-950/10",
    hover: "hover:bg-violet-50 hover:text-violet-700",
    iconBox: "border-violet-100 bg-violet-50 text-violet-600",
    avatar: "bg-violet-600 text-white shadow-violet-950/15",
    border: "border-violet-100",
    softBorder: "border-violet-200",
    card: "from-violet-50 via-white to-blue-50",
    text: "text-violet-600",
    textStrong: "text-violet-700",
    button: "bg-violet-600 hover:bg-violet-700",
    mobileButton: "border-violet-100 text-violet-700 hover:bg-violet-50",
    planDot: "bg-violet-600",
    iconText: "text-violet-600",
    gradientIcon: false,
    ring: "ring-violet-100",
  },

  pro: {
    active: "bg-blue-700 text-white shadow-blue-950/10",
    hover: "hover:bg-blue-50 hover:text-blue-700",
    iconBox: "border-blue-100 bg-blue-50 text-blue-700",
    avatar: "bg-blue-700 text-white shadow-blue-950/15",
    border: "border-blue-100",
    softBorder: "border-blue-200",
    card: "from-blue-50 via-white to-violet-50",
    text: "text-blue-700",
    textStrong: "text-blue-800",
    button: "bg-blue-700 hover:bg-blue-800",
    mobileButton: "border-blue-100 text-blue-700 hover:bg-blue-50",
    planDot: "bg-blue-700",
    iconText: "text-blue-700",
    gradientIcon: false,
    ring: "ring-blue-100",
  },

  premium: {
    active:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 text-white shadow-purple-950/15",
    hover: "hover:bg-purple-50 hover:text-purple-700",
    iconBox:
      "border-purple-200 bg-white text-purple-700 shadow-sm shadow-purple-950/5",
    avatar:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 text-white shadow-purple-950/20",
    border: "border-purple-100",
    softBorder: "border-purple-200",
    card: "from-purple-50 via-white to-blue-50",
    text: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    textStrong:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent",
    button:
      "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500 hover:shadow-purple-700/25",
    mobileButton: "border-purple-200 text-purple-700 hover:bg-purple-50",
    planDot: "bg-linear-to-r from-purple-800 via-blue-700 to-teal-500",
    iconText: "text-purple-700",
    gradientIcon: true,
    ring: "ring-purple-100",
  },
};
