// ===== DANE APLIKACJI =====
// Centrum obszaru: ul. Łucznicza / Tarczowa, Szczecin
// Współrzędne: ~53.4025, 14.5520

const APP_DATA = {

  center: [14.5520, 53.4025],

  // ===== MIEJSCA =====
  places: [
    {
      id: 1, cat: 'sport',
      name: 'Boisko Sportowe Łucznicza',
      addr: 'ul. Łucznicza, Szczecin',
      emoji: '⚽',
      desc: 'Ogólnodostępne boisko do piłki nożnej i koszykówki. Idealne miejsce dla aktywnych mieszkańców dzielnicy. Oświetlone wieczorami.',
      hours: 'Całą dobę',
      phone: null,
      website: null,
      coords: [14.5510, 53.4030],
      rating: 4.2,
      tags: ['boisko', 'piłka nożna', 'koszykówka', 'bezpłatne']
    },
    {
      id: 2, cat: 'park',
      name: 'Skwer przy Tarczowej',
      addr: 'ul. Tarczowa, Szczecin',
      emoji: '🌳',
      desc: 'Zielony skwer z ławkami i alejkami spacerowymi. Popularne miejsce odpoczynku dla rodzin z dziećmi. Plac zabaw w pobliżu.',
      hours: 'Całą dobę',
      phone: null,
      website: null,
      coords: [14.5535, 53.4018],
      rating: 4.5,
      tags: ['park', 'spacer', 'relaks', 'dzieci']
    },
    {
      id: 3, cat: 'shop',
      name: 'Sklep Spożywczy',
      addr: 'ul. Łucznicza 45, Szczecin',
      emoji: '🛒',
      desc: 'Lokalny sklep spożywczy z szerokim asortymentem produktów codziennego użytku. Świeże pieczywo każdego ranka.',
      hours: '6:00–22:00',
      phone: '+48 91 XXX XXX',
      website: null,
      coords: [14.5505, 53.4022],
      rating: 4.0,
      tags: ['sklep', 'spożywczy', 'pieczywo']
    },
    {
      id: 4, cat: 'food',
      name: 'Bar Mleczny "Strzała"',
      addr: 'ul. Tarczowa 12, Szczecin',
      emoji: '🍽️',
      desc: 'Tradycyjny bar mleczny serwujący domowe obiady w przystępnych cenach. Kultowe miejsce dla mieszkańców od lat 80. Bigos, pierogi, żurek.',
      hours: '8:00–18:00 (pon–pt)',
      phone: '+48 91 XXX XXX',
      website: null,
      coords: [14.5528, 53.4035],
      rating: 4.6,
      tags: ['bar mleczny', 'obiad', 'tanie jedzenie', 'tradycja']
    },
    {
      id: 5, cat: 'service',
      name: 'Apteka "Zdrowie"',
      addr: 'ul. Łucznicza 23, Szczecin',
      emoji: '💊',
      desc: 'Apteka ogólnodostępna z pełnym asortymentem leków i suplementów. Dyżury całodobowe w weekendy.',
      hours: '8:00–20:00',
      phone: '+48 91 XXX XXX',
      website: null,
      coords: [14.5515, 53.4040],
      rating: 4.3,
      tags: ['apteka', 'leki', 'zdrowie']
    },
    {
      id: 6, cat: 'edu',
      name: 'Szkoła Podstawowa nr 47',
      addr: 'ul. Tarczowa 8, Szczecin',
      emoji: '🏫',
      desc: 'Publiczna szkoła podstawowa obsługująca dzielnicę. Nowoczesna sala gimnastyczna, boisko szkolne i świetlica dla uczniów.',
      hours: '7:00–17:00 (dni szkolne)',
      phone: '+48 91 XXX XXX',
      website: 'sp47.szczecin.pl',
      coords: [14.5540, 53.4010],
      rating: 4.1,
      tags: ['szkoła', 'edukacja', 'dzieci']
    },
    {
      id: 7, cat: 'sport',
      name: 'Siłownia Plenerowa',
      addr: 'ul. Łucznicza (park), Szczecin',
      emoji: '💪',
      desc: 'Bezpłatna siłownia plenerowa z urządzeniami do ćwiczeń na świeżym powietrzu. Drążki, poręcze, orbitreki i wiele więcej.',
      hours: 'Całą dobę',
      phone: null,
      website: null,
      coords: [14.5498, 53.4028],
      rating: 4.4,
      tags: ['siłownia', 'ćwiczenia', 'bezpłatne', 'plener']
    },
    {
      id: 8, cat: 'food',
      name: 'Pizzeria "Tarcza"',
      addr: 'ul. Tarczowa 31, Szczecin',
      emoji: '🍕',
      desc: 'Lokalna pizzeria z wypiekiem w piecu opalanym drewnem. Dostawa w promieniu 3 km. Specjalność: pizza z łososiem i kaparami.',
      hours: '12:00–23:00',
      phone: '+48 91 XXX XXX',
      website: null,
      coords: [14.5545, 53.4025],
      rating: 4.7,
      tags: ['pizza', 'dostawa', 'włoska kuchnia']
    },
    {
      id: 9, cat: 'service',
      name: 'Poczta Polska',
      addr: 'ul. Łucznicza 67, Szczecin',
      emoji: '📮',
      desc: 'Placówka pocztowa oferująca pełen zakres usług: listy, paczki, przekazy pieniężne, usługi bankowe.',
      hours: '8:00–18:00 (pon–pt), 8:00–13:00 (sob)',
      phone: '800 888 888',
      website: 'poczta-polska.pl',
      coords: [14.5520, 53.4045],
      rating: 3.8,
      tags: ['poczta', 'paczki', 'usługi']
    },
    {
      id: 10, cat: 'park',
      name: 'Plac Zabaw "Łucznik"',
      addr: 'ul. Łucznicza (osiedle), Szczecin',
      emoji: '🎠',
      desc: 'Nowoczesny plac zabaw dla dzieci w wieku 2–12 lat. Zjeżdżalnie, huśtawki, piaskownica i ścianka wspinaczkowa. Ogrodzony i bezpieczny.',
      hours: 'Całą dobę',
      phone: null,
      website: null,
      coords: [14.5508, 53.4015],
      rating: 4.8,
      tags: ['plac zabaw', 'dzieci', 'rodzina']
    },
    {
      id: 11, cat: 'shop',
      name: 'Drogeria "Uroda"',
      addr: 'ul. Tarczowa 19, Szczecin',
      emoji: '🧴',
      desc: 'Drogeria z kosmetykami, środkami czystości i artykułami higienicznymi. Szeroki wybór marek krajowych i zagranicznych.',
      hours: '9:00–20:00',
      phone: null,
      website: null,
      coords: [14.5532, 53.4042],
      rating: 4.1,
      tags: ['drogeria', 'kosmetyki', 'chemia']
    },
    {
      id: 12, cat: 'service',
      name: 'Przychodnia Zdrowia',
      addr: 'ul. Łucznicza 15, Szczecin',
      emoji: '🏥',
      desc: 'Przychodnia POZ z lekarzem rodzinnym, pediatrą i pielęgniarką środowiskową. Rejestracja telefoniczna i online.',
      hours: '7:30–18:00 (pon–pt)',
      phone: '+48 91 XXX XXX',
      website: null,
      coords: [14.5502, 53.4035],
      rating: 3.9,
      tags: ['przychodnia', 'lekarz', 'zdrowie', 'NFZ']
    }
  ],

  // ===== TRASY =====
  routes: [
    {
      id: 1,
      name: 'Spacer po Łuczniczej',
      emoji: '🚶',
      type: 'walk',
      color: '#6c63ff',
      distance: '1.2 km',
      distanceNum: 1.2,
      time: '15 min',
      timeMin: 15,
      difficulty: 'Łatwa',
      difficultyLevel: 1,
      calories: 60,
      terrain: 'Chodnik',
      bestTime: 'Rano',
      tags: ['poranny', 'usługi', 'spokojny'],
      desc: 'Krótki spacer wzdłuż ulicy Łuczniczej, mijając sklepy, aptekę i siłownię plenerową. Idealna trasa na poranny spacer lub szybki obchód dzielnicy.',
      highlights: ['Siłownia plenerowa', 'Świeże pieczywo w sklepie', 'Widok na boisko'],
      stops: [
        { name: 'Start: Przychodnia Zdrowia', addr: 'ul. Łucznicza 15', emoji: '🏥' },
        { name: 'Siłownia Plenerowa', addr: 'ul. Łucznicza (park)', emoji: '💪' },
        { name: 'Sklep Spożywczy', addr: 'ul. Łucznicza 45', emoji: '🛒' },
        { name: 'Poczta Polska', addr: 'ul. Łucznicza 67', emoji: '📮' },
        { name: 'Meta: Boisko Sportowe', addr: 'ul. Łucznicza', emoji: '⚽' }
      ],
      coords: [
        [14.5502, 53.4035],
        [14.5498, 53.4028],
        [14.5505, 53.4022],
        [14.5520, 53.4045],
        [14.5510, 53.4030]
      ]
    },
    {
      id: 2,
      name: 'Trasa Rodzinna',
      emoji: '👨‍👩‍👧',
      type: 'walk',
      color: '#43e97b',
      distance: '2.1 km',
      distanceNum: 2.1,
      time: '30 min',
      timeMin: 30,
      difficulty: 'Łatwa',
      difficultyLevel: 1,
      calories: 105,
      terrain: 'Chodnik + park',
      bestTime: 'Popołudnie',
      tags: ['rodzina', 'dzieci', 'plac zabaw', 'pętla'],
      desc: 'Trasa idealna dla rodzin z dziećmi. Prowadzi przez plac zabaw, skwer i szkołę podstawową. Wiele miejsc do odpoczynku i ławek po drodze.',
      highlights: ['Plac zabaw z ścianką wspinaczkową', 'Zielony skwer', 'Bar mleczny na koniec'],
      stops: [
        { name: 'Start: Plac Zabaw "Łucznik"', addr: 'ul. Łucznicza (osiedle)', emoji: '🎠' },
        { name: 'Skwer przy Tarczowej', addr: 'ul. Tarczowa', emoji: '🌳' },
        { name: 'Szkoła Podstawowa nr 47', addr: 'ul. Tarczowa 8', emoji: '🏫' },
        { name: 'Bar Mleczny "Strzała"', addr: 'ul. Tarczowa 12', emoji: '🍽️' },
        { name: 'Meta: Plac Zabaw "Łucznik"', addr: 'ul. Łucznicza (osiedle)', emoji: '🎠' }
      ],
      coords: [
        [14.5508, 53.4015],
        [14.5535, 53.4018],
        [14.5540, 53.4010],
        [14.5528, 53.4035],
        [14.5508, 53.4015]
      ]
    },
    {
      id: 3,
      name: 'Obwód Gastronomiczny',
      emoji: '🍽️',
      type: 'walk',
      color: '#ffd93d',
      distance: '1.8 km',
      distanceNum: 1.8,
      time: '25 min',
      timeMin: 25,
      difficulty: 'Łatwa',
      difficultyLevel: 1,
      calories: 90,
      terrain: 'Chodnik',
      bestTime: 'Południe',
      tags: ['jedzenie', 'smaki', 'zakupy'],
      desc: 'Trasa dla smakoszy — od baru mlecznego przez pizzerię do lokalnych sklepów. Poznaj smaki dzielnicy i zrób zakupy po drodze.',
      highlights: ['Domowe obiady w barze mlecznym', 'Pizza z pieca opalanego drewnem', 'Lokalne sklepy'],
      stops: [
        { name: 'Start: Bar Mleczny "Strzała"', addr: 'ul. Tarczowa 12', emoji: '🍽️' },
        { name: 'Pizzeria "Tarcza"', addr: 'ul. Tarczowa 31', emoji: '🍕' },
        { name: 'Drogeria "Uroda"', addr: 'ul. Tarczowa 19', emoji: '🧴' },
        { name: 'Sklep Spożywczy', addr: 'ul. Łucznicza 45', emoji: '🛒' },
        { name: 'Meta: Skwer przy Tarczowej', addr: 'ul. Tarczowa', emoji: '🌳' }
      ],
      coords: [
        [14.5528, 53.4035],
        [14.5545, 53.4025],
        [14.5532, 53.4042],
        [14.5505, 53.4022],
        [14.5535, 53.4018]
      ]
    },
    {
      id: 4,
      name: 'Trasa Rowerowa',
      emoji: '🚴',
      type: 'bike',
      color: '#ff6b6b',
      distance: '4.5 km',
      distanceNum: 4.5,
      time: '20 min',
      timeMin: 20,
      difficulty: 'Średnia',
      difficultyLevel: 2,
      calories: 135,
      terrain: 'Ścieżka rowerowa + ulica',
      bestTime: 'Wieczór',
      tags: ['rower', 'aktywny', 'szybki', 'ścieżka'],
      desc: 'Dynamiczna trasa rowerowa okrążająca całą dzielnicę. Prowadzi przez ścieżki rowerowe, parki i spokojne uliczki. Idealna na wieczorny przejazd.',
      highlights: ['Ścieżka rowerowa wzdłuż parku', 'Widok na całą dzielnicę', 'Stacja Bike_S na trasie'],
      stops: [
        { name: 'Start: Stacja Bike_S Łucznicza', addr: 'ul. Łucznicza', emoji: '🚲' },
        { name: 'Boisko Sportowe', addr: 'ul. Łucznicza', emoji: '⚽' },
        { name: 'Skwer przy Tarczowej', addr: 'ul. Tarczowa', emoji: '🌳' },
        { name: 'Plac Zabaw "Łucznik"', addr: 'ul. Łucznicza (osiedle)', emoji: '🎠' },
        { name: 'Siłownia Plenerowa', addr: 'ul. Łucznicza (park)', emoji: '💪' },
        { name: 'Meta: Stacja Bike_S Tarczowa', addr: 'ul. Tarczowa', emoji: '🚲' }
      ],
      coords: [
        [14.5498, 53.4028],
        [14.5510, 53.4030],
        [14.5535, 53.4018],
        [14.5508, 53.4015],
        [14.5498, 53.4028],
        [14.5532, 53.4042]
      ]
    },
    {
      id: 5,
      name: 'Trasa Biegowa',
      emoji: '🏃',
      type: 'run',
      color: '#ff6584',
      distance: '3.2 km',
      distanceNum: 3.2,
      time: '18 min',
      timeMin: 18,
      difficulty: 'Średnia',
      difficultyLevel: 2,
      calories: 256,
      terrain: 'Chodnik + park',
      bestTime: 'Rano / Wieczór',
      tags: ['bieg', 'sport', 'kondycja', 'pętla'],
      desc: 'Popularna trasa biegowa wśród mieszkańców. Płaska, bezpieczna pętla przez park i osiedle. Idealna do treningu kondycyjnego lub porannego joggingu.',
      highlights: ['Płaska trasa bez podjazdów', 'Miękkie nawierzchnie w parku', 'Oświetlona wieczorami'],
      stops: [
        { name: 'Start: Boisko Sportowe', addr: 'ul. Łucznicza', emoji: '⚽' },
        { name: 'Siłownia Plenerowa', addr: 'ul. Łucznicza (park)', emoji: '💪' },
        { name: 'Plac Zabaw "Łucznik"', addr: 'ul. Łucznicza (osiedle)', emoji: '🎠' },
        { name: 'Skwer przy Tarczowej', addr: 'ul. Tarczowa', emoji: '🌳' },
        { name: 'Meta: Boisko Sportowe', addr: 'ul. Łucznicza', emoji: '⚽' }
      ],
      coords: [
        [14.5510, 53.4030],
        [14.5498, 53.4028],
        [14.5508, 53.4015],
        [14.5535, 53.4018],
        [14.5510, 53.4030]
      ]
    },
    {
      id: 6,
      name: 'Szlak Historyczny',
      emoji: '🏹',
      type: 'walk',
      color: '#a29bfe',
      distance: '2.8 km',
      distanceNum: 2.8,
      time: '45 min',
      timeMin: 45,
      difficulty: 'Łatwa',
      difficultyLevel: 1,
      calories: 140,
      terrain: 'Chodnik',
      bestTime: 'Dowolna pora',
      tags: ['historia', 'kultura', 'edukacja', 'łucznictwo'],
      desc: 'Spacer śladami historii dzielnicy. Poznaj miejsca związane z tradycją łucznictwa, od której pochodzi nazwa ulicy. Trasa z tablicami informacyjnymi.',
      highlights: ['Tablica historyczna przy szkole', 'Dawne tereny łucznicze', 'Architektura z lat 70.'],
      stops: [
        { name: 'Start: Szkoła Podstawowa nr 47', addr: 'ul. Tarczowa 8', emoji: '🏫' },
        { name: 'Skwer przy Tarczowej', addr: 'ul. Tarczowa', emoji: '🌳' },
        { name: 'Przychodnia Zdrowia', addr: 'ul. Łucznicza 15', emoji: '🏥' },
        { name: 'Poczta Polska', addr: 'ul. Łucznicza 67', emoji: '📮' },
        { name: 'Boisko Sportowe', addr: 'ul. Łucznicza', emoji: '⚽' },
        { name: 'Meta: Plac Zabaw "Łucznik"', addr: 'ul. Łucznicza (osiedle)', emoji: '🎠' }
      ],
      coords: [
        [14.5540, 53.4010],
        [14.5535, 53.4018],
        [14.5502, 53.4035],
        [14.5520, 53.4045],
        [14.5510, 53.4030],
        [14.5508, 53.4015]
      ]
    }
  ],

  // ===== INFO O DZIELNICY =====
  info: [
    {
      id: 'overview',
      icon: '🏘️',
      color: '#6c63ff',
      title: 'Charakterystyka dzielnicy',
      text: 'Obszar ulic Łuczniczej i Tarczowej to spokojna dzielnica mieszkaniowa w Szczecinie, charakteryzująca się zabudową wielorodzinną z lat 70. i 80. XX wieku. Dzielnica jest dobrze skomunikowana z centrum miasta i oferuje pełną infrastrukturę dla mieszkańców.',
      facts: [
        'Jedna z najspokojniejszych dzielnic Szczecina',
        'Zabudowa wielorodzinna z wielkiej płyty',
        'Pełna infrastruktura: szkoły, sklepy, przychodnie',
        'Doskonałe połączenia tramwajowe i autobusowe'
      ],
      stats: [
        { num: '~8 000', label: 'Mieszkańców', icon: '👥' },
        { num: '2,4 km²', label: 'Powierzchnia', icon: '📐' },
        { num: '1970s', label: 'Zabudowa', icon: '🏗️' }
      ]
    },
    {
      id: 'nature',
      icon: '🌿',
      color: '#43e97b',
      title: 'Zieleń i rekreacja',
      text: 'Dzielnica wyróżnia się dużą ilością terenów zielonych — skwery, parki osiedlowe i alejki spacerowe tworzą przyjazną przestrzeń dla mieszkańców. Siłownia plenerowa i boiska sportowe zachęcają do aktywności fizycznej na świeżym powietrzu.',
      facts: [
        'Ponad 30% powierzchni to tereny zielone',
        'Bezpłatna siłownia plenerowa czynna całą dobę',
        'Plac zabaw z nowoczesnym wyposażeniem',
        'Planowane nowe ścieżki rowerowe w 2026 r.'
      ],
      stats: [
        { num: '3', label: 'Parki/skwery', icon: '🌳' },
        { num: '2', label: 'Boiska', icon: '⚽' },
        { num: '1', label: 'Siłownia', icon: '💪' }
      ]
    },
    {
      id: 'infra',
      icon: '🏗️',
      color: '#ffd93d',
      title: 'Infrastruktura',
      text: 'Dzielnica posiada pełną infrastrukturę miejską: szkoły, przychodnie, apteki, sklepy i usługi. Trwają inwestycje w modernizację chodników i oświetlenia ulicznego. Planowana jest rozbudowa ścieżek rowerowych łączących dzielnicę z centrum.',
      facts: [
        'Szkoła podstawowa z salą gimnastyczną',
        'Przychodnia POZ z rejestracją online',
        'Apteka z dyżurami weekendowymi',
        'Modernizacja oświetlenia LED w 2025 r.'
      ],
      stats: [
        { num: '1', label: 'Szkoła', icon: '🏫' },
        { num: '1', label: 'Przychodnia', icon: '🏥' },
        { num: '12+', label: 'Usług', icon: '🔧' }
      ]
    },
    {
      id: 'history',
      icon: '📅',
      color: '#a29bfe',
      title: 'Historia',
      text: 'Ulice Łucznicza i Tarczowa swoją nazwę zawdzięczają tradycji łucznictwa — sport ten był popularny w tym rejonie Szczecina. Dzielnica rozwijała się dynamicznie w latach 70. XX wieku jako część planu rozbudowy Szczecina po wojnie. Dziś jest spokojną, zieloną enklawą w tkance miejskiej.',
      facts: [
        'Nazwa pochodzi od tradycji łucznictwa',
        'Budowa osiedla: lata 1968–1978',
        'Pierwsi mieszkańcy wprowadzili się w 1971 r.',
        'W 2020 r. rewitalizacja skweru przy Tarczowej'
      ],
      stats: [
        { num: '50+', label: 'Lat historii', icon: '📜' },
        { num: '1970', label: 'Rok budowy', icon: '🏗️' },
        { num: '🏹', label: 'Symbol', icon: '🏹' }
      ]
    },
    {
      id: 'transport',
      icon: '🚌',
      color: '#ff6b6b',
      title: 'Komunikacja',
      text: 'Dzielnica jest doskonale skomunikowana z centrum Szczecina. Liczne linie tramwajowe i autobusowe zapewniają szybki dojazd do każdej części miasta. Stacje Bike_S umożliwiają wygodne poruszanie się rowerem.',
      facts: [
        '3 linie tramwajowe w pobliżu',
        '4 linie autobusowe dzienne + 2 nocne',
        '2 stacje Bike_S w dzielnicy',
        'Dojazd do centrum: ok. 15 minut'
      ],
      stats: [
        { num: '7', label: 'Linii MPK', icon: '🚃' },
        { num: '15 min', label: 'Do centrum', icon: '⏱️' },
        { num: '2', label: 'Stacje Bike_S', icon: '🚲' }
      ]
    },
    {
      id: 'community',
      icon: '👥',
      color: '#fd79a8',
      title: 'Społeczność',
      text: 'Aktywna społeczność lokalna organizuje regularne spotkania, festyny i inicjatywy sąsiedzkie. Rada Osiedla reprezentuje interesy mieszkańców i współpracuje z władzami miasta przy planowaniu inwestycji.',
      facts: [
        'Coroczny Festyn Osiedlowy "Łucznicza Bawi"',
        'Aktywna Rada Osiedla Łucznicza-Tarczowa',
        'Grupy sąsiedzkie na portalach społecznościowych',
        'Wolontariat i inicjatywy ekologiczne'
      ],
      stats: [
        { num: '4 250', label: 'Mieszkańców', icon: '👥' },
        { num: '38 lat', label: 'Średni wiek', icon: '👤' },
        { num: '6+', label: 'Wydarzeń/rok', icon: '🎉' }
      ]
    }
  ],

  // ===== HISTORIA — TIMELINE =====
  timeline: [
    { year: '1945', icon: '🏚️', title: 'Odbudowa Szczecina', desc: 'Po II wojnie światowej Szczecin wraca do Polski. Rozpoczyna się odbudowa zniszczonego miasta.' },
    { year: '1968', icon: '📐', title: 'Projekt osiedla', desc: 'Architekci miejscy opracowują projekt nowego osiedla mieszkaniowego przy ul. Łuczniczej i Tarczowej.' },
    { year: '1971', icon: '🏠', title: 'Pierwsi mieszkańcy', desc: 'Pierwsze bloki gotowe. Rodziny wprowadzają się do nowych mieszkań. Dzielnica zaczyna tętnić życiem.' },
    { year: '1975', icon: '🏫', title: 'Szkoła Podstawowa nr 47', desc: 'Otwarto Szkołę Podstawową nr 47 przy ul. Tarczowej. Dzieci z dzielnicy mają szkołę w pobliżu domu.' },
    { year: '1978', icon: '🏗️', title: 'Koniec budowy', desc: 'Ostatnie bloki osiedla zostają oddane do użytku. Dzielnica osiąga docelową zabudowę.' },
    { year: '1990', icon: '🛒', title: 'Nowe sklepy i usługi', desc: 'Po transformacji ustrojowej w dzielnicy otwierają się prywatne sklepy, apteki i punkty usługowe.' },
    { year: '2010', icon: '💪', title: 'Siłownia plenerowa', desc: 'Miasto instaluje bezpłatną siłownię plenerową przy parku. Mieszkańcy ćwiczą na świeżym powietrzu.' },
    { year: '2018', icon: '🎠', title: 'Nowy plac zabaw', desc: 'Nowoczesny plac zabaw "Łucznik" z ścianką wspinaczkową i bezpieczną nawierzchnią.' },
    { year: '2020', icon: '🌳', title: 'Rewitalizacja skweru', desc: 'Rewitalizacja Skweru przy Tarczowej — nowe ławki, oświetlenie LED i nasadzenia drzew.' },
    { year: '2025', icon: '🚲', title: 'Ścieżki rowerowe', desc: 'Modernizacja infrastruktury rowerowej. Nowe stacje Bike_S i oznakowane trasy rowerowe.' },
    { year: '2026', icon: '🏹', title: 'Dziś', desc: 'Łucznicza i Tarczowa to tętniąca życiem, zielona dzielnica z aktywną społecznością i pełną infrastrukturą.' }
  ],

  // ===== CIEKAWOSTKI =====
  funFacts: [
    { emoji: '🏹', text: 'Nazwa "Łucznicza" pochodzi od łucznictwa — sportu popularnego w tym rejonie Szczecina w XIX wieku.' },
    { emoji: '🌳', text: 'Ponad 30% powierzchni dzielnicy to tereny zielone — jeden z najwyższych wskaźników w Szczecinie.' },
    { emoji: '🏗️', text: 'Bloki przy Łuczniczej zbudowano metodą wielkiej płyty — każdy blok powstawał w zaledwie kilka miesięcy.' },
    { emoji: '🚃', text: 'Tramwaj nr 3 kursuje przez dzielnicę od ponad 50 lat — to jedna z najstarszych linii w Szczecinie.' },
    { emoji: '🍽️', text: 'Bar Mleczny "Strzała" działa nieprzerwanie od lat 80. — to jeden z ostatnich prawdziwych barów mlecznych w mieście.' },
    { emoji: '👶', text: 'Średni wiek mieszkańców to 38 lat — dzielnica jest popularna wśród młodych rodzin z dziećmi.' }
  ],

  // ===== TRANSPORT =====
  transport: [
    {
      type: 'tram',
      icon: '🚃',
      title: 'Tramwaje',
      subtitle: 'Linie tramwajowe w pobliżu',
      color: '#e74c3c',
      lines: [
        { num: '3', color: 'line-tram' },
        { num: '7', color: 'line-tram' },
        { num: '12', color: 'line-tram' }
      ],
      stops: [
        { name: 'Łucznicza', dist: '150 m' },
        { name: 'Tarczowa', dist: '200 m' },
        { name: 'Centrum Handlowe', dist: '450 m' }
      ]
    },
    {
      type: 'bus',
      icon: '🚌',
      title: 'Autobusy',
      subtitle: 'Linie autobusowe w pobliżu',
      color: '#3498db',
      lines: [
        { num: '51', color: 'line-bus' },
        { num: '64', color: 'line-bus' },
        { num: '78', color: 'line-bus' },
        { num: '103', color: 'line-bus' }
      ],
      stops: [
        { name: 'Łucznicza / Tarczowa', dist: '80 m' },
        { name: 'Szkoła Podstawowa', dist: '180 m' },
        { name: 'Osiedle Łucznicza', dist: '300 m' }
      ]
    },
    {
      type: 'night',
      icon: '🌙',
      title: 'Linie nocne',
      subtitle: 'Komunikacja nocna',
      color: '#2c3e50',
      lines: [
        { num: 'N1', color: 'line-night' },
        { num: 'N5', color: 'line-night' }
      ],
      stops: [
        { name: 'Łucznicza (nocna)', dist: '200 m' }
      ]
    },
    {
      type: 'bike',
      icon: '🚲',
      title: 'Rowery miejskie',
      subtitle: 'Stacje Bike_S Szczecin',
      color: '#27ae60',
      lines: [],
      stops: [
        { name: 'Stacja Łucznicza', dist: '120 m' },
        { name: 'Stacja Tarczowa', dist: '250 m' }
      ]
    }
  ],

  // ===== WYDARZENIA =====
  events: [
    {
      day: '07', month: 'CZE',
      name: 'Festyn Osiedlowy "Łucznicza Bawi"',
      place: 'Boisko Sportowe Łucznicza',
      desc: 'Coroczny festyn dla mieszkańców dzielnicy. Koncerty, zabawy dla dzieci, stoiska z jedzeniem i lokalnymi wyrobami.',
      tag: 'Festyn'
    },
    {
      day: '15', month: 'CZE',
      name: 'Turniej Piłki Nożnej Dzielnicy',
      place: 'Boisko Sportowe Łucznicza',
      desc: 'Amatorski turniej piłkarski dla drużyn z dzielnicy. Zapisy do 10 czerwca. Nagrody dla zwycięzców.',
      tag: 'Sport'
    },
    {
      day: '22', month: 'CZE',
      name: 'Noc Świętojańska na Tarczowej',
      place: 'Skwer przy Tarczowej',
      desc: 'Tradycyjne świętowanie nocy świętojańskiej. Ognisko, wianki, muzyka na żywo i wspólna zabawa do późna.',
      tag: 'Tradycja'
    },
    {
      day: '05', month: 'LIP',
      name: 'Warsztaty Łucznictwa dla Dzieci',
      place: 'Szkoła Podstawowa nr 47',
      desc: 'Bezpłatne warsztaty łucznictwa nawiązujące do nazwy ulicy. Dla dzieci w wieku 7–14 lat. Zapisy w szkole.',
      tag: 'Edukacja'
    },
    {
      day: '19', month: 'LIP',
      name: 'Kino Letnie pod Gwiazdami',
      place: 'Skwer przy Tarczowej',
      desc: 'Bezpłatne seanse filmowe na świeżym powietrzu. Filmy familijne i polskie kino. Przynieś koc i dobry humor.',
      tag: 'Kultura'
    },
    {
      day: '02', month: 'SIE',
      name: 'Bieg Uliczny "Łucznicza Run"',
      place: 'Start: ul. Łucznicza',
      desc: 'Lokalny bieg uliczny na dystansie 5 km i 10 km. Trasa przez dzielnicę i okoliczne parki. Zapisy online.',
      tag: 'Sport'
    }
  ]
};
