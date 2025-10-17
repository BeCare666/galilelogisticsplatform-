
document.addEventListener("DOMContentLoaded", () => {

    const resources = {
        en: {
            translation: {
                "INDEXID1": `SUPPORTING AFRICA’S CATCH-UP
                                AND GEO-ECONOMIC EXPANSION
                                TOWARDS 2100`,
                "INDEXID2": `Click here to learn more`,
                "INDEXID2X": `GR AFCFTA 2100 INFOS`,
                "INDEXID2XX": `GR AFCFTA 2100 INFOS`,
                "INDEXID2XXY": `📢 GR AFCFTA 2100 INFOS`,
                "INDEXID3": `<strong>GR-AfCFTA 2100 :</strong> A Strategic
                                Support Plan for Africa’s Catch-Up
                                and Geo-Economic Expansion
                                towards 2100
                                `,
                "INDEXID5": `Contact us`,
                "INDEXID6": `Download`,
                "INDEXID7": `Hours`,
                "INDEXID8": `Minutes`,
                "INDEXID9": `Seconds`,
                "INDEXID10": `Days`,
                "INDEXID7": `Hours`,
                "INDEXID8": `Minutes`,
                "INDEXID11": ` <div class="flag"><img src="https://flagcdn.com/w40/cd.png" alt="RDC" />RDC</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/td.png" alt="Tchad" />Tchad</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/ga.png" alt="Gabon" />Gabon</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/ci.png" alt="Côte d'Ivoire" />Côte
                                d'Ivoire</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/sn.png" alt="Senegal" />Senegal
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/bi.png" alt="Burundi" />Burundi
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/cf.png"
                                    alt="Centrafrique" /> Central African Republic
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/cv.png" alt=" Cape Verde" /> Cape Verde
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/ng.png" alt="Nigeria" />Nigeria
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/tg.png" alt="Togo" />Togo</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/gq.png"
                                    alt="Guinée Équatoriale" />Guinée
                                Équatoriale
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/mg.png" alt="Madagascar" />Madagascar
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/cg.png" alt="Congo" />Congo</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/cm.png" alt="Cameroon" />Cameroon
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/bj.png" alt="Benin" />Benin</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/bf.png" alt="Burkina Faso" /> Burkina Faso</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/ne.png" alt="Niger" />Niger</div>`,
                // Nouveaux textes pour actualités
                "noNews": "No news available.",
                "noPdf": "No PDF available",
                "alreadyVoted": "You have already voted!",
                "downloadPdf": "Download PDF",
                "emailRequired": "Email is required",
                "emailInvalid": "Invalid email",
                "alreadyDownloaded": "You have already downloaded this document",
                "downloading": "Downloading...",
                "downloaded": "Your PDF has been downloaded",

            }
        },

        fr: {
            translation: {
                "INDEXID1": `ACCOMPAGNER LE RATTRAPAGE ET L’EXPANSION GÉOÉCONOMIQUE DE L’AFRIQUE À L’HORIZON 2100.`,
                "INDEXID2": `CLiquez ici pour en savoir plus`,
                "INDEXID2X": `GR AFCFTA 2100 INFOS`,
                "INDEXID2XW": `GR AFCFTA 2100 INFOS`,
                "INDEXID2XX": `GR AFCFTA 2100 INFOS`,
                "INDEXID2XXY": `GR AFCFTA 2100 INFOS`,
                "INDEXID3": `<strong>GR-AfCFTA 2100 :</strong> <b>Un Plan d’appui stratégique pour le rattrapage et l’expansion géoéconomique de l’Afrique à l’horizon 2100</b>`,
                "INDEXID5": `Contactez-nous`,
                "INDEXID6": ` Télécharger`,
                "INDEXID7": `Heures`,
                "INDEXID8": `Minutes`,
                "INDEXID9": `Sécondes`,
                "INDEXID10": `Jours`,
                "INDEXID11": `                            <div class="flag"><img src="https://flagcdn.com/w40/cd.png" alt="RDC" />RDC</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/td.png" alt="Tchad" />Tchad</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/ga.png" alt="Gabon" />Gabon</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/ci.png" alt="Côte d'Ivoire" />Côte
                                d'Ivoire</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/sn.png" alt="Sénégal" />Sénégal
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/bi.png" alt="Burundi" />Burundi
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/cf.png"
                                    alt="Centrafrique" />Centrafrique
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/cv.png" alt="Cap Vert" />Cap Vert
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/ng.png" alt="Nigéria" />Nigéria
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/tg.png" alt="Togo" />Togo</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/gq.png"
                                    alt="Guinée Équatoriale" />Guinée
                                Équatoriale
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/mg.png" alt="Madagascar" />Madagascar
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/cg.png" alt="Congo" />Congo</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/cm.png" alt="Cameroun" />Cameroun
                            </div>
                            <div class="flag"><img src="https://flagcdn.com/w40/bj.png" alt="Bénin" />Bénin</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/bf.png" alt="Burkina Faso" />Burkina
                                Faso</div>
                            <div class="flag"><img src="https://flagcdn.com/w40/ne.png" alt="Niger" />Niger</div>`,

                // Nouveaux textes pour actualités
                "noNews": "Aucune actualité disponible.",
                "noPdf": "Pas de PDF",
                "alreadyVoted": "Vous avez déjà voté !",
                "downloadPdf": "Télécharger le PDF",
                "emailRequired": "Email requis",
                "emailInvalid": "Email invalide",
                "alreadyDownloaded": "Vous avez déjà téléchargé ce document",
                "downloading": "Téléchargement en cours...",
                "downloaded": "Votre PDF a été téléchargé",
                "error": "Erreur",
            }
        }
    };

    // Init i18next
    i18next
        .use(i18nextBrowserLanguageDetector)
        .init({
            resources,
            fallbackLng: "fr",
            debug: false
        }, function () {
            updateContent();
        });

    // Fonction pour mettre à jour le contenu
    function updateContent() {
        document.getElementById("INDEXID1").innerHTML = i18next.t("INDEXID1");
        document.getElementById("INDEXID2").innerHTML = i18next.t("INDEXID2");
        document.getElementById("INDEXID2X").innerHTML = i18next.t("INDEXID2X");

        document.getElementById("INDEXID2XX").innerHTML = i18next.t("INDEXID2XX");
        document.getElementById("INDEXID2XXY").innerHTML = i18next.t("INDEXID2XXY");
        document.getElementById("INDEXID3").innerHTML = i18next.t("INDEXID3");
        document.getElementById("INDEXID11").innerHTML = i18next.t("INDEXID11");

    }

    // Ouvrir modal au clic
    document.getElementById("openLangModalBtn").addEventListener("click", () => {
        document.getElementById("langModal").style.display = "flex";
        document.getElementById("INDEXID5").innerHTML = i18next.t("INDEXID5");
        document.getElementById("INDEXID6").innerHTML = i18next.t("INDEXID6");
    });

    // Fermer modal au clic sur la croix
    document.getElementById("closeLangModalBtn").addEventListener("click", () => {
        document.getElementById("langModal").style.display = "none";
    });

    // Fermer modal si clic en dehors de la boite blanche
    document.getElementById("langModal").addEventListener("click", (e) => {
        if (e.target === document.getElementById("langModal")) {
            document.getElementById("langModal").style.display = "none";
        }
    });

    // Changement de langue
    document.addEventListener("DOMContentLoaded", () => {
        let savedLang = localStorage.getItem("selectedLang") || "fr"; // fr par défaut

        const langFlags = {
            fr: "https://flagcdn.com/w40/fr.png",
            en: "https://flagcdn.com/w40/gb.png",
        };

        i18next.changeLanguage(savedLang, () => {
            updateContent();
            document.getElementById("currentFlag").src = langFlags[savedLang];
        });
    });

    document.querySelectorAll(".langOption").forEach(option => {
        option.addEventListener("click", function () {
            let lang = this.getAttribute("data-lang");
            let imgSrc = this.querySelector("img").src;

            localStorage.setItem("selectedLang", lang);
            document.getElementById("langModal").style.display = "none";
            location.reload();
            i18next.changeLanguage(lang, () => {
                updateContent();
                document.getElementById("langModal").style.display = "none";
            });

            document.getElementById("currentFlag").src = imgSrc;

        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            // document.getElementById("loading").style.display = "none"
        }, 7000);
    });

});