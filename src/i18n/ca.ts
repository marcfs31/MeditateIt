import type { Messages } from './en.ts'

/** Catalan (ca) catalog — full key coverage mirroring en. */
export const ca: Messages = {
  app: {
    brand: 'MeditateIt',
    skipToMain: 'Salta al contingut principal',
    languageLabel: 'Idioma',
    taglineHome: 'Paisatges sonors generatius',
    taglineSettings: 'Configuració',
    taglinePrivacy: 'Privadesa',
    taglineTerms: 'Termes',
    backHome: '← Torna a l’inici',
    backHomeShort: 'Torna a l’inici',
    homeLink: '← Inici',
    privacy: 'Privadesa',
    terms: 'Termes',
    settings: 'Configuració',
    disclaimer:
      'MeditateIt és una eina de so generatiu per al benestar personal i la concentració. No és un dispositiu mèdic i no està pensada per diagnosticar, tractar, curar ni prevenir cap afecció.',
  },

  home: {
    eyebrow: 'Paisatges sonors generatius',
    lede: 'Modela soroll rosa, tons i pulsacions en directe — comença amb calma en menys de trenta segons.',
    quickStart: 'Inici ràpid',
    custom: 'Personalitzat',
    settings: 'Configuració',
    sequences: 'Seqüències',
    sequencesAside: 'Recorreguts per etapes',
    yourSequences: 'Les teves seqüències',
    recentSessions: 'Sessions recents',
    allAndBackup: 'Tot i còpia',
    yourPresets: 'Els teus preajustos',
    systemPresets: 'Preajustos del sistema',
    browseAside: 'Filtra per categoria o cerca',
    searchLabel: 'Cerca preajustos',
    searchPlaceholder: 'Nom, descripció o etiqueta',
    categoryFilterAria: 'Categories de preajustos',
    categoryAll: 'Tots',
    noPresetMatches: 'Cap preajust no coincideix amb aquesta cerca i categoria.',
    savedOnDevice: 'Desat en aquest dispositiu',
    openEnded: 'Sense límit',
    delete: 'Suprimeix',
    deleteConfirm: (name: string) =>
      `Vols suprimir el preajust «${name}»? Aquesta acció no es pot desfer.`,
    deleteSequenceConfirm: (name: string) =>
      `Vols suprimir la seqüència «${name}»? Aquesta acció no es pot desfer.`,
    deleteAria: (name: string) => `Suprimeix ${name}`,
    minutes: (m: number) => `${m} min`,
    replay: 'Torna a reproduir',
    sequenceTag: 'Seqüència',
    sequenceDuration: (m: number, stages: number) =>
      `${m} min · ${stages} etapes`,
    historySeconds: (s: number) => `${s}s`,
    historyMinutes: (m: number, s: number) =>
      s > 0 ? `${m}m ${s}s` : `${m}m`,
    historyHours: (h: number, m: number) =>
      m > 0 ? `${h}h ${m}m` : `${h}h`,
  },

  categories: {
    focus: 'Enfocament',
    sleep: 'Son',
    calm: 'Calma',
    nature: 'Natura',
    beats: 'Polsos',
    tones: 'Tons',
  },

  blurbs: {
    'daily-calm': 'Rosa apta per a altaveu + 528 + pols suau',
    sleep: 'Llit marró profund, pluja suau, pols ~2 Hz lent',
    focus: 'Rosa + 528 amb pols mitjà ~16 Hz',
    'anxiety-softener': 'Rosa suau + to 396 Hz + pols suau ~10 Hz',
    'deep-rest': 'Marró sense límit + onatge + to baix',
    'forest-canopy': 'Bosc sobre rosa suau; sense pols',
    'rain-window': 'Pluja dominant amb rumble marró suau',
    'shore-wash': 'Ribera amb vel blanc suau + pols gentil',
    'open-wind': 'Vent obert amb soroll blanc dispers',
    'pink-bed': 'Manta només de soroll rosa',
    'brown-depth': 'Rumble marró profund; sense límit',
    'white-haze': 'Vel blanc filtrat per a emmascarament suau',
    'soft-396': 'To 396 en primer pla sobre rosa quiet',
    'bright-528': 'To 528 clar amb suport rosa lleuger',
    'clear-741': 'To 741 més alt amb aire blanc dispers',
    'alpha-glide': 'Binaural suau ~10 Hz sobre rosa quiet',
    'theta-drift': 'Binaural ~6 Hz sobre marró suau + 174',
    'delta-settle': 'Binaural molt lent ~1,5 Hz per a la nit',
    'speaker-pulse': 'Pols isòcron més profund per a altaveus',
    'night-rain': 'Llit de son amb pluja forta i pols lent',
    'study-grove': 'Pols d’enfocament amb aire de bosc suau',
    'morning-clear': 'Rosa més brillant + 528 + pols mitjà',
    'dusk-hum': 'Marró de capvespre + to baix + ribera suau',
  },

  systemPresets: {
    'daily-calm': 'Calma diària',
    sleep: 'Son',
    focus: 'Enfocament',
    'anxiety-softener': 'Calma suau',
    'deep-rest': 'Descans profund',
    'forest-canopy': 'Dosser del bosc',
    'rain-window': 'Finestra de pluja',
    'shore-wash': 'Onatge de ribera',
    'open-wind': 'Vent obert',
    'pink-bed': 'Llit rosa',
    'brown-depth': 'Profunditat marró',
    'white-haze': 'Boira blanca',
    'soft-396': 'Suau 396',
    'bright-528': 'Brillant 528',
    'clear-741': 'Clar 741',
    'alpha-glide': 'Lliscat ~10 Hz',
    'theta-drift': 'Deriva ~6 Hz',
    'delta-settle': 'Nit ~1,5 Hz',
    'speaker-pulse': 'Pols d’altaveu',
    'night-rain': 'Pluja nocturna',
    'study-grove': 'Bosquet d’estudi',
    'morning-clear': 'Matí clar',
    'dusk-hum': 'Brunzit del capvespre',
  },

  systemSequences: {
    'wind-down': {
      name: 'Abaixada de ritme',
      summary: 'Calma suau → llit rosa → son',
      stages: {
        'wd-1': 'Aterratge suau',
        'wd-2': 'Assentament rosa',
        'wd-3': 'Assentar-se',
      },
    },
    'focus-block': {
      name: 'Bloc d’enfocament',
      summary: 'Arribar amb calma → enfocament → tancament suau',
      stages: {
        'fb-1': 'Arribar',
        'fb-2': 'Treball enfocat',
        'fb-3': 'Tancament suau',
      },
    },
    'deep-sleep-ramp': {
      name: 'Relaxació nocturna',
      summary: 'Rosa → lliscament ~5 Hz → llit nocturn',
      stages: {
        'ds-1': 'Desenredament rosa',
        'ds-2': 'Lliscament ~5 Hz',
        'ds-3': 'Llit nocturn',
      },
    },
  },

  settings: {
    themeHeading: 'Tema',
    themeLede:
      'Tria una paleta calmada. Sistema segueix el mode clar o fosc del dispositiu.',
    themeChromeNote:
      'Canvia la paleta en qualsevol moment amb el control de tema de la part superior de l’app. Sistema segueix el mode clar o fosc del dispositiu.',
    themeSystem: 'Sistema',
    themes: {
      light: 'Clar',
      dark: 'Fosc',
      dusk: 'Capvespre',
      mist: 'Boira',
      forest: 'Bosc',
    },
    languageHeading: 'Idioma',
    languageSystem: 'Sistema',
    languageChromeNote:
      'La bandera de dalt sempre mostra l’idioma en ús — també quan Sistema segueix el navegador. Obre Configuració amb l’engranatge del costat.',
    languageLede:
      'Sistema segueix l’idioma del navegador quan està disponible (English, Español, Català, Français, Português). Una tria explícita es desa en aquest dispositiu. Les dates i hores segueixen l’idioma actiu.',
    backupHeading: 'Còpia de seguretat',
    backupLede:
      'Descarrega o restaura preferències, preajustos, seqüències i historial de sessions com a JSON. L’exportació inclou escoltes acabades per defecte. Sense compte: el fitxer roman en aquest dispositiu.',
    exportJson: 'Exporta JSON',
    importModeLegend: 'Mode d’importació',
    mergeTitle: 'Combina',
    mergeDetail:
      ' — conserva preajustos i seqüències existents; els mateixos ids s’actualitzen des del fitxer',
    replaceTitle: 'Reemplaça',
    replaceDetail:
      ' — sobrescriu preferències, preajustos i seqüències; esborra l’historial si el fitxer no en porta',
    keepHistoryWhenOmitted:
      'Conserva l’historial existent si el fitxer omet l’historial',
    importJson: 'Importa JSON…',
    historyHeading: 'Historial de sessions',
    clear: 'Buida',
    historyLede:
      'Escoltes acabades en aquest dispositiu (s’escriuen en parar o sortir d’una sessió). Com a màxim 100 entrades, més el límit de temps de sota.',
    retention: 'Retenció',
    historyEmpty: 'Encara no hi ha sessions. Reprodueix alguna cosa i després para.',
    clearHistoryConfirm:
      'Vols buidar tot l’historial de sessions en aquest dispositiu? Les preferències i els preajustos es conserven.',
    historyCleared: 'Historial de sessions buidat.',
    eraseHeading: 'Esborra totes les dades',
    eraseLede:
      'Elimina preferències, preajustos, seqüències, historial i la retenció d’aquest navegador. Exporta una còpia abans si la pots necessitar.',
    clearCachesToo:
      'També buida les memòries cau fora de línia i anul·la el registre del service worker',
    eraseButton: 'Esborra totes les dades locals…',
    eraseConfirm:
      'Vols esborrar totes les dades de MeditateIt en aquest dispositiu (preferències, preajustos, seqüències, historial i retenció)? Aquesta acció no es pot desfer.',
    eraseConfirmWithCaches:
      'Vols esborrar totes les dades de MeditateIt en aquest dispositiu (preferències, preajustos, seqüències, historial i retenció)? També buida les memòries cau fora de línia i anul·la el service worker. Aquesta acció no es pot desfer.',
    aboutHeading: 'Quant a i legal',
    aboutLede:
      'MeditateIt és una eina de so generatiu per al benestar personal i la concentració. No és un dispositiu mèdic i no està pensada per diagnosticar, tractar, curar ni prevenir cap afecció. Si tens dubtes de salut, parla amb un professional qualificat.',
    exported: (presetCount, sequenceCount, sessionCount) =>
      `S’han exportat ${presetCount} ${presetCount === 1 ? 'preajust' : 'preajustos'}, ${sequenceCount} ${sequenceCount === 1 ? 'seqüència' : 'seqüències'} i ${sessionCount} ${sessionCount === 1 ? 'sessió' : 'sessions'}.`,
    imported: (mode, presetCount, sequenceCount, historyCount) =>
      `Importació (${mode}): ${presetCount} ${presetCount === 1 ? 'preajust' : 'preajustos'}, ${sequenceCount} ${sequenceCount === 1 ? 'seqüència' : 'seqüències'}, ${historyCount} ${historyCount === 1 ? 'entrada' : 'entrades'} d’historial.`,
    retentionUpdated: (label, kept) =>
      `Retenció de l’historial: ${label.toLowerCase()}. ${kept} ${kept === 1 ? 'entrada' : 'entrades'} ${kept === 1 ? 'conservada' : 'conservades'}.`,
    erased: (keyCount) =>
      `Totes les dades locals de MeditateIt s’han esborrat (${keyCount} claus).`,
    erasedCaches: (swCount) =>
      ` Memòries cau buidades; ${swCount} service worker${swCount === 1 ? '' : 's'} anul·lat${swCount === 1 ? '' : 's'}.`,
    retentionForever: 'Conserva fins al límit de quantitat (100)',
    retentionDays: (days) => `${days} dies`,
  },

  dialogs: {
    savePresetTitle: 'Desa el preajust',
    savePresetBody:
      'Desa aquest paisatge sonor en aquest dispositiu. No cal cap compte.',
    saveSequenceTitle: 'Desa la seqüència',
    saveSequenceBody:
      'Desa aquesta seqüència de diverses etapes en aquest dispositiu. Les etapes conserven les receptes perquè la restauració sigui autosuficient.',
    name: 'Nom',
    cancel: 'Cancel·la',
    update: 'Actualitza',
    save: 'Desa',
    saveAsNew: 'Desa com a nou',
    saving: 'Desant…',
    headphonesTitle: 'Calen auriculars',
    headphonesBody:
      'El mode binaural reprodueix tons lleugerament diferents a cada orella perquè sentis un pols. Calen auriculars estèreo; usa el mode isòcron amb altaveus. És un efecte d’escolta, no un tractament mèdic.',
    headphonesConfirm: 'Tinc auriculars',
  },

  session: {
    heading: 'Sessió',
    preparing: 'Preparant la sessió…',
    play: 'Reprodueix',
    pause: 'Pausa',
    continueAudio: 'Toca per continuar l’àudio',
    saveAsPreset: 'Desa com a preajust',
    unavailable: 'Àudio no disponible en aquest navegador',
    pausedByBrowser: 'Àudio en pausa pel navegador',
    crossfading: 'Fonent preajustos…',
    running: 'Paisatge sonor en marxa',
    ready: 'A punt quan vulguis',
    exploreHeading: 'Explora',
    exploreNote:
      'Prefereixes un recorregut guiat per etapes? Les seqüències són a la pantalla d’inici.',
    browseSequences: 'Veure seqüències',
    customName: 'Personalitzat',
    myPreset: 'El meu preajust',
    mineSuffix: (name) => `${name} (meu)`,
  },

  controls: {
    preset: 'Preajust',
    fadingHint: 'Fosa ~2s',
    switchWhilePlaying:
      'Canviar mentre sona fa una fosa d’uns ~2 segons.',
    pickThenPlay: 'Tria una recepta inicial i prem Reprodueix.',
    master: 'General',
    duration: 'Durada',
    openEnded: 'Sense límit',
    openTimer: 'Lliure',
    remainingAria: (time) => `Queden ${time}`,
    fade: 'Fosa',
    fadeIn: (s) => `Entrada ${s}s`,
    fadeOut: (s) => `Sortida ${s}s`,
    layers: 'Capes',
    layersNote:
      'Activa una capa per donar forma al seu so — cadascuna inclou un EQ senzill.',
    noise: 'Soroll',
    noiseColor: 'Color del soroll',
    tone: 'To',
    toneHz: 'To (Hz)',
    toneNote:
      'Freqüències amb nom habituals com a tons purs — per preferència d’escolta, no per efectes de salut demostrats.',
    hz: (value) => `${value} Hz`,
    hzApprox: (value) => `~${value} Hz`,
    beat: 'Pols',
    beatMode: 'Mode de pols',
    beatRate: (hz) => `Ritme ${hz} Hz`,
    nature: 'Natura',
    natureSound: 'So de natura',
    natureBrightness: 'Brillantor de natura',
    brightness: (pct) => `Brillantor ${pct}%`,
    volumeAria: (name) => `Volum de ${name}`,
    eq: 'EQ',
    eqGroup: (name) => `EQ de ${name}`,
    eqBandAria: (layer, band) => `EQ ${band} de ${layer}`,
    eqBandHz: (band, hz) => `${band} · ${hz} Hz`,
    eqDb: (value) => `${value} dB`,
    eqDbZero: '0 dB',
    flat: 'Pla',
    eqLow: 'Greus',
    eqMid: 'Mitjans',
    eqHigh: 'Aguts',
    beatOff: 'Apagat',
    beatIsochronic: 'Isòcron',
    beatBinaural: 'Binaural',
    minutesShort: (m) => `${m}m`,
    noisePink: 'rosa',
    noiseBrown: 'marró',
    noiseWhite: 'blanc',
    natureRain: 'pluja',
    natureShore: 'riba',
    natureWind: 'vent',
    natureForest: 'bosc',
  },

  sequence: {
    heading: 'Seqüència',
    preparing: 'Preparant la seqüència…',
    missing: 'No s’ha trobat aquesta seqüència.',
    complete: 'Seqüència completa',
    doneTitle: 'Seqüència acabada',
    finished: 'Seqüència finalitzada',
    stageOf: (n, total) => `Etapa ${n} de ${total}`,
    crossfading: 'Fonent a la següent etapa…',
    crossfadingTo: (stage) => `Fonent a ${stage}…`,
    nextStage: 'següent etapa',
    ready: 'A punt quan vulguis',
    unavailable: 'Àudio no disponible en aquest navegador',
    pausedByBrowser: 'Àudio en pausa pel navegador',
    playAgain: 'Torna a reproduir',
    endSequence: 'Acaba la seqüència',
    skipStage: 'Salta l’etapa',
    stageRemaining: (time) => `Queden ${time} de l’etapa`,
    done: 'Fet',
    allStagesComplete: (n) => `Les ${n} etapes estan completes`,
    stageProgress: (name, remaining, duration, index, total, fading) =>
      `${name} · ${remaining} de ${duration} · etapa ${index} / ${total}${fading ? ' · fonent' : ''}`,
    stageProgressAria: (name) => `Progrés de ${name}`,
    saveSequence: 'Desa la seqüència',
    saveACopy: 'Desa una còpia',
    master: 'General',
    skippedTo: (name) => `S’ha saltat a ${name}`,
    nowPlaying: (name) => `S’està reproduint ${name}`,
    playingStage: (name, n, total) =>
      `S’està reproduint ${name} · etapa ${n} de ${total}`,
    stageOfNamed: (n, total, name) => `Etapa ${n} de ${total} · ${name}`,
    mineSuffix: (name) => `${name} (meva)`,
    paused: 'En pausa',
    savedOnDevice: (name) => `Desat «${name}» en aquest dispositiu`,
    savedFrom: (name) => `Desat des de ${name}`,
    stagesCount: (n) => `${n} etapes`,
    saveFailed: 'No s’ha pogut desar la seqüència',
    nothingToSave: 'Res a desar',
  },

  media: {
    liveSession: 'Sessió en directe',
    sequenceAlbum: 'Seqüència',
    defaultAlbum: 'Sessió de meditació',
  },

  pwa: {
    updateAvailable: 'Actualització disponible',
    reload: 'Torna a carregar',
    later: 'Més tard',
    installPrompt: 'Instal·la MeditateIt en aquest dispositiu',
    install: 'Instal·la',
    dismiss: 'Descarta',
    iosInstallTitle: 'Afegeix MeditateIt a la pantalla d’inici',
    iosInstallStepShare: 'Toca Comparteix a Safari',
    iosInstallStepAdd: 'Tria Afegeix a la pantalla d’inici',
  },

  legal: {
    privacyTitle: 'Privadesa',
    privacyLede:
      'Nota breu sobre el que MeditateIt desa en aquest dispositiu. No és una política de privadesa formal ni assessorament legal.',
    privacyLocalHeading: 'Només emmagatzematge local',
    privacyLocalP1:
      'MeditateIt no té comptes i no sincronitza dades amb un servidor de MeditateIt. Preferències, preajustos desats, seqüències desades, historial de sessions i la preferència de retenció de l’historial romanen al localStorage d’aquest navegador al teu dispositiu.',
    privacyLocalP2:
      'Exportar i importar són fitxers JSON que inicies tu per desar o carregar. Esborrar les dades del lloc al navegador elimina el que l’app va desar.',
    privacyKeysHeading: 'Claus d’emmagatzematge',
    privacyKeyPrefs: 'preferències de volum i sessió',
    privacyKeyPresets: 'preajustos que deses',
    privacyKeySequences: 'seqüències de diverses etapes que deses',
    privacyKeyHistory: 'historial d’escoltes acabades',
    privacyKeyRetention: 'preferència de retenció de l’historial de sessions',
    privacyNetworkHeading: 'Xarxa',
    privacyNetworkBody:
      'Les fonts de la interfície s’allotgen amb l’app. No hi ha analítica pròpia en la versió actual. El lloc públic a marcfs31.github.io/MeditateIt s’allotja a GitHub Pages; GitHub pot desar registres d’accés de l’allotjament (per exemple IP, agent d’usuari, URL i temps). Aquest registre de l’amfitrió queda fora del localStorage d’aquesta app. Si allotges la teva còpia, pot intervenir el que registri el teu amfitrió o CDN.',
    termsTitle: 'Termes',
    termsLede:
      'Notes breus per a l’ús personal de MeditateIt. No són unes condicions de servei formals ni assessorament legal.',
    termsUseHeading: 'Ús personal local',
    termsUseBody:
      'MeditateIt és una eina de so generatiu per al benestar que executes localment al navegador. Fes-la servir per escoltar i dissenyar so de forma personal.',
    termsAsIsHeading: 'Tal com és',
    termsAsIsBody:
      'El programari s’ofereix tal com és, sense garanties de cap mena. La reproducció, els temporitzadors i la persistència poden fallar o comportar-se diferent segons el navegador i el dispositiu.',
    termsWellnessHeading: 'No és tractament mèdic',
    termsWellnessP1:
      'MeditateIt no és un dispositiu mèdic i no està destinat a diagnosticar, tractar, curar ni prevenir cap afecció. Si tens dubtes de salut, parla amb un professional qualificat.',
    termsWellnessP2:
      'Mantén un volum còmode. Usa auriculars estèreo quan el mode binaural ho demani: és una tècnica d’escolta, no una teràpia.',
    backSettings: '← Configuració',
    home: 'Inici',
  },

  errors: {
    storage: {
      tooLarge: 'El fitxer de còpia és massa gran.',
      invalidJson: 'El fitxer de còpia no és JSON vàlid.',
      notObject: 'El fitxer de còpia ha de ser un objecte JSON.',
      forbiddenKey: 'El fitxer de còpia conté claus prohibides.',
      badFormat: 'Aquest fitxer no és una còpia de MeditateIt.',
      badVersion: 'Aquesta versió de còpia no és compatible.',
      badPresets: 'Els preajustos de la còpia no són vàlids.',
      presetsTooMany: 'La còpia té massa preajustos.',
      exportFailed: 'No s’ha pogut exportar la còpia.',
      importFailed: 'No s’ha pogut importar la còpia.',
      eraseFailed: 'No s’han pogut esborrar les dades locals.',
      retentionFailed: 'No s’ha pogut actualitzar la retenció de l’historial.',
      storageUnavailable: 'L’emmagatzematge local no està disponible.',
    },
    preset: {
      nameRequired: 'El nom és obligatori.',
      nameRequiredStrict: 'El nom del preajust és obligatori.',
      invalidRecipe: 'Recepta de sessió no vàlida.',
      idRequired: 'L’id del preajust és obligatori.',
      cannotOverwriteSystem:
        'No es pot sobrescriure un preajust del sistema.',
      tooMany: (max) => `Com a màxim ${max} preajustos d’usuari.`,
      saveFailed: 'No s’ha pogut desar el preajust.',
    },
    sequence: {
      nameRequired: 'El nom de la seqüència és obligatori.',
      needsStage: 'La seqüència necessita com a mínim una etapa.',
      idRequired: 'L’id de la seqüència és obligatori.',
      cannotOverwriteSystem:
        'No es pot sobrescriure una seqüència del sistema.',
      tooMany: (max) => `Com a màxim ${max} seqüències d’usuari.`,
      saveFailed: 'No s’ha pogut desar la seqüència.',
    },
  },
}
