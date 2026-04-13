/* ============================================
   quran.js — Random Quran verse on page load
   ============================================ */

(function () {
  'use strict';

  const verses = [
    {
      arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
      translation: 'Allah does not burden a soul beyond that it can bear.',
      reference: 'Surah Al-Baqarah — 2:286',
    },
    {
      arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
      translation: 'For indeed, with hardship will be ease.',
      reference: 'Surah Ash-Sharh — 94:6',
    },
    {
      arabic: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
      translation: 'Indeed, Allah will not change the condition of a people until they change what is in themselves.',
      reference: 'Surah Ar-Ra\'d — 13:11',
    },
    {
      arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
      translation: 'And whoever relies upon Allah — then He is sufficient for him.',
      reference: 'Surah At-Talaq — 65:3',
    },
    {
      arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ',
      translation: 'Remember Me, and I will remember you.',
      reference: 'Surah Al-Baqarah — 2:152',
    },
    {
      arabic: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
      translation: 'Do not despair of the mercy of Allah.',
      reference: 'Surah Az-Zumar — 39:53',
    },
    {
      arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ',
      translation: 'Do not weaken and do not grieve, for you will be superior if you are true believers.',
      reference: 'Surah Aal-Imran — 3:139',
    },
    {
      arabic: 'وَبَشِّرِ الصَّابِرِينَ',
      translation: 'And give good tidings to the patient.',
      reference: 'Surah Al-Baqarah — 2:155',
    },
    {
      arabic: 'رَبِّ زِدْنِي عِلْمًا',
      translation: 'My Lord, increase me in knowledge.',
      reference: 'Surah Ta-Ha — 20:114',
    },
    {
      arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
      translation: 'And He is with you wherever you are.',
      reference: 'Surah Al-Hadid — 57:4',
    },
    {
      arabic: 'وَإِن يَمْسَسْكَ ٱللَّهُ بِضُرٍّۢ فَلَا كَاشِفَ لَهُۥٓ إِلَّا هُوَ ۖ وَإِن يُرِدْكَ بِخَيْرٍۢ فَلَا رَآدَّ لِفَضْلِهِۦ ۚ يُصِيبُ بِهِۦ مَن يَشَآءُ مِنْ عِبَادِهِۦ ۚ وَهُوَ ٱلْغَفُورُ ٱلرَّحِيمُ',
      translation: 'If Allah touches you with harm, none can remove it except Him. And if He intends good for you, none can repel His bounty. He grants it to whom He wills of His servants. And He is the Most Forgiving, Most Merciful.',
      reference: 'Surah Yunus — 10:107',
    },
    {
      arabic: 'وَمَا مِن دَآبَّةٍۢ فِى ٱلْأَرْضِ إِلَّا عَلَى ٱللَّهِ رِزْقُهَا وَيَعْلَمُ مُسْتَقَرَّهَا وَمُسْتَوْدَعَهَا ۚ كُلٌّۭ فِى كِتَـٰبٍۢ مُّبِينٍۢ',
      translation: 'And there is no creature on earth but that upon Allah is its provision, and He knows its place of dwelling and place of storage. All is in a clear record.',
      reference: 'Surah Hud — 11:6',
    },
    {
      arabic: 'مَّا يَفْتَحِ ٱللَّهُ لِلنَّاسِ مِن رَّحْمَةٍۢ فَلَا مُمْسِكَ لَهَا ۖ وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُۥ مِنۢ بَعْدِهِۦ ۚ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
      translation: 'Whatever mercy Allah grants to people, none can withhold it; and whatever He withholds, none can release it thereafter. And He is the Almighty, the All-Wise.',
      reference: 'Surah Fatir — 35:2',
    },
    {
      arabic: 'لِيُنفِقْ ذُو سَعَةٍۢ مِّن سَعَتِهِۦ ۖ وَمَن قُدِرَ عَلَيْهِ رِزْقُهُۥ فَلْيُنفِقْ مِمَّآ ءَاتَىٰهُ ٱللَّهُ ۚ لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا مَآ ءَاتَىٰهَا ۚ سَيَجْعَلُ ٱللَّهُ بَعْدَ عُسْرٍۢ يُسْرًا',
      translation: 'Let a man of wealth spend from his wealth, and he whose provision is restricted—let him spend from what Allah has given him. Allah does not burden a soul beyond what He has given it. Allah will bring about ease after hardship.',
      reference: 'Surah At-Talaq — 65:7',
    },
  ];

  const arabicEl = document.getElementById('qArabic');
  const transEl  = document.getElementById('qTranslation');
  const refEl    = document.getElementById('qReference');

  if (!arabicEl) return;

  // Pick one random verse on page load — no rotation
  const verse = verses[Math.floor(Math.random() * verses.length)];
  arabicEl.textContent = verse.arabic;
  transEl.textContent  = verse.translation;
  refEl.textContent    = verse.reference;

})();


(function () {
  'use strict';

  const verses = [
    {
      arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا',
      translation: 'Allah does not burden a soul beyond that it can bear.',
      reference: 'Surah Al-Baqarah — 2:286',
    },
    {
      arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
      translation: 'For indeed, with hardship will be ease.',
      reference: 'Surah Ash-Sharh — 94:6',
    },
    {
      arabic: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
      translation: 'Indeed, Allah will not change the condition of a people until they change what is in themselves.',
      reference: 'Surah Ar-Ra\'d — 13:11',
    },
    {
      arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
      translation: 'And whoever relies upon Allah — then He is sufficient for him.',
      reference: 'Surah At-Talaq — 65:3',
    },
    {
      arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ',
      translation: 'Remember Me, and I will remember you.',
      reference: 'Surah Al-Baqarah — 2:152',
    },
    {
      arabic: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
      translation: 'Do not despair of the mercy of Allah.',
      reference: 'Surah Az-Zumar — 39:53',
    },
    {
      arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ',
      translation: 'Do not weaken and do not grieve, for you will be superior if you are true believers.',
      reference: 'Surah Aal-Imran — 3:139',
    },
    {
      arabic: 'وَبَشِّرِ الصَّابِرِينَ',
      translation: 'And give good tidings to the patient.',
      reference: 'Surah Al-Baqarah — 2:155',
    },
    {
      arabic: 'رَبِّ زِدْنِي عِلْمًا',
      translation: 'My Lord, increase me in knowledge.',
      reference: 'Surah Ta-Ha — 20:114',
    },
    {
      arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
      translation: 'And He is with you wherever you are.',
      reference: 'Surah Al-Hadid — 57:4',
    },
    {
      arabic: 'وَإِن يَمْسَسْكَ ٱللَّهُ بِضُرٍّۢ فَلَا كَاشِفَ لَهُۥٓ إِلَّا هُوَ ۖ وَإِن يُرِدْكَ بِخَيْرٍۢ فَلَا رَآدَّ لِفَضْلِهِۦ ۚ يُصِيبُ بِهِۦ مَن يَشَآءُ مِنْ عِبَادِهِۦ ۚ وَهُوَ ٱلْغَفُورُ ٱلرَّحِيمُ',
      translation: 'If Allah touches you with harm, none can remove it except Him. And if He intends good for you, none can repel His bounty. He grants it to whom He wills of His servants. And He is the Most Forgiving, Most Merciful.',
      reference: 'Surah Yunus — 10:107',
    },
    {
      arabic: 'وَمَا مِن دَآبَّةٍۢ فِى ٱلْأَرْضِ إِلَّا عَلَى ٱللَّهِ رِزْقُهَا وَيَعْلَمُ مُسْتَقَرَّهَا وَمُسْتَوْدَعَهَا ۚ كُلٌّۭ فِى كِتَـٰبٍۢ مُّبِينٍۢ',
      translation: 'And there is no creature on earth but that upon Allah is its provision, and He knows its place of dwelling and place of storage. All is in a clear record.',
      reference: 'Surah Hud — 11:6',
    },
    {
      arabic: 'مَّا يَفْتَحِ ٱللَّهُ لِلنَّاسِ مِن رَّحْمَةٍۢ فَلَا مُمْسِكَ لَهَا ۖ وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُۥ مِنۢ بَعْدِهِۦ ۚ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
      translation: 'Whatever mercy Allah grants to people, none can withhold it; and whatever He withholds, none can release it thereafter. And He is the Almighty, the All-Wise.',
      reference: 'Surah Fatir — 35:2',
    },
    {
      arabic: 'لِيُنفِقْ ذُو سَعَةٍۢ مِّن سَعَتِهِۦ ۖ وَمَن قُدِرَ عَلَيْهِ رِزْقُهُۥ فَلْيُنفِقْ مِمَّآ ءَاتَىٰهُ ٱللَّهُ ۚ لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا مَآ ءَاتَىٰهَا ۚ سَيَجْعَلُ ٱللَّهُ بَعْدَ عُسْرٍۢ يُسْرًا',
      translation: 'Let a man of wealth spend from his wealth, and he whose provision is restricted—let him spend from what Allah has given him. Allah does not burden a soul beyond what He has given it. Allah will bring about ease after hardship.',
      reference: 'Surah At-Talaq — 65:7',
    },
  ];

  const INTERVAL_MS  = 8000;   // time each verse is shown
  const FADE_MS      = 700;    // CSS transition duration (must match CSS)

  const arabicEl     = document.getElementById('qArabic');
  const transEl      = document.getElementById('qTranslation');
  const refEl        = document.getElementById('qReference');
  const dotsEl       = document.getElementById('qDots');
  const prevBtn      = document.getElementById('qPrev');
  const nextBtn      = document.getElementById('qNext');

  if (!arabicEl) return; // section not present

  // Build a randomly shuffled queue
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let queue   = shuffle(verses);
  let current = 0;
  let timer   = null;

  // Build dot indicators
  verses.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'q-dot';
    if (i === 0) d.classList.add('active');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  });

  function updateDots(idx) {
    dotsEl.querySelectorAll('.q-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }

  function showVerse(idx, direction) {
    const verse = queue[idx];
    const container = document.getElementById('qVerseBox');

    container.classList.add('fading');

    setTimeout(() => {
      arabicEl.textContent = verse.arabic;
      transEl.textContent  = verse.translation;
      refEl.textContent    = verse.reference;
      updateDots(idx % verses.length);
      container.classList.remove('fading');
    }, FADE_MS);
  }

  function goTo(idx) {
    clearInterval(timer);
    current = ((idx % queue.length) + queue.length) % queue.length;
    showVerse(current);
    startTimer();
  }

  function next() {
    current = (current + 1) % queue.length;
    // Reshuffle when we reach the end
    if (current === 0) queue = shuffle(verses);
    showVerse(current);
  }

  function startTimer() {
    timer = setInterval(next, INTERVAL_MS);
  }

  // Initial display (pick a random start)
  current = Math.floor(Math.random() * queue.length);
  arabicEl.textContent = queue[current].arabic;
  transEl.textContent  = queue[current].translation;
  refEl.textContent    = queue[current].reference;
  updateDots(current % verses.length);
  startTimer();

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Pause on hover
  const section = document.getElementById('quranSection');
  section.addEventListener('mouseenter', () => clearInterval(timer));
  section.addEventListener('mouseleave', startTimer);

})();
