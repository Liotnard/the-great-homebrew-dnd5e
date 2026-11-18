Hooks.once("setup", () => {
    CONFIG.DND5E.languages.oltheriaOltherian = {
        label: game.i18n.localize("OLTHERIA.LanguageGroup.Oltherian"),
        children: {
        }
    };

  CONFIG.DND5E.languages.oltheriaOltherian.children.oltheriaRegional = {
    label: game.i18n.localize("OLTHERIA.LanguageGroup.Regional"),
    children: {
      oltheriaOceostian: game.i18n.localize("OLTHERIA.Language.Oceostian"),
      oltheriaMeditian: game.i18n.localize("OLTHERIA.Language.Meditian"),
      oltheriaFablespeak: game.i18n.localize("OLTHERIA.Language.Fablespeak"),
      oltheriaNurdian: game.i18n.localize("OLTHERIA.Language.Nurdian"),
      oltheriaConteastian: game.i18n.localize("OLTHERIA.Language.Conteastian"),
      oltheriaNemean: game.i18n.localize("OLTHERIA.Language.Nemean")
    }
  };


  CONFIG.DND5E.languages.oltheriaOltherian.children.oltheriaSpecial = {
    label: game.i18n.localize("OLTHERIA.LanguageGroup.Special"),
    children: {
      oltheriaAtalant: game.i18n.localize("OLTHERIA.Language.Atalant"),
      oltheriaWolfHowl: game.i18n.localize("OLTHERIA.Language.WolfHowl"),
      oltheriaRoadLanguage: game.i18n.localize("OLTHERIA.Language.RoadLanguage")
    }
  };
});
/*Hooks.once("setup", () => {
  CONFIG.DND5E.languages.standard.children.oltheriaOltherian = {
    label: game.i18n.localize("OLTHERIA.LanguageGroup.Oltherian"),
    children: {
      oltheriaRegional: {
        label: game.i18n.localize("OLTHERIA.LanguageGroup.Regional"),
        children: {
          oltheriaOceostian: game.i18n.localize("OLTHERIA.Language.Oceostian"),
          oltheriaMeditian: game.i18n.localize("OLTHERIA.Language.Meditian"),
          oltheriaFablespeak: game.i18n.localize("OLTHERIA.Language.Fablespeak"),
          oltheriaNurdian: game.i18n.localize("OLTHERIA.Language.Nurdian"),
          oltheriaConteastian: game.i18n.localize("OLTHERIA.Language.Conteastian"),
          oltheriaNemean: game.i18n.localize("OLTHERIA.Language.Nemean")
        }
      },

      oltheriaSpecial: {
        label: game.i18n.localize("OLTHERIA.LanguageGroup.Special"),
        children: {
          oltheriaWolfHowl: game.i18n.localize("OLTHERIA.Language.WolfHowl"),
          oltheriaRoadLanguage: game.i18n.localize("OLTHERIA.Language.RoadLanguage")
        }
      }
    }
  };
});*/
/*Hooks.once("setup", () => {
  const L = {
    oltheriaOceostian: game.i18n.localize("OLTHERIA.Language.Oceostian"),
    oltheriaMeditian: game.i18n.localize("OLTHERIA.Language.Meditian"),
    oltheriaFablespeak: game.i18n.localize("OLTHERIA.Language.Fablespeak"),
    oltheriaNurdian: game.i18n.localize("OLTHERIA.Language.Nurdian"),
    oltheriaConteastian: game.i18n.localize("OLTHERIA.Language.Conteastian"),
    oltheriaNemean: game.i18n.localize("OLTHERIA.Language.Nemean"),
    oltheriaWolfHowl: game.i18n.localize("OLTHERIA.Language.WolfHowl"),
    oltheriaRoadLanguage: game.i18n.localize("OLTHERIA.Language.RoadLanguage"),
    oltheriaAtalant: game.i18n.localize("OLTHERIA.Language.Atalant")
  };

  CONFIG.DND5E.languages.oltheriaOltherian = {
    label: game.i18n.localize("OLTHERIA.LanguageGroup.Oltherian"),
    children: {
      oltheriaRegional: {
        label: game.i18n.localize("OLTHERIA.LanguageGroup.Regional"),
        children: {
          oltheriaOceostian: L.oltheriaOceostian,
          oltheriaMeditian: L.oltheriaMeditian,
          oltheriaFablespeak: L.oltheriaFablespeak,
          oltheriaNurdian: L.oltheriaNurdian,
          oltheriaConteastian: L.oltheriaConteastian,
          oltheriaNemean: L.oltheriaNemean
        }
      },

      oltheriaSpecial: {
        label: game.i18n.localize("OLTHERIA.LanguageGroup.Special"),
        children: {
          oltheriaWolfHowl: L.oltheriaWolfHowl,
          oltheriaRoadLanguage: L.oltheriaRoadLanguage,
          oltheriaAtalant: L.oltheriaAtalant
        }
      }
    }
  };

  // Fallback plat pour que le résumé de fiche puisse retrouver le nom.
  for (const [id, label] of Object.entries(L)) {
    CONFIG.DND5E.languages[id] = label;
  }
});*/


/*Hooks.once("setup", () => {
  CONFIG.DND5E.languages.oltheriaRegional = {
    label: game.i18n.localize("OLTHERIA.LanguageGroup.Regional"),
    children: {
      oltheriaOceostian: game.i18n.localize("OLTHERIA.Language.Oceostian"),
      oltheriaMeditian: game.i18n.localize("OLTHERIA.Language.Meditian"),
      oltheriaFablespeak: game.i18n.localize("OLTHERIA.Language.Fablespeak"),
      oltheriaNurdian: game.i18n.localize("OLTHERIA.Language.Nurdian"),
      oltheriaConteastian: game.i18n.localize("OLTHERIA.Language.Conteastian"),
      oltheriaNemean: game.i18n.localize("OLTHERIA.Language.Nemean")
    }
  };
  CONFIG.DND5E.languages.oltheriaSpecial = {
    label: game.i18n.localize("OLTHERIA.LanguageGroup.Special"),
    children: {
      oltheriaAtalant: game.i18n.localize("OLTHERIA.Language.Atalant"),
      oltheriaWolfHowl: game.i18n.localize("OLTHERIA.Language.WolfHowl"),
      oltheriaRoadLanguage: game.i18n.localize("OLTHERIA.Language.RoadLanguage")
    }
  };
});*/