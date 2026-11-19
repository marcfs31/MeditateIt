/**
 * English message catalog — canonical shape for all locales.
 */

export const en = {
  app: {
    brand: 'MeditateIt',
    skipToMain: 'Skip to main content',
    languageLabel: 'Language',
    taglineHome: 'Generative soundscapes',
    taglineSettings: 'Settings',
    taglinePrivacy: 'Privacy',
    taglineTerms: 'Terms',
    backHome: '← Back home',
    backHomeShort: 'Back home',
    homeLink: '← Home',
    privacy: 'Privacy',
    terms: 'Terms',
    settings: 'Settings',
    disclaimer:
      'MeditateIt is a generative sound tool for personal wellness and focus. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any condition.',
  },

  home: {
    eyebrow: 'Generative soundscapes',
    lede: 'Shape pink noise, tones, and beats live — start calm in under thirty seconds.',
    quickStart: 'Quick start',
    custom: 'Custom',
    settings: 'Settings',
    sequences: 'Sequences',
    sequencesAside: 'Multi-stage paths',
    yourSequences: 'Your sequences',
    recentSessions: 'Recent sessions',
    allAndBackup: 'All & backup',
    yourPresets: 'Your presets',
    systemPresets: 'System presets',
    browseAside: 'Filter by category or search',
    searchLabel: 'Search presets',
    searchPlaceholder: 'Name, description, or tag',
    categoryFilterAria: 'Preset categories',
    categoryAll: 'All',
    noPresetMatches: 'No presets match this search and category.',
    savedOnDevice: 'Saved on this device',
    openEnded: 'Open-ended',
    delete: 'Delete',
    deleteConfirm: (name: string) =>
      `Delete preset “${name}”? This cannot be undone.`,
    deleteSequenceConfirm: (name: string) =>
      `Delete sequence “${name}”? This cannot be undone.`,
    deleteAria: (name: string) => `Delete ${name}`,
    minutes: (m: number) => `${m} min`,
    replay: 'Replay',
    sequenceTag: 'Sequence',
    sequenceDuration: (m: number, stages: number) =>
      `${m} min · ${stages} stages`,
    historySeconds: (s: number) => `${s}s`,
    historyMinutes: (m: number, s: number) =>
      s > 0 ? `${m}m ${s}s` : `${m}m`,
    historyHours: (h: number, m: number) =>
      m > 0 ? `${h}h ${m}m` : `${h}h`,
  },

  categories: {
    focus: 'Focus',
    sleep: 'Sleep',
    calm: 'Calm',
    nature: 'Nature',
    beats: 'Beats',
    tones: 'Tones',
  },

  blurbs: {
    'daily-calm': 'Speaker-friendly pink + 528 + soft pulse',
    sleep: 'Deep brown bed, soft rain, slow ~2 Hz beat',
    focus: 'Pink + 528 with mid-rate ~16 Hz beat',
    'anxiety-softener': 'Soft pink + 396 Hz tone + gentle ~10 Hz pulse',
    'deep-rest': 'Open-ended brown + shore wash + low tone',
    'forest-canopy': 'Forest wash over light pink; no beat',
    'rain-window': 'Rain-led bed with muted brown rumble',
    'shore-wash': 'Shoreline with soft white veil + gentle pulse',
    'open-wind': 'Airy wind layer with sparse white noise',
    'pink-bed': 'Noise-only pink blanket',
    'brown-depth': 'Deep brown rumble only; open-ended',
    'white-haze': 'Filtered white veil for light masking',
    'soft-396': 'Tone-forward 396 over a quiet pink bed',
    'bright-528': 'Clear 528 tone with light pink support',
    'clear-741': 'Higher 741 tone with sparse white air',
    'alpha-glide': 'Gentle ~10 Hz binaural over quiet pink',
    'theta-drift': '~6 Hz binaural over soft brown + 174',
    'delta-settle': 'Very slow ~1.5 Hz binaural night bed',
    'speaker-pulse': 'Deeper isochronic pulse for speakers',
    'night-rain': 'Rain-heavy sleep bed with slow beat',
    'study-grove': 'Focus beat with soft forest air',
    'morning-clear': 'Brighter pink + 528 + mid-rate pulse',
    'dusk-hum': 'Evening brown + low tone + soft shore',
  } as Record<string, string>,

  systemPresets: {
    'daily-calm': 'Daily calm',
    sleep: 'Sleep',
    focus: 'Focus',
    'anxiety-softener': 'Soft calm',
    'deep-rest': 'Deep rest',
    'forest-canopy': 'Forest canopy',
    'rain-window': 'Rain window',
    'shore-wash': 'Shore wash',
    'open-wind': 'Open wind',
    'pink-bed': 'Pink bed',
    'brown-depth': 'Brown depth',
    'white-haze': 'White haze',
    'soft-396': 'Soft 396',
    'bright-528': 'Bright 528',
    'clear-741': 'Clear 741',
    'alpha-glide': '~10 Hz glide',
    'theta-drift': '~6 Hz drift',
    'delta-settle': '~1.5 Hz night bed',
    'speaker-pulse': 'Speaker pulse',
    'night-rain': 'Night rain',
    'study-grove': 'Study grove',
    'morning-clear': 'Morning clear',
    'dusk-hum': 'Dusk hum',
  } as Record<string, string>,

  systemSequences: {
    'wind-down': {
      name: 'Wind down',
      summary: 'Soft calm → pink bed → sleep',
      stages: {
        'wd-1': 'Soft landing',
        'wd-2': 'Pink settle',
        'wd-3': 'Settle',
      },
    },
    'focus-block': {
      name: 'Focus block',
      summary: 'Calm arrive → focus → soft close',
      stages: {
        'fb-1': 'Arrive',
        'fb-2': 'Focus work',
        'fb-3': 'Soft close',
      },
    },
    'deep-sleep-ramp': {
      name: 'Night wind-down',
      summary: 'Pink → ~5 Hz glide → night bed',
      stages: {
        'ds-1': 'Pink unwind',
        'ds-2': '~5 Hz glide',
        'ds-3': 'Night bed',
      },
    },
  } as Record<
    string,
    { name: string; summary: string; stages: Record<string, string> }
  >,

  settings: {
    themeHeading: 'Theme',
    themeLede:
      'Pick a calm palette. System follows your device light or dark setting.',
    themeChromeNote:
      'Change the palette anytime with the theme control at the top of the app. System follows your device light or dark setting.',
    themeSystem: 'System',
    themes: {
      light: 'Light',
      dark: 'Dark',
      dusk: 'Dusk',
      mist: 'Mist',
      forest: 'Forest',
    },
    languageHeading: 'Language',
    languageSystem: 'System',
    languageChromeNote:
      'The flag at the top always shows the language in use — including when System follows your browser. Open Settings from the gear beside it.',
    languageLede:
      'System follows your browser language when supported (English, Español, Català, Français, Português). An explicit choice is saved on this device. Dates and times follow the active locale.',
    backupHeading: 'Backup',
    backupLede:
      'Download or restore prefs, saved presets, sequences, and session history as JSON. Export includes finished listens by default. No account — the file stays on this device.',
    exportJson: 'Export JSON',
    importModeLegend: 'Import mode',
    mergeTitle: 'Merge',
    mergeDetail:
      ' — keep existing presets and sequences; same ids update from the file',
    replaceTitle: 'Replace',
    replaceDetail:
      ' — overwrite prefs, user presets, and sequences; wipe session history when the file has none',
    keepHistoryWhenOmitted:
      'Keep existing session history if the file omits history',
    importJson: 'Import JSON…',
    historyHeading: 'Session history',
    clear: 'Clear',
    historyLede:
      'Finished listens on this device (written when you stop or leave a session). Kept to at most 100 entries, plus any time limit below.',
    retention: 'Retention',
    historyEmpty: 'No sessions yet. Play something, then stop.',
    clearHistoryConfirm:
      'Clear all session history on this device? Prefs and presets stay.',
    historyCleared: 'Session history cleared.',
    eraseHeading: 'Erase all data',
    eraseLede:
      'Remove prefs, saved presets, sequences, session history, and the retention setting from this browser. Export a backup first if you may want it back.',
    clearCachesToo:
      'Also clear offline caches and unregister the service worker',
    eraseButton: 'Erase all local data…',
    eraseConfirm:
      'Erase all MeditateIt data on this device (prefs, saved presets, sequences, session history, and retention setting)? This cannot be undone.',
    eraseConfirmWithCaches:
      'Erase all MeditateIt data on this device (prefs, saved presets, sequences, session history, and retention setting)? This also clears offline caches and unregisters the service worker. This cannot be undone.',
    aboutHeading: 'About & legal',
    aboutLede:
      'MeditateIt is a generative sound tool for personal wellness and focus. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any condition. If you have health concerns, talk to a qualified professional.',
    exported: (
      presetCount: number,
      sequenceCount: number,
      sessionCount: number,
    ) =>
      `Exported ${presetCount} preset${presetCount === 1 ? '' : 's'}, ${sequenceCount} sequence${sequenceCount === 1 ? '' : 's'}, and ${sessionCount} session${sessionCount === 1 ? '' : 's'}.`,
    imported: (
      mode: string,
      presetCount: number,
      sequenceCount: number,
      historyCount: number,
    ) =>
      `Import (${mode}): ${presetCount} preset${presetCount === 1 ? '' : 's'}, ${sequenceCount} sequence${sequenceCount === 1 ? '' : 's'}, ${historyCount} history entr${historyCount === 1 ? 'y' : 'ies'}.`,
    retentionUpdated: (label: string, kept: number) =>
      `History retention set to ${label.toLowerCase()}. ${kept} entr${kept === 1 ? 'y' : 'ies'} kept.`,
    erased: (keyCount: number) =>
      `All local MeditateIt data erased (${keyCount} keys).`,
    erasedCaches: (swCount: number) =>
      ` Caches cleared; ${swCount} service worker${swCount === 1 ? '' : 's'} unregistered.`,
    retentionForever: 'Keep until count limit (100)',
    retentionDays: (days: number) => `${days} days`,
  },

  dialogs: {
    savePresetTitle: 'Save preset',
    savePresetBody:
      'Store this soundscape locally on this device. No account needed.',
    saveSequenceTitle: 'Save sequence',
    saveSequenceBody:
      'Store this multi-stage sequence locally on this device. Stages keep their recipes so a restore stays self-contained.',
    name: 'Name',
    cancel: 'Cancel',
    update: 'Update',
    save: 'Save',
    saveAsNew: 'Save as new',
    saving: 'Saving…',
    headphonesTitle: 'Headphones needed',
    headphonesBody:
      'Binaural mode plays slightly different tones in each ear so you hear a pulse. Stereo headphones are required; use isochronic mode for speakers. This is a listening effect, not a medical treatment.',
    headphonesConfirm: 'I have headphones',
  },

  session: {
    heading: 'Session',
    preparing: 'Preparing session…',
    play: 'Play',
    pause: 'Pause',
    continueAudio: 'Tap to continue audio',
    saveAsPreset: 'Save as preset',
    unavailable: 'Audio unavailable in this browser',
    pausedByBrowser: 'Audio paused by the browser',
    crossfading: 'Crossfading presets…',
    running: 'Soundscape running',
    ready: 'Ready when you are',
    exploreHeading: 'Explore',
    exploreNote:
      'Prefer a guided multi-stage path? Sequences are on the home screen.',
    browseSequences: 'Browse sequences',
    customName: 'Custom',
    myPreset: 'My preset',
    mineSuffix: (name: string) => `${name} (mine)`,
  },

  controls: {
    preset: 'Preset',
    fadingHint: 'Fading ~2s',
    switchWhilePlaying:
      'Switching while playing crossfades over ~2 seconds.',
    pickThenPlay: 'Pick a starting recipe, then press Play.',
    master: 'Master',
    duration: 'Duration',
    openEnded: 'Open-ended',
    openTimer: 'Open',
    remainingAria: (time: string) => `Remaining ${time}`,
    fade: 'Fade',
    fadeIn: (s: number) => `In ${s}s`,
    fadeOut: (s: number) => `Out ${s}s`,
    layers: 'Layers',
    layersNote:
      'Turn a layer on to shape its sound — each includes a simple EQ.',
    noise: 'Noise',
    noiseColor: 'Noise color',
    tone: 'Tone',
    toneHz: 'Tone (Hz)',
    toneNote:
      'Common named frequencies as pure tones — for listening preference, not proven health effects.',
    /** Frequency display — unit symbol stays “Hz”; value is locale-formatted by the caller when needed. */
    hz: (value: number | string) => `${value} Hz`,
    hzApprox: (value: number | string) => `~${value} Hz`,
    beat: 'Beat',
    beatMode: 'Beat mode',
    beatRate: (hz: string) => `Rate ${hz} Hz`,
    nature: 'Nature',
    natureSound: 'Nature sound',
    natureBrightness: 'Nature brightness',
    brightness: (pct: number) => `Brightness ${pct}%`,
    volumeAria: (name: string) => `${name} volume`,
    eq: 'EQ',
    eqGroup: (name: string) => `${name} EQ`,
    eqBandAria: (layer: string, band: string) => `${layer} ${band} EQ`,
    eqBandHz: (band: string, hz: number) => `${band} · ${hz} Hz`,
    eqDb: (value: string) => `${value} dB`,
    eqDbZero: '0 dB',
    flat: 'Flat',
    eqLow: 'Low',
    eqMid: 'Mid',
    eqHigh: 'High',
    beatOff: 'Off',
    beatIsochronic: 'Isochronic',
    beatBinaural: 'Binaural',
    minutesShort: (m: number) => `${m}m`,
    noisePink: 'pink',
    noiseBrown: 'brown',
    noiseWhite: 'white',
    natureRain: 'rain',
    natureShore: 'shore',
    natureWind: 'wind',
    natureForest: 'forest',
  },

  sequence: {
    heading: 'Sequence',
    preparing: 'Preparing sequence…',
    missing: 'That sequence was not found.',
    complete: 'Sequence complete',
    doneTitle: 'Sequence done',
    finished: 'Sequence finished',
    stageOf: (n: number, total: number) => `Stage ${n} of ${total}`,
    crossfading: 'Crossfading to next stage…',
    crossfadingTo: (stage: string) => `Crossfading to ${stage}…`,
    nextStage: 'next stage',
    ready: 'Ready when you are',
    unavailable: 'Audio unavailable in this browser',
    pausedByBrowser: 'Audio paused by the browser',
    playAgain: 'Play again',
    endSequence: 'End sequence',
    skipStage: 'Skip stage',
    stageRemaining: (time: string) => `Stage remaining ${time}`,
    done: 'Done',
    allStagesComplete: (n: number) => `All ${n} stages complete`,
    stageProgress: (
      name: string,
      remaining: string,
      duration: string,
      index: number,
      total: number,
      fading: boolean,
    ) =>
      `${name} · ${remaining} of ${duration} · stage ${index} / ${total}${fading ? ' · fading' : ''}`,
    stageProgressAria: (name: string) => `${name} progress`,
    saveSequence: 'Save sequence',
    saveACopy: 'Save a copy',
    master: 'Master',
    skippedTo: (name: string) => `Skipped to ${name}`,
    nowPlaying: (name: string) => `Now playing ${name}`,
    playingStage: (name: string, n: number, total: number) =>
      `Playing ${name} · stage ${n} of ${total}`,
    stageOfNamed: (n: number, total: number, name: string) =>
      `Stage ${n} of ${total} · ${name}`,
    mineSuffix: (name: string) => `${name} (mine)`,
    paused: 'Paused',
    savedOnDevice: (name: string) => `Saved “${name}” on this device`,
    savedFrom: (name: string) => `Saved from ${name}`,
    stagesCount: (n: number) => `${n} stages`,
    saveFailed: 'Could not save sequence',
    nothingToSave: 'Nothing to save',
  },

  media: {
    liveSession: 'Live session',
    sequenceAlbum: 'Sequence',
    defaultAlbum: 'Meditation session',
  },

  pwa: {
    updateAvailable: 'Update available',
    reload: 'Reload',
    later: 'Later',
    installPrompt: 'Install MeditateIt on this device',
    install: 'Install',
    dismiss: 'Dismiss',
    iosInstallTitle: 'Add MeditateIt to your Home Screen',
    iosInstallStepShare: 'Tap Share in Safari',
    iosInstallStepAdd: 'Choose Add to Home Screen',
  },

  legal: {
    privacyTitle: 'Privacy',
    privacyLede:
      'Short product note about what MeditateIt stores on this device. This is not a formal privacy policy and is not legal advice.',
    privacyLocalHeading: 'Local-only storage',
    privacyLocalP1:
      'MeditateIt has no accounts and does not sync data to a MeditateIt server. Preferences, saved presets, saved sequences, session history, and the history-retention preference stay in this browser’s localStorage on your device.',
    privacyLocalP2:
      'Export and import are user-initiated JSON files you choose to save or load. Clearing site data in the browser removes what the app stored.',
    privacyKeysHeading: 'Storage keys',
    privacyKeyPrefs: 'volume and session preferences',
    privacyKeyPresets: 'presets you save',
    privacyKeySequences: 'multi-stage sequences you save',
    privacyKeyHistory: 'finished listen history',
    privacyKeyRetention: 'session history retention preference',
    privacyNetworkHeading: 'Network',
    privacyNetworkBody:
      'Fonts used by the UI are self-hosted with the app. There is no first-party analytics in the current build. The public site at marcfs31.github.io/MeditateIt is hosted on GitHub Pages; GitHub may keep hosting access logs (for example IP, user agent, URL, and timing). That host logging is outside this app’s localStorage. Hosting your own copy may still involve whatever your host or CDN logs.',
    termsTitle: 'Terms',
    termsLede:
      'Brief product notes for personal use of MeditateIt. This is not a formal terms of service and is not legal advice.',
    termsUseHeading: 'Local personal use',
    termsUseBody:
      'MeditateIt is a generative wellness sound tool you run locally in the browser. Use it for personal listening and sound design.',
    termsAsIsHeading: 'As-is',
    termsAsIsBody:
      'The software is provided as-is, without warranties of any kind. Audio playback, timers, and persistence may fail or behave differently across browsers and devices.',
    termsWellnessHeading: 'Not medical treatment',
    termsWellnessP1:
      'MeditateIt is not a medical device and is not intended to diagnose, treat, cure, or prevent any condition. If you have health concerns, talk to a qualified professional.',
    termsWellnessP2:
      'Keep listening volume comfortable. Use stereo headphones when a binaural beat mode asks for them — that is a listening technique, not therapy.',
    backSettings: '← Settings',
    home: 'Home',
  },

  errors: {
    storage: {
      tooLarge: 'Backup file is too large.',
      invalidJson: 'Backup file is not valid JSON.',
      notObject: 'Backup file must be a JSON object.',
      forbiddenKey: 'Backup file contains forbidden keys.',
      badFormat: 'This file is not a MeditateIt backup.',
      badVersion: 'This backup version is not supported.',
      badPresets: 'Backup presets are invalid.',
      presetsTooMany: 'Backup has too many presets.',
      exportFailed: 'Could not export backup.',
      importFailed: 'Could not import backup.',
      eraseFailed: 'Could not erase local data.',
      retentionFailed: 'Could not update history retention.',
      storageUnavailable: 'Local storage is unavailable.',
    },
    preset: {
      nameRequired: 'Name is required.',
      nameRequiredStrict: 'Preset name is required.',
      invalidRecipe: 'Invalid session recipe.',
      idRequired: 'Preset id is required.',
      cannotOverwriteSystem: 'Cannot overwrite a system preset.',
      tooMany: (max: number) => `At most ${max} user presets.`,
      saveFailed: 'Could not save preset.',
    },
    sequence: {
      nameRequired: 'Sequence name is required.',
      needsStage: 'Sequence needs at least one stage.',
      idRequired: 'Sequence id is required.',
      cannotOverwriteSystem: 'Cannot overwrite a system sequence.',
      tooMany: (max: number) => `At most ${max} user sequences.`,
      saveFailed: 'Could not save sequence.',
    },
  },
} as const

export type EnMessages = typeof en

/** Widen EN literal strings so other locales can assign the same shape. */
type WidenStrings<T> = T extends string
  ? string
  : T extends (...args: infer A) => infer R
    ? (...args: A) => WidenStrings<R>
    : T extends readonly (infer U)[]
      ? WidenStrings<U>[]
      : T extends object
        ? { [K in keyof T]: WidenStrings<T[K]> }
        : T

export type Messages = WidenStrings<EnMessages>
