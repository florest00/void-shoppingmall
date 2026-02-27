document.addEventListener("DOMContentLoaded", () => {
  /* ================= header ================= */
  const openLnb = document.querySelectorAll(".category_menu .lt_menu .basic");
  const openPromo = document.querySelectorAll(
    ".category_menu .lt_menu .wrap .promotion",
  );
  const categoryDrop = document.querySelector(".category_drop");
  const lnbBasic = document.querySelector(".category_drop .dep2 .basic");
  const lnbPromo = document.querySelector(".category_drop .dep2 .promotion");

  const openLnbMenu = (type) => {
    categoryDrop.classList.add("active");
    if (type === "basic") {
      lnbBasic.classList.add("active");
      lnbPromo.classList.remove("active");
    } else if (type === "promo") {
      lnbPromo.classList.add("active");
      lnbBasic.classList.remove("active");
    }
  };

  const closeLnbMenu = () => {
    categoryDrop.classList.remove("active");
    lnbBasic.classList.remove("active");
    lnbPromo.classList.remove("active");
  };

  openLnb.forEach((item) => {
    item.addEventListener("mouseenter", () => openLnbMenu("basic"));
  });

  openPromo.forEach((item) => {
    item.addEventListener("mouseenter", () => openLnbMenu("promo"));
  });

  categoryDrop.addEventListener("mouseleave", closeLnbMenu);

  /* ================= main_visual swiper ================= */

  const swiper = new Swiper(".mySwiper", {
    autoplay: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    freeMode: false,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".mySwiper", {
    scale: 1.3,
    opacity: 0,
    scrollTrigger: {
      trigger: "#main_wrap",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: false,
    },
  });

  /* ================= raffle-timer ================= */
  var countDownDate = new Date("Dec 15, 2026 00:00:00").getTime();

  function updateTimer() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      document.getElementById("day").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      clearInterval(timer);
    }
  }

  updateTimer();

  var timer = setInterval(updateTimer, 1000);

  /* ================ 브랜드뉴인 swiper =================== */
  const swiper2 = new Swiper(".tp_swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 46,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar2",
      hide: false,
      draggable: true,
    },
  });

  /* ============ edition ============== */

  document.querySelectorAll(".tabnav a").forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      document
        .querySelectorAll(".tabnav a")
        .forEach((a) => a.classList.remove("on"));

      this.classList.add("on");

      document.querySelectorAll(".tabcont > div").forEach((content) => {
        content.classList.remove("active");
      });

      const target = this.getAttribute("href");
      document.querySelector(target).classList.add("active");
    });
  });

  /* ========== archive ========= */
  const archiveData = {
    all: [
      {
        img: "./assets/images/archive_08.jpg",
        title: "K-POP과 업사이클링의 조우, 파비아나 이 줄리아나",
        desc: "디렉터 파비아나와 줄리아나 올리베이라 인터뷰",
      },
      {
        img: "./assets/images/archive_05.jpg",
        title: "CODMOUM VOID X CH+ISM",
        desc: "시즘 25 F/W 오프라인 단독 팝업",
      },
      {
        img: "./assets/images/archive_06.jpg",
        title: "CODMOUM VOID X PUGG X NISEI",
        desc: "6년 만에 서보이는 퍼그와 니세이 협업 슈즈",
      },
      {
        img: "./assets/images/archive_07.jpg",
        title: "CODMOUM VOID X CYBERZONE",
        desc: "사이버존이 그려낸 사이버펑크 컨셉",
      },
    ],

    VOIDmade: [
      {
        img: "./assets/images/archive_02.jpg",
        title: "KICK FLOW 1906",
        desc: "코디모음 보이드 압구정 베이스먼트에서 담은 킥플로우 1906의 모습",
      },
      {
        img: "./assets/images/archive_01.jpg",
        title: "ENTER THE CODMOUM VOID",
        desc: "23 F/W CAMPAIGN",
      },
      {
        img: "./assets/images/archive_03.jpg",
        title: "SNEAKERS, SNEAKERS",
        desc: "V()ID MADE",
      },
      {
        img: "./assets/images/archive_04.jpg",
        title: "Catch Winter Before It’s Gone",
        desc: "V()ID MADE",
      },
    ],

    stories: [
      {
        img: "./assets/images/archive_05.jpg",
        title: "CODMOUM VOID X CH+ISM",
        desc: "시즘 25 F/W 오프라인 단독 팝업",
      },
      {
        img: "./assets/images/archive_06.jpg",
        title: "CODMOUM VOID X PUGG X NISEI",
        desc: "6년 만에 선보이는 퍼그와 니세이 협업 슈즈",
      },
      {
        img: "./assets/images/archive_07.jpg",
        title: "CODMOUM VOID X CYBERZONE",
        desc: "사이버존이 그려낸 사이버펑크 컨셉",
      },
      {
        img: "./assets/images/archive_09.jpg",
        title: "CODMOUM VOID X REV SPORT X JIYOENKIM",
        desc: "레브스포츠와 지연킴이 만들어낸 새로운 아웃도어의 형태",
      },
    ],

    interview: [
      {
        img: "./assets/images/archive_08.jpg",
        title: "KPOP과 업사이클링의 조우, 파비아나 이 줄리아나",
        desc: "디렉터 파비아나와 줄리아나 올리베이라 인터뷰",
      },
      {
        img: "./assets/images/archive_10.jpg",
        title: '"진정한 나를 찾으세요." 스타일리스트 팀 201호가 전하는 이야기',
        desc: "이아름, 정지훈 인터뷰",
      },
      {
        img: "./assets/images/archive_12.jpg",
        title: '"조용히 빛나는 순간" 스타일리스트 김나영의 패션 세계',
        desc: "김나영 인터뷰",
      },
      {
        img: "./assets/images/archive_11.jpg",
        title: "경계를 넘는 태도를 위한 주얼리, ORPHEUS",
        desc: "윤하늘 인터뷰",
      },
    ],

    look: [
      {
        img: "./assets/images/archive_13.jpg",
        title: "FEARLESS EDGE",
        desc: "2015년 12월 Ethan Vale와 Marco Rey가 설립한 밀리터리 감성을 전개하는 브랜드",
      },
      {
        img: "./assets/images/archive_14.jpg",
        title: "ZION CLARKE",
        desc: "Zion Clarke가 2016년에 설립한 아프로 헤리티지 기반의 컨템포러리 브랜드",
      },
      {
        img: "./assets/images/archive_15.jpg",
        title: "ANIMALIER",
        desc: "2017년 Lea Hartmann이 설립한 와일드 패턴과 유려한 실루엣을 전개하는 브랜드",
      },
      {
        img: "./assets/images/archive_16.jpg",
        title: "DORMINDO",
        desc: "2016년 이여름, 최재영이 설립한 브랜드 도르민도",
      },
    ],
  };

  const buttons = document.querySelectorAll("#magazineCate a[data-category]");
  const cards = document.querySelectorAll(".archive_list > ul > li");

  function updateCards(category) {
    const data = archiveData[category];

    cards.forEach((card, idx) => {
      const item = data[idx];

      if (!item) return;

      card.querySelector("img").src = item.img;
      card.querySelector("h2").textContent = item.title;
      card.querySelector("p").textContent = item.desc;
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;
      updateCards(category);
    });
  });

  updateCards("all");

  /*=============== ctm_footer flex toggle button =============== */

  function closeAllSections(exceptSections = [], exceptButton = null) {
    const allSections = document.querySelectorAll(
      ".ftrBtm1, .ftrBtm2, .ftrBtm3, .escrow",
    );

    allSections.forEach((section) => {
      if (!exceptSections.includes(section)) {
        section.style.maxHeight = 0;
        section.style.marginBottom = "0";
      }
    });

    document
      .querySelectorAll(".toggle-button, .toggle-button1, .toggle-button2")
      .forEach((btn) => {
        if (btn !== exceptButton) {
          btn.classList.remove("open");
          btn.textContent = btn.textContent.replace("-", "+");
        }
      });
  }

  function toggleSection(button, sectionList) {
    const isOpen = button.classList.contains("open");

    closeAllSections(sectionList, button);

    button.textContent = button.textContent.replace(
      isOpen ? "-" : "+",
      isOpen ? "+" : "-",
    );
    button.classList.toggle("open");

    sectionList.forEach((section) => {
      if (isOpen) {
        section.style.maxHeight = 0;
        section.style.marginBottom = 0;
      } else {
        section.style.maxHeight = section.scrollHeight + "px";
        section.style.marginBottom = "2vw";
      }
    });
  }

  const btn0 = document.querySelector(".toggle-button");
  const ftrBtm1 = document.querySelector(".ftrBtm1");
  const escrow = document.querySelector(".escrow");

  btn0.addEventListener("click", () => {
    toggleSection(btn0, [ftrBtm1, escrow]);
  });

  const btn1 = document.querySelector(".toggle-button1");
  const ftrBtm2 = document.querySelector(".ftrBtm2");

  btn1.addEventListener("click", () => {
    toggleSection(btn1, [ftrBtm2]);
  });

  const btn2 = document.querySelector(".toggle-button2");
  const ftrBtm3 = document.querySelector(".ftrBtm3");

  btn2.addEventListener("click", () => {
    toggleSection(btn2, [ftrBtm3]);
  });

  /* ================ bottom_nav =============== */

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    const bottomNav = document.querySelector(".bottom_nav");

    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    const isBottom = windowHeight + currentY >= documentHeight - 10;
    if (isBottom) {
      bottomNav.classList.remove("hide");
      lastScrollY = currentY;
      return;
    }
    if (currentY > lastScrollY) {
      bottomNav.classList.add("hide");
    } else {
      bottomNav.classList.remove("hide");
    }
    lastScrollY = currentY;
  });
});
