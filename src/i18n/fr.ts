import type { Messages } from './en.ts'

/** French (fr) catalog — full key coverage mirroring en. */
export const fr: Messages = {
  app: {
    brand: 'MeditateIt',
    skipToMain: 'Aller au contenu principal',
    languageLabel: 'Langue',
    taglineHome: 'Paysages sonores génératifs',
    taglineSettings: 'Réglages',
    taglinePrivacy: 'Confidentialité',
    taglineTerms: 'Conditions',
    backHome: '← Retour à l’accueil',
    backHomeShort: 'Retour à l’accueil',
    homeLink: '← Accueil',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    settings: 'Réglages',
    disclaimer:
      'MeditateIt est un outil sonore génératif pour le bien-être personnel et la concentration. Ce n’est pas un dispositif médical et il n’est pas destiné à diagnostiquer, traiter, guérir ou prévenir une affection.',
  },

  home: {
    eyebrow: 'Paysages sonores génératifs',
    lede: 'Modelez bruit rose, tons et battements en direct — démarrez au calme en moins de trente secondes.',
    quickStart: 'Démarrage rapide',
    custom: 'Personnalisé',
    settings: 'Réglages',
    sequences: 'Séquences',
    sequencesAside: 'Parcours multi-étapes',
    yourSequences: 'Vos séquences',
    recentSessions: 'Sessions récentes',
    allAndBackup: 'Tout et sauvegarde',
    yourPresets: 'Vos préréglages',
    systemPresets: 'Préréglages système',
    browseAside: 'Filtrer par catégorie ou rechercher',
    searchLabel: 'Rechercher des préréglages',
    searchPlaceholder: 'Nom, description ou étiquette',
    categoryFilterAria: 'Catégories de préréglages',
    categoryAll: 'Tous',
    noPresetMatches: 'Aucun préréglage ne correspond à cette recherche et catégorie.',
    savedOnDevice: 'Enregistré sur cet appareil',
    openEnded: 'Sans limite',
    delete: 'Supprimer',
    deleteConfirm: (name: string) =>
      `Supprimer le préréglage « ${name} » ? Cette action est irréversible.`,
    deleteSequenceConfirm: (name: string) =>
      `Supprimer la séquence « ${name} » ? Cette action est irréversible.`,
    deleteAria: (name: string) => `Supprimer ${name}`,
    minutes: (m: number) => `${m} min`,
    replay: 'Rejouer',
    sequenceTag: 'Séquence',
    sequenceDuration: (m: number, stages: number) =>
      `${m} min · ${stages} étapes`,
    historySeconds: (s: number) => `${s}s`,
    historyMinutes: (m: number, s: number) =>
      s > 0 ? `${m}m ${s}s` : `${m}m`,
    historyHours: (h: number, m: number) =>
      m > 0 ? `${h}h ${m}m` : `${h}h`,
  },

  categories: {
    focus: 'Concentration',
    sleep: 'Sommeil',
    calm: 'Calme',
    nature: 'Nature',
    beats: 'Battements',
    tones: 'Tons',
  },

  blurbs: {
    'daily-calm': 'Rose compatible enceinte + 528 + douce pulsation',
    sleep: 'Lit brun profond, pluie douce, battement lent ~2 Hz',
    focus: 'Rose + 528 avec battement moyen ~16 Hz',
    'anxiety-softener': 'Rose doux + ton 396 Hz + douce pulsation ~10 Hz',
    'deep-rest': 'Brun sans limite + ressac + ton grave',
    'forest-canopy': 'Forêt sur rose léger ; sans battement',
    'rain-window': 'Pluie dominante avec rumble brun atténué',
    'shore-wash': 'Rivage avec voile blanc doux + douce pulsation',
    'open-wind': 'Vent ouvert avec bruit blanc dispersé',
    'pink-bed': 'Couverture de bruit rose uniquement',
    'brown-depth': 'Rumble brun profond ; sans limite',
    'white-haze': 'Voile blanc filtré pour un léger masquage',
    'soft-396': 'Ton 396 en avant sur un lit rose calme',
    'bright-528': 'Ton 528 clair avec léger soutien rose',
    'clear-741': 'Ton 741 plus aigu avec air blanc dispersé',
    'alpha-glide': 'Binaural doux ~10 Hz sur rose calme',
    'theta-drift': 'Binaural ~6 Hz sur brun doux + 174',
    'delta-settle': 'Binaural très lent ~1,5 Hz pour la nuit',
    'speaker-pulse': 'Pulsation isochrone plus marquée pour enceintes',
    'night-rain': 'Lit de sommeil pluvieux avec battement lent',
    'study-grove': 'Battement de concentration avec air forestier',
    'morning-clear': 'Rose plus clair + 528 + pulsation moyenne',
    'dusk-hum': 'Brun du soir + ton grave + rivage doux',
  },

  systemPresets: {
    'daily-calm': 'Calme du jour',
    sleep: 'Sommeil',
    focus: 'Concentration',
    'anxiety-softener': 'Calme doux',
    'deep-rest': 'Repos profond',
    'forest-canopy': 'Canopée forestière',
    'rain-window': 'Fenêtre de pluie',
    'shore-wash': 'Ressac du rivage',
    'open-wind': 'Vent ouvert',
    'pink-bed': 'Lit rose',
    'brown-depth': 'Profondeur brune',
    'white-haze': 'Brume blanche',
    'soft-396': 'Doux 396',
    'bright-528': 'Clair 528',
    'clear-741': 'Net 741',
    'alpha-glide': 'Glisse ~10 Hz',
    'theta-drift': 'Dérive ~6 Hz',
    'delta-settle': 'Nuit ~1,5 Hz',
    'speaker-pulse': 'Pulsation enceinte',
    'night-rain': 'Pluie de nuit',
    'study-grove': 'Bosquet d’étude',
    'morning-clear': 'Matin clair',
    'dusk-hum': 'Bourdon du crépuscule',
  },

  systemSequences: {
    'wind-down': {
      name: 'Descente en douceur',
      summary: 'Calme doux → lit rose → sommeil',
      stages: {
        'wd-1': 'Atterrissage doux',
        'wd-2': 'Pose rose',
        'wd-3': 'S’installer',
      },
    },
    'focus-block': {
      name: 'Bloc de concentration',
      summary: 'Arrivée calme → focus → clôture douce',
      stages: {
        'fb-1': 'Arriver',
        'fb-2': 'Travail concentré',
        'fb-3': 'Clôture douce',
      },
    },
    'deep-sleep-ramp': {
      name: 'Détente nocturne',
      summary: 'Rose → glisse ~5 Hz → lit de nuit',
      stages: {
        'ds-1': 'Dénouement rose',
        'ds-2': 'Glisse ~5 Hz',
        'ds-3': 'Lit de nuit',
      },
    },
  },

  settings: {
    themeHeading: 'Thème',
    themeLede:
      'Choisissez une palette calme. Système suit le mode clair ou sombre de l’appareil.',
    themeChromeNote:
      'Changez la palette à tout moment avec le contrôle de thème en haut de l’app. Système suit le mode clair ou sombre de l’appareil.',
    themeSystem: 'Système',
    themes: {
      light: 'Clair',
      dark: 'Sombre',
      dusk: 'Crépuscule',
      mist: 'Brume',
      forest: 'Forêt',
    },
    languageHeading: 'Langue',
    languageSystem: 'Système',
    languageChromeNote:
      'Le drapeau en haut montre toujours la langue en cours — y compris lorsque Système suit le navigateur. Ouvrez Réglages via l’engrenage à côté.',
    languageLede:
      'Système suit la langue du navigateur lorsqu’elle est prise en charge (English, Español, Català, Français, Português). Un choix explicite est enregistré sur cet appareil. Les dates et heures suivent la locale active.',
    backupHeading: 'Sauvegarde',
    backupLede:
      'Téléchargez ou restaurez préférences, préréglages, séquences et historique de sessions en JSON. L’export inclut les écoutes terminées par défaut. Sans compte — le fichier reste sur cet appareil.',
    exportJson: 'Exporter JSON',
    importModeLegend: 'Mode d’import',
    mergeTitle: 'Fusionner',
    mergeDetail:
      ' — conserver les préréglages et séquences existants ; les mêmes ids sont mis à jour depuis le fichier',
    replaceTitle: 'Remplacer',
    replaceDetail:
      ' — écraser préférences, préréglages et séquences ; effacer l’historique si le fichier n’en a pas',
    keepHistoryWhenOmitted:
      'Conserver l’historique existant si le fichier omet l’historique',
    importJson: 'Importer JSON…',
    historyHeading: 'Historique des sessions',
    clear: 'Effacer',
    historyLede:
      'Écoutes terminées sur cet appareil (écrites à l’arrêt ou en quittant une session). Au plus 100 entrées, plus la limite de temps ci-dessous.',
    retention: 'Rétention',
    historyEmpty: 'Pas encore de sessions. Lancez quelque chose, puis arrêtez.',
    clearHistoryConfirm:
      'Effacer tout l’historique des sessions sur cet appareil ? Préférences et préréglages restent.',
    historyCleared: 'Historique des sessions effacé.',
    eraseHeading: 'Effacer toutes les données',
    eraseLede:
      'Supprime préférences, préréglages, séquences, historique et rétention de ce navigateur. Exportez une sauvegarde d’abord si vous pourriez en avoir besoin.',
    clearCachesToo:
      'Aussi vider les caches hors ligne et désenregistrer le service worker',
    eraseButton: 'Effacer toutes les données locales…',
    eraseConfirm:
      'Effacer toutes les données MeditateIt sur cet appareil (préférences, préréglages, séquences, historique et rétention) ? Cette action est irréversible.',
    eraseConfirmWithCaches:
      'Effacer toutes les données MeditateIt sur cet appareil (préférences, préréglages, séquences, historique et rétention) ? Cela vide aussi les caches hors ligne et désenregistre le service worker. Cette action est irréversible.',
    aboutHeading: 'À propos et mentions légales',
    aboutLede:
      'MeditateIt est un outil sonore génératif pour le bien-être personnel et la concentration. Ce n’est pas un dispositif médical et il n’est pas destiné à diagnostiquer, traiter, guérir ou prévenir une affection. En cas de souci de santé, consultez un professionnel qualifié.',
    exported: (presetCount, sequenceCount, sessionCount) =>
      `Exporté ${presetCount} préréglage${presetCount === 1 ? '' : 's'}, ${sequenceCount} séquence${sequenceCount === 1 ? '' : 's'} et ${sessionCount} session${sessionCount === 1 ? '' : 's'}.`,
    imported: (mode, presetCount, sequenceCount, historyCount) =>
      `Import (${mode}) : ${presetCount} préréglage${presetCount === 1 ? '' : 's'}, ${sequenceCount} séquence${sequenceCount === 1 ? '' : 's'}, ${historyCount} entrée${historyCount === 1 ? '' : 's'} d’historique.`,
    retentionUpdated: (label, kept) =>
      `Rétention de l’historique : ${label.toLowerCase()}. ${kept} entrée${kept === 1 ? '' : 's'} conservée${kept === 1 ? '' : 's'}.`,
    erased: (keyCount) =>
      `Toutes les données locales MeditateIt effacées (${keyCount} clés).`,
    erasedCaches: (swCount) =>
      ` Caches vidés ; ${swCount} service worker${swCount === 1 ? '' : 's'} désenregistré${swCount === 1 ? '' : 's'}.`,
    retentionForever: 'Conserver jusqu’à la limite de nombre (100)',
    retentionDays: (days) => `${days} jours`,
  },

  dialogs: {
    savePresetTitle: 'Enregistrer le préréglage',
    savePresetBody:
      'Stockez ce paysage sonore localement sur cet appareil. Aucun compte requis.',
    saveSequenceTitle: 'Enregistrer la séquence',
    saveSequenceBody:
      'Stockez cette séquence multi-étapes localement sur cet appareil. Les étapes gardent leurs recettes pour une restauration autonome.',
    name: 'Nom',
    cancel: 'Annuler',
    update: 'Mettre à jour',
    save: 'Enregistrer',
    saveAsNew: 'Enregistrer comme nouveau',
    saving: 'Enregistrement…',
    headphonesTitle: 'Casque requis',
    headphonesBody:
      'Le mode binaural joue des tons légèrement différents dans chaque oreille pour entendre une pulsation. Un casque stéréo est requis ; utilisez le mode isochrone pour les enceintes. C’est un effet d’écoute, pas un traitement médical.',
    headphonesConfirm: 'J’ai un casque',
  },

  session: {
    heading: 'Session',
    preparing: 'Préparation de la session…',
    play: 'Lecture',
    pause: 'Pause',
    continueAudio: 'Touchez pour poursuivre l’audio',
    saveAsPreset: 'Enregistrer comme préréglage',
    unavailable: 'Audio indisponible dans ce navigateur',
    pausedByBrowser: 'Audio mis en pause par le navigateur',
    crossfading: 'Fondu entre préréglages…',
    running: 'Paysage sonore en cours',
    ready: 'Prêt quand vous l’êtes',
    exploreHeading: 'Explorer',
    exploreNote:
      'Vous préférez un parcours guidé multi-étapes ? Les séquences sont sur l’écran d’accueil.',
    browseSequences: 'Parcourir les séquences',
    customName: 'Personnalisé',
    myPreset: 'Mon préréglage',
    mineSuffix: (name) => `${name} (à moi)`,
  },

  controls: {
    preset: 'Préréglage',
    fadingHint: 'Fondu ~2s',
    switchWhilePlaying:
      'Changer pendant la lecture provoque un fondu d’environ 2 secondes.',
    pickThenPlay: 'Choisissez une recette de départ, puis appuyez sur Lecture.',
    master: 'Général',
    duration: 'Durée',
    openEnded: 'Sans limite',
    openTimer: 'Libre',
    remainingAria: (time) => `Reste ${time}`,
    fade: 'Fondu',
    fadeIn: (s) => `Entrée ${s}s`,
    fadeOut: (s) => `Sortie ${s}s`,
    layers: 'Couches',
    layersNote:
      'Activez une couche pour façonner son son — chacune inclut un EQ simple.',
    noise: 'Bruit',
    noiseColor: 'Couleur du bruit',
    tone: 'Ton',
    toneHz: 'Ton (Hz)',
    toneNote:
      'Fréquences nommées courantes en tons purs — pour une préférence d’écoute, pas pour des effets de santé prouvés.',
    hz: (value) => `${value} Hz`,
    hzApprox: (value) => `~${value} Hz`,
    beat: 'Battement',
    beatMode: 'Mode de battement',
    beatRate: (hz) => `Rythme ${hz} Hz`,
    nature: 'Nature',
    natureSound: 'Son de nature',
    natureBrightness: 'Brillance nature',
    brightness: (pct) => `Brillance ${pct}%`,
    volumeAria: (name) => `Volume ${name}`,
    eq: 'EQ',
    eqGroup: (name) => `EQ ${name}`,
    eqBandAria: (layer, band) => `EQ ${band} de ${layer}`,
    eqBandHz: (band, hz) => `${band} · ${hz} Hz`,
    eqDb: (value) => `${value} dB`,
    eqDbZero: '0 dB',
    flat: 'Plat',
    eqLow: 'Graves',
    eqMid: 'Médiums',
    eqHigh: 'Aigus',
    beatOff: 'Off',
    beatIsochronic: 'Isochrone',
    beatBinaural: 'Binaural',
    minutesShort: (m) => `${m}m`,
    noisePink: 'rose',
    noiseBrown: 'brun',
    noiseWhite: 'blanc',
    natureRain: 'pluie',
    natureShore: 'rivage',
    natureWind: 'vent',
    natureForest: 'forêt',
  },

  sequence: {
    heading: 'Séquence',
    preparing: 'Préparation de la séquence…',
    missing: 'Cette séquence est introuvable.',
    complete: 'Séquence terminée',
    doneTitle: 'Séquence achevée',
    finished: 'Séquence finie',
    stageOf: (n, total) => `Étape ${n} sur ${total}`,
    crossfading: 'Fondu vers l’étape suivante…',
    crossfadingTo: (stage) => `Fondu vers ${stage}…`,
    nextStage: 'étape suivante',
    ready: 'Prêt quand vous l’êtes',
    unavailable: 'Audio indisponible dans ce navigateur',
    pausedByBrowser: 'Audio mis en pause par le navigateur',
    playAgain: 'Rejouer',
    endSequence: 'Terminer la séquence',
    skipStage: 'Passer l’étape',
    stageRemaining: (time) => `Reste ${time} pour l’étape`,
    done: 'Terminé',
    allStagesComplete: (n) => `Les ${n} étapes sont terminées`,
    stageProgress: (name, remaining, duration, index, total, fading) =>
      `${name} · ${remaining} sur ${duration} · étape ${index} / ${total}${fading ? ' · fondu' : ''}`,
    stageProgressAria: (name) => `Progression de ${name}`,
    saveSequence: 'Enregistrer la séquence',
    saveACopy: 'Enregistrer une copie',
    master: 'Général',
    skippedTo: (name) => `Passage à ${name}`,
    nowPlaying: (name) => `Lecture de ${name}`,
    playingStage: (name, n, total) =>
      `Lecture de ${name} · étape ${n} sur ${total}`,
    stageOfNamed: (n, total, name) => `Étape ${n} sur ${total} · ${name}`,
    mineSuffix: (name) => `${name} (à moi)`,
    paused: 'En pause',
    savedOnDevice: (name) => `Enregistré « ${name} » sur cet appareil`,
    savedFrom: (name) => `Enregistré depuis ${name}`,
    stagesCount: (n) => `${n} étapes`,
    saveFailed: 'Impossible d’enregistrer la séquence',
    nothingToSave: 'Rien à enregistrer',
  },

  media: {
    liveSession: 'Session en direct',
    sequenceAlbum: 'Séquence',
    defaultAlbum: 'Session de méditation',
  },

  pwa: {
    updateAvailable: 'Mise à jour disponible',
    reload: 'Recharger',
    later: 'Plus tard',
    installPrompt: 'Installer MeditateIt sur cet appareil',
    install: 'Installer',
    dismiss: 'Ignorer',
    iosInstallTitle: 'Ajouter MeditateIt à l’écran d’accueil',
    iosInstallStepShare: 'Touchez Partager dans Safari',
    iosInstallStepAdd: 'Choisissez Sur l’écran d’accueil',
  },

  legal: {
    privacyTitle: 'Confidentialité',
    privacyLede:
      'Courte note sur ce que MeditateIt stocke sur cet appareil. Ce n’est pas une politique de confidentialité formelle ni un conseil juridique.',
    privacyLocalHeading: 'Stockage uniquement local',
    privacyLocalP1:
      'MeditateIt n’a pas de comptes et ne synchronise pas de données vers un serveur MeditateIt. Préférences, préréglages enregistrés, séquences enregistrées, historique de sessions et préférence de rétention de l’historique restent dans le localStorage de ce navigateur sur votre appareil.',
    privacyLocalP2:
      'L’export et l’import sont des fichiers JSON que vous choisissez d’enregistrer ou de charger. Effacer les données du site dans le navigateur supprime ce que l’app a stocké.',
    privacyKeysHeading: 'Clés de stockage',
    privacyKeyPrefs: 'préférences de volume et de session',
    privacyKeyPresets: 'préréglages que vous enregistrez',
    privacyKeySequences: 'séquences multi-étapes que vous enregistrez',
    privacyKeyHistory: 'historique des écoutes terminées',
    privacyKeyRetention: 'préférence de rétention de l’historique de sessions',
    privacyNetworkHeading: 'Réseau',
    privacyNetworkBody:
      'Les polices de l’interface sont auto-hébergées avec l’app. Il n’y a pas d’analytique propriétaire dans la version actuelle. Le site public marcfs31.github.io/MeditateIt est hébergé sur GitHub Pages ; GitHub peut conserver des journaux d’accès d’hébergement (par exemple IP, agent utilisateur, URL et horodatage). Ces journaux d’hôte sont hors du localStorage de cette app. Héberger votre propre copie peut encore impliquer les journaux de votre hébergeur ou CDN.',
    termsTitle: 'Conditions',
    termsLede:
      'Brèves notes pour un usage personnel de MeditateIt. Ce ne sont pas des conditions d’utilisation formelles ni un conseil juridique.',
    termsUseHeading: 'Usage personnel local',
    termsUseBody:
      'MeditateIt est un outil de son génératif pour le bien-être que vous utilisez localement dans le navigateur. Servez-vous-en pour l’écoute personnelle et la création sonore.',
    termsAsIsHeading: 'Tel quel',
    termsAsIsBody:
      'Le logiciel est fourni tel quel, sans aucune garantie. La lecture audio, les minuteries et la persistance peuvent échouer ou se comporter différemment selon les navigateurs et appareils.',
    termsWellnessHeading: 'Pas un traitement médical',
    termsWellnessP1:
      'MeditateIt n’est pas un dispositif médical et n’est pas destiné à diagnostiquer, traiter, guérir ou prévenir une quelconque affection. En cas de souci de santé, consultez un professionnel qualifié.',
    termsWellnessP2:
      'Gardez un volume d’écoute confortable. Utilisez un casque stéréo lorsque le mode binaural le demande — c’est une technique d’écoute, pas une thérapie.',
    backSettings: '← Réglages',
    home: 'Accueil',
  },

  errors: {
    storage: {
      tooLarge: 'Le fichier de sauvegarde est trop volumineux.',
      invalidJson: 'Le fichier de sauvegarde n’est pas un JSON valide.',
      notObject: 'Le fichier de sauvegarde doit être un objet JSON.',
      forbiddenKey: 'Le fichier de sauvegarde contient des clés interdites.',
      badFormat: 'Ce fichier n’est pas une sauvegarde MeditateIt.',
      badVersion: 'Cette version de sauvegarde n’est pas prise en charge.',
      badPresets: 'Les préréglages de la sauvegarde sont invalides.',
      presetsTooMany: 'La sauvegarde contient trop de préréglages.',
      exportFailed: 'Impossible d’exporter la sauvegarde.',
      importFailed: 'Impossible d’importer la sauvegarde.',
      eraseFailed: 'Impossible d’effacer les données locales.',
      retentionFailed: 'Impossible de mettre à jour la rétention de l’historique.',
      storageUnavailable: 'Le stockage local est indisponible.',
    },
    preset: {
      nameRequired: 'Le nom est requis.',
      nameRequiredStrict: 'Le nom du préréglage est requis.',
      invalidRecipe: 'Recette de session invalide.',
      idRequired: 'L’id du préréglage est requis.',
      cannotOverwriteSystem:
        'Impossible d’écraser un préréglage système.',
      tooMany: (max) => `Au plus ${max} préréglages utilisateur.`,
      saveFailed: 'Impossible d’enregistrer le préréglage.',
    },
    sequence: {
      nameRequired: 'Le nom de la séquence est requis.',
      needsStage: 'La séquence doit comporter au moins une étape.',
      idRequired: 'L’id de la séquence est requis.',
      cannotOverwriteSystem:
        'Impossible d’écraser une séquence système.',
      tooMany: (max) => `Au plus ${max} séquences utilisateur.`,
      saveFailed: 'Impossible d’enregistrer la séquence.',
    },
  },
}
