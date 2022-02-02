let themeLocal = "";

const i18Obj = {
  en: {
    skills: "Skills",
    Portfolio: "Portfolio",
    Video: "Video",
    Price: "Price",
    Contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
     "price-description-1-span-1":
      "One location<br />120 photos in color<br />12 photos in retouch<br />Readiness 2-3 weeks<br />Make up, visage",
    "price-description-2-span-2":
      "One or two locations<br />200 photos in color<br />20 photos in retouch<br />Readiness 1-2 weeks<br />Make up, visage",
    "price-description-2-span-3":
      "Three locations or more<br />300 photos in color<br />50 photos in retouch<br />Readiness 1 week<br />Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    Portfolio: "Портфолио",
    Video: "Видео",
    Price: "Цены",
    Contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": `Одна локация,<br /> 120 цветных фото,<br />12 отретушированных фото<br /> Готовность через 2-3 недели<br /> Макияж, визаж`,
    "price-description-2-span-2": `Одна-две локации,<br /> 200 цветных фото,<br />20 отретушированных фото<br /> Готовность через 1-2 недели<br /> Макияж, визаж`,
    "price-description-2-span-3": `Три локации и больше,<br /> 300 цветных фото,<br />50 отретушированных фото<br /> Готовность через 1 неделю<br /> Макияж, визаж, прическа`,
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};

const getTranslate = (e) => {
  const attributes = document.querySelectorAll("[data-i18]");

  for (let i = 0; i < attributes.length; i++) {
    if (e === "ru") {
      attributes[i].innerHTML = i18Obj.ru[attributes[i].dataset.i18];
    } else {
      attributes[i].innerHTML = i18Obj.en[attributes[i].dataset.i18];
    }
  }
  setLocalStorage(e);
};

const clickMenu = () => {
  document.querySelector(".menu_bg").classList.toggle("invisible");
};

const switchLng = (e) => {
  if (e === "ru" && document.querySelector(".ru").classList.value === "ru") {
    document.querySelector(".ru").classList.toggle("select");
    document.querySelector(".en").classList.toggle("select");
    document.querySelector(".nav").classList.toggle("navRu");
    document.querySelector(".hero-text").classList.toggle("hero-textRu");
    getTranslate(e);
  } else if (
    e === "en" &&
    document.querySelector(".en").classList.value === "en"
  ) {
    getTranslate(e);
    document.querySelector(".en").classList.toggle("select");
    document.querySelector(".ru").classList.toggle("select");
    document.querySelector(".nav").classList.toggle("navRu");
    document.querySelector(".hero-text").classList.toggle("hero-textRu");
  } else {
    return null;
  }
};

const switchPhoto = (e) => {
  const portfolioImages = document.querySelectorAll(".portfolio-img");

  document
    .querySelectorAll(".bt2")
    .forEach((e) => e.classList.remove("click-btn"));
  if (e === "winter") {
    document.querySelector('[data-i18="winter"]').classList.toggle("click-btn");
  } else if (e === "autumn") {
    document.querySelector('[data-i18="autumn"]').classList.toggle("click-btn");
  } else if (e === "summer") {
    document.querySelector('[data-i18="summer"]').classList.toggle("click-btn");
  } else {
    document.querySelector('[data-i18="spring"]').classList.toggle("click-btn");
  }

  portfolioImages.forEach((img, index) => {
    if (e === "winter") {
      return (img.src = `./assets/img/winter/winter${index + 1}.jpg`);
    } else if (e === "autumn") {
      return (img.src = `./assets/img/autumn/autumn${index + 1}.jpg`);
    } else if (e === "summer") {
      return (img.src = `./assets/img/summer/summer${index + 1}.jpg`);
    } else {
      return (img.src = `./assets/img/spring/spring${index + 1}.jpg`);
    }
  });
};

const switchTheme = () => {
  const Theme = document.querySelector(".logoRu");
  Theme.classList.toggle("select");
  document.body.classList.toggle("light");
  document.querySelector(".desktop").classList.toggle("light");
  document
    .querySelectorAll(".skills-title")
    .forEach((e) => e.classList.toggle("gradient"));
  document
    .querySelectorAll(".aFrame")
    .forEach((e) => e.classList.toggle("btnRu"));
  document.querySelectorAll(".btn").forEach((e) => e.classList.toggle("btnRu"));
  document
    .querySelectorAll(".button")
    .forEach((e) => e.classList.toggle("button2"));
  document
    .querySelectorAll(".h2Ru")
    .forEach((e) => e.classList.toggle("light"));
  if (Theme.classList.contains("select")) {
    themeLocal = "dark";
    setLocalStorage(themeLocal);
    return (Theme.src = `./assets/svg/carbon_sun.png`);
  } else {
    themeLocal = "light";
    setLocalStorage(themeLocal);
    return (Theme.src = `./assets/svg/vector.png`);
  }
};
function setLocalStorage(lang) {
  localStorage.setItem("themeLocal", themeLocal);
  localStorage.setItem("lang", lang);
}

function getLocalStorage() {
  if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    getTranslate(lang);
    switchLng(lang);
  }
}
function local() {
  const themeLocal = localStorage.getItem("themeLocal");
  if (themeLocal === "dark") {
    return false;
  } else if (themeLocal === "light") {
    switchTheme();
  }
}
window.addEventListener("load", getLocalStorage, local());
