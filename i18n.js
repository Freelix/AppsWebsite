/* AppForge Labs — EN/FR translations, language switcher and scroll reveal.
   Text lives in the HTML in English; elements opt in with:
     data-i18n="key"       -> textContent
     data-i18n-html="key"  -> innerHTML (trusted strings below only)
     data-i18n-alt="key"   -> alt attribute */

const TRANSLATIONS = {
  en: {
    'meta.title': 'AppForge Labs — We forge apps people love',
    'meta.description':
      'AppForge Labs is a Canadian app studio crafting polished, privacy-first mobile apps. Meet BoardGameSelector: the smartest way to pick your next board game.',
    skip: 'Skip to content',
    'nav.apps': 'Apps',
    'nav.features': 'Features',
    'nav.about': 'About',

    'hero.eyebrow': 'Independent app studio · Made in Canada',
    'hero.title': 'We forge apps <span class="gradient-text">people love to use.</span>',
    'hero.lead':
      'AppForge Labs designs and builds polished, privacy-first mobile apps that solve everyday problems beautifully. Our first creation turns "what should we play tonight?" into a one-tap decision.',
    'hero.ctaPrimary': 'Discover BoardGameSelector',
    'hero.ctaSecondary': 'Our approach',
    'hero.stat1': 'app in the forge',
    'hero.stat2': 'offline-ready',
    'hero.stat3': 'ads or trackers',
    'hero.chip1': 'You should play… One Deck Dungeon!',
    'hero.chip2': 'Picked in 1 tap',

    'apps.eyebrow': 'Our apps',
    'apps.title': 'Crafted one app at a time',
    'apps.lead':
      'Every AppForge Labs product is designed with obsessive attention to detail, works without a connection and respects your privacy.',
    'apps.soon': 'Coming soon to Google Play',
    'apps.bgsDesc':
      'The smartest way to pick your next board game. Sync your BoardGameGeek collection, filter it in seconds and let the app choose for you.',
    'apps.tag1': 'Board games',
    'apps.tag2': 'BoardGameGeek sync',
    'apps.tag3': 'Android',
    'apps.learnMore': 'See it in action →',
    'apps.nextBadge': 'In the forge',
    'apps.nextTitle': 'Your next favourite app',
    'apps.nextDesc':
      'New ideas are heating up. Each future app will join this page, built with the same care and craftsmanship.',

    'spot.eyebrow': 'App spotlight',
    'spot.title': 'BoardGameSelector: <span class="gradient-text">game night, decided.</span>',
    'spot.lead':
      "Your shelf is full of great games, yet choosing one takes longer than setting it up. BoardGameSelector ends the debate: tell it who's playing and how much time you have, and it picks the perfect game from your own collection.",

    'feat.pick.title': 'Let the app pick for you',
    'feat.pick.text':
      'One tap on "Pick a Game!" and a perfectly matched title from your collection appears, with players, play time, complexity and categories at a glance. Not feeling it? Pick another.',
    'feat.pick.alt': 'A game picked at random: One Deck Dungeon',
    'feat.filters.title': 'Filters that actually understand gamers',
    'feat.filters.text':
      'Narrow things down by player count, play time, complexity, categories, mechanics, and even cooperative vs. competitive play style. Only games you actually own make the cut.',
    'feat.filters.b1': 'Player count & play time',
    'feat.filters.b2': 'Weight / complexity range',
    'feat.filters.b3': 'Type-to-search categories & mechanics',
    'feat.filters.b4': 'Co-op or competitive',
    'feat.filters.alt': 'Pick a Game filters screen',
    'feat.short.title': 'Shortlist showdown',
    'feat.short.text':
      "Torn between a few favourites? Add them to your Shortlist and let fate decide. It's fair, fast and ends the table-wide debate instantly.",
    'feat.short.alt': 'Shortlist of three games',
    'feat.details.title': 'Everything about every game',
    'feat.details.text':
      'Gorgeous cover art, BGG rank and rating, complexity, image gallery and your own play history: total plays, last played and average duration.',
    'feat.details.alt': 'Game details with rank, complexity and rating',
    'feat.offline.title': 'Works anywhere, even offline',
    'feat.offline.text':
      'Game night at the cottage with no signal? No problem. Your collection, filters, picker and Shortlist all live on your device and open instantly.',
    'feat.offline.alt': 'Library shown while offline',
    'feat.dark.title': 'Beautiful by day, stunning by night',
    'feat.dark.text':
      "Browse your whole library in a rich grid or compact list, in a light or a dark theme that's easy on the eyes when the lights are dimmed for game night.",
    'feat.dark.alt': 'Library in dark mode',

    'gallery.eyebrow': 'Gallery',
    'gallery.title': 'Take a closer look',

    'about.eyebrow': 'Why AppForge Labs',
    'about.title': 'Small studio. High standards.',
    'about.lead':
      'We believe great apps are forged, not rushed. Every detail is shaped, tested and polished until it feels just right in your hand.',
    'about.v1.title': 'Crafted in Canada',
    'about.v1.text': 'Proudly designed and built in Canada by people who use their own apps every day.',
    'about.v2.title': 'Privacy first',
    'about.v2.text': 'Your data stays on your device. No ads, no tracking, no selling your information. Ever.',
    'about.v3.title': 'Fast & offline-ready',
    'about.v3.text': "Apps that open instantly and keep working when the Wi-Fi doesn't.",
    'about.v4.title': 'Obsessively polished',
    'about.v4.text': 'Thoughtful design, smooth animations and light & dark themes, down to the last pixel.',

    'cta.title': 'BoardGameSelector is coming soon',
    'cta.text':
      "We're putting the finishing touches on our first app. Get ready to spend less time choosing and more time playing.",
    'cta.badgeSmall': 'Coming soon on',

    'footer.rights': 'All rights reserved.',
    'footer.bgg':
      'BoardGameGeek is a trademark of BoardGameGeek, LLC. BoardGameSelector is an independent app and is not affiliated with or endorsed by BoardGameGeek.',
  },

  fr: {
    'meta.title': 'AppForge Labs — Nous forgeons des applications qu’on adore',
    'meta.description':
      'AppForge Labs est un studio canadien qui crée des applications mobiles soignées et respectueuses de la vie privée. Découvrez BoardGameSelector : la façon la plus futée de choisir votre prochain jeu de société.',
    skip: 'Aller au contenu',
    'nav.apps': 'Applications',
    'nav.features': 'Fonctionnalités',
    'nav.about': 'À propos',

    'hero.eyebrow': 'Studio d’applications indépendant · Fait au Canada',
    'hero.title': 'Nous forgeons des applications <span class="gradient-text">qu’on adore utiliser.</span>',
    'hero.lead':
      'AppForge Labs conçoit et développe des applications mobiles soignées et respectueuses de votre vie privée, qui simplifient le quotidien avec élégance. Notre première création transforme « on joue à quoi ce soir? » en une décision d’un seul geste.',
    'hero.ctaPrimary': 'Découvrir BoardGameSelector',
    'hero.ctaSecondary': 'Notre approche',
    'hero.stat1': 'application dans la forge',
    'hero.stat2': 'utilisable hors ligne',
    'hero.stat3': 'pub ou traqueur',
    'hero.chip1': 'Vous devriez jouer à… One Deck Dungeon!',
    'hero.chip2': 'Choisi en 1 geste',

    'apps.eyebrow': 'Nos applications',
    'apps.title': 'Façonnées une à une',
    'apps.lead':
      'Chaque produit AppForge Labs est conçu avec un souci obsessif du détail, fonctionne sans connexion et respecte votre vie privée.',
    'apps.soon': 'Bientôt sur Google Play',
    'apps.bgsDesc':
      'La façon la plus futée de choisir votre prochain jeu de société. Synchronisez votre collection BoardGameGeek, filtrez-la en quelques secondes et laissez l’application choisir pour vous.',
    'apps.tag1': 'Jeux de société',
    'apps.tag2': 'Synchro BoardGameGeek',
    'apps.tag3': 'Android',
    'apps.learnMore': 'La voir en action →',
    'apps.nextBadge': 'Dans la forge',
    'apps.nextTitle': 'Votre prochaine application préférée',
    'apps.nextDesc':
      'De nouvelles idées chauffent déjà. Chaque future application rejoindra cette page, conçue avec le même soin et le même savoir-faire.',

    'spot.eyebrow': 'Application vedette',
    'spot.title': 'BoardGameSelector : <span class="gradient-text">la soirée jeux, réglée.</span>',
    'spot.lead':
      'Vos tablettes débordent de bons jeux, mais en choisir un prend plus de temps que de l’installer. BoardGameSelector met fin au débat : indiquez qui joue et combien de temps vous avez, et il choisit le jeu parfait dans votre propre collection.',

    'feat.pick.title': 'Laissez l’application choisir',
    'feat.pick.text':
      'Un geste sur « Pick a Game! » et un jeu parfaitement adapté de votre collection apparaît, avec le nombre de joueurs, la durée, la complexité et les catégories en un coup d’œil. Pas convaincu? Relancez.',
    'feat.pick.alt': 'Un jeu choisi au hasard : One Deck Dungeon',
    'feat.filters.title': 'Des filtres qui comprennent les joueurs',
    'feat.filters.text':
      'Affinez par nombre de joueurs, durée, complexité, catégories, mécaniques et même par style de jeu coopératif ou compétitif. Seuls les jeux que vous possédez sont retenus.',
    'feat.filters.b1': 'Nombre de joueurs et durée',
    'feat.filters.b2': 'Plage de poids / complexité',
    'feat.filters.b3': 'Recherche de catégories et mécaniques',
    'feat.filters.b4': 'Coopératif ou compétitif',
    'feat.filters.alt': 'Écran des filtres de sélection',
    'feat.short.title': 'Le duel de la courte liste',
    'feat.short.text':
      'Vous hésitez entre quelques favoris? Ajoutez-les à votre courte liste et laissez le hasard trancher. C’est juste, rapide et ça règle le débat autour de la table en un instant.',
    'feat.short.alt': 'Courte liste de trois jeux',
    'feat.details.title': 'Tout sur chaque jeu',
    'feat.details.text':
      'Superbes illustrations, rang et note BGG, complexité, galerie d’images et votre propre historique : nombre de parties, dernière partie et durée moyenne.',
    'feat.details.alt': 'Détails d’un jeu avec rang, complexité et note',
    'feat.offline.title': 'Partout, même hors ligne',
    'feat.offline.text':
      'Soirée jeux au chalet sans réseau? Aucun problème. Votre collection, vos filtres, le sélecteur et votre courte liste sont sur votre appareil et s’ouvrent instantanément.',
    'feat.offline.alt': 'Bibliothèque affichée hors ligne',
    'feat.dark.title': 'Magnifique le jour, éblouissante la nuit',
    'feat.dark.text':
      'Parcourez toute votre ludothèque en grille ou en liste compacte, avec un thème clair ou sombre qui ménage vos yeux quand on tamise les lumières.',
    'feat.dark.alt': 'Bibliothèque en mode sombre',

    'gallery.eyebrow': 'Galerie',
    'gallery.title': 'Regardez de plus près',

    'about.eyebrow': 'Pourquoi AppForge Labs',
    'about.title': 'Petit studio. Grandes exigences.',
    'about.lead':
      'Nous croyons que les grandes applications se forgent, elles ne se bâclent pas. Chaque détail est façonné, testé et peaufiné jusqu’à ce qu’il tombe parfaitement sous la main.',
    'about.v1.title': 'Conçu au Canada',
    'about.v1.text': 'Fièrement conçues et développées au Canada par des gens qui utilisent leurs applications chaque jour.',
    'about.v2.title': 'Vie privée d’abord',
    'about.v2.text': 'Vos données restent sur votre appareil. Pas de pub, pas de pistage, aucune revente de vos informations. Jamais.',
    'about.v3.title': 'Rapide et hors ligne',
    'about.v3.text': 'Des applications qui s’ouvrent instantanément et continuent de fonctionner quand le Wi-Fi lâche.',
    'about.v4.title': 'Peaufinées à l’extrême',
    'about.v4.text': 'Design réfléchi, animations fluides et thèmes clair et sombre, jusqu’au dernier pixel.',

    'cta.title': 'BoardGameSelector arrive bientôt',
    'cta.text':
      'Nous mettons la touche finale à notre première application. Préparez-vous à passer moins de temps à choisir et plus de temps à jouer.',
    'cta.badgeSmall': 'Bientôt sur',

    'footer.rights': 'Tous droits réservés.',
    'footer.bgg':
      'BoardGameGeek est une marque de commerce de BoardGameGeek, LLC. BoardGameSelector est une application indépendante, non affiliée à BoardGameGeek ni approuvée par celle-ci.',
  },
};

const SUPPORTED_LANGS = Object.keys(TRANSLATIONS);
const LANG_STORAGE_KEY = 'afl-lang';

function detectLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (SUPPORTED_LANGS.includes(fromUrl)) return fromUrl;
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(stored)) return stored;
  } catch (e) {
    /* storage unavailable — fall through */
  }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browser) ? browser : 'en';
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = dict[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value !== undefined) el.alt = value;
  });

  document.documentElement.lang = lang;
  document.title = dict['meta.title'];
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = dict['meta.description'];

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    /* storage unavailable — choice lasts for this visit only */
  }
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.12, rootMargin: '0px 0px -40px 0px'},
  );
  items.forEach((el) => observer.observe(el));
}

document.documentElement.classList.add('js');
applyLanguage(detectLanguage());
setupReveal();

document.querySelectorAll('.lang-switch button').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
