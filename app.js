const questions = [
  {
    id: 1,
    image: "1.jpg",
    question: "Prin litera λ (lambda) notăm:",
    answers: [
      {
        key: "a",
        text: "lungimea traseului unei unde electromagnetice între două antene"
      },
      {
        key: "b",
        text: "lungimea de undă"
      },
      {
        key: "c",
        text: "frecvența undei electromagnetice"
      }
    ],
    correctAnswers: ["b"],
    explanation: "Litera grecească λ, lambda, este folosită în fizică pentru a nota lungimea de undă."
  },
  {
    id: 2,
    image: "2.jpg",
    question: "O undă electromagnetică se propagă pe direcția axei OX în mediul dielectric (1) și ajunge la un punct de incidență cu mediul dielectric (2). Dacă Z1 > Z2, atunci:",
    answers: [
      {
        key: "a",
        text: "H2 < H0"
      },
      {
        key: "b",
        text: "H2d > H0"
      },
      {
        key: "c",
        text: "H2 = H0"
      }
    ],
    correctAnswers: ["b"],
    explanation: "Răspunsul corect este B, conform relației de transmitere/reflexie pentru câmpul magnetic la trecerea dintre două medii cu impedanțe diferite, când Z1 > Z2."
  },
  {
    id: 3,
    image: "3.jpg",
    question: "Mărimea vectorială complex S din relația alăturată se referă la:",
    answers: [
      {
        key: "a",
        text: "puterea aparentă într-un circuit electric"
      },
      {
        key: "b",
        text: "vectorul Poynting"
      },
      {
        key: "c",
        text: "suprafața de separație dintre două medii"
      }
    ],
    correctAnswers: ["b"],
    explanation: "Mărimea vectorială complexă S este asociată vectorului Poynting, care descrie fluxul de energie electromagnetică."
  },
  {
    id: 4,
    image: "4.jpg",
    question: "Relația alăturată reprezintă:",
    answers: [
      {
        key: "a",
        text: "lungimea de undă a unui semnal"
      },
      {
        key: "b",
        text: "constanta de atenuare"
      },
      {
        key: "c",
        text: "constanta de fază"
      }
    ],
    correctAnswers: ["c"],
    explanation: "Relația β = 2π / λ definește constanta de fază, unde λ este lungimea de undă."
  },
  {
    id: 5,
    image: "",
    question: "În practică, pentru adaptarea unei linii la impedanța de sarcină se utilizează transformatoare de adaptare. Acestea sunt echivalente unei linii de transmisie de lungime:",
    answers: [
      {
        key: "a",
        text: "egală cu lungimea de undă λ"
      },
      {
        key: "b",
        text: "egală cu λ/2"
      },
      {
        key: "c",
        text: "egală cu λ/4"
      }
    ],
    correctAnswers: ["c"],
    explanation: "Transformatorul de adaptare utilizat frecvent în linii de transmisie este transformatorul în sfert de undă, având lungimea λ/4."
  },
  {
    id: 6,
    image: "6.jpg",
    question: "Raportul lungimilor de undă în dielectric și conductor, ca de altfel și raportul vitezelor unei unde în cele două medii, este dependent de frecvență prin:",
    answers: [
      {
        key: "a",
        text: "f"
      },
      {
        key: "b",
        text: "1/f"
      },
      {
        key: "c",
        text: "1/√f"
      }
    ],
    correctAnswers: ["c"],
    explanation: "Răspunsul corect este C. Raportul lungimilor de undă și al vitezelor dintre dielectric și conductor depinde de frecvență prin factorul 1/√f."
  },
  {
    id: 7,
    image: "7.jpg",
    question: "Mărimea complexă γ (gamma) reprezintă:",
    answers: [
      {
        key: "a",
        text: "constanta de timp a unui semnal"
      },
      {
        key: "b",
        text: "constanta de atenuare"
      },
      {
        key: "c",
        text: "constanta de propagare"
      }
    ],
    correctAnswers: ["c"],
    explanation: "Răspunsul corect este C. Mărimea complexă γ reprezintă constanta de propagare, exprimată de obicei sub forma γ = α + jβ."
  },
  {
    id: 8,
    image: "8.jpg",
    question: "Mărimea δ (delta) din relația alăturată se referă la:",
    answers: [
      {
        key: "a",
        text: "întrefierul unei mașini electrice"
      },
      {
        key: "b",
        text: "adâncimea de pătrundere a câmpului electromagnetic în spațiul conductor"
      },
      {
        key: "c",
        text: "o mărime adimensională fără semnificație fizică"
      }
    ],
    correctAnswers: ["b"],
    explanation: "Răspunsul corect este B. Mărimea δ reprezintă adâncimea de pătrundere a câmpului electromagnetic în conductor, cunoscută și ca adâncime de pătrundere sau skin depth."
  },
  {
    id: 9,
    image: "9.jpg",
    question: "Setul de ecuații al lui Maxwell din figură constituie punctul de start pentru:",
    answers: [
      {
        key: "a",
        text: "studiul undei electromagnetice în mediu conductor"
      },
      {
        key: "b",
        text: "studiul undei electromagnetice în mediu dielectric"
      },
      {
        key: "c",
        text: "studiul efectului pelicular"
      }
    ],
    correctAnswers: ["b"],
    explanation: "Răspunsul corect este B. Ecuațiile prezentate constituie punctul de start pentru studiul undei electromagnetice în mediu dielectric."
  },
{
  id: 10,
  image: "10.jpg",
  question: "În relația alăturată, se definește Z10 ca fiind:",
  answers: [
    {
      key: "a",
      text: "impedanța de mers în gol văzută la intrare pe linie"
    },
    {
      key: "b",
      text: "impedanța de mers în gol văzută la ieșire pe linie"
    },
    {
      key: "c",
      text: "impedanța lineică (pe unitate de lungime)"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Z10 reprezintă impedanța de mers în gol văzută la intrarea pe linie."
},
{
  id: 11,
  image: "11.jpg",
  question: "Relația din figură se referă la:",
  answers: [
    {
      key: "a",
      text: "legea lui Ohm"
    },
    {
      key: "b",
      text: "teorema reciprocității"
    },
    {
      key: "c",
      text: "teorema energiei electromagnetice"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Relația indicată se referă la teorema energiei electromagnetice."
},
{
  id: 12,
  image: "",
  question: "Efectul pelicular se referă la:",
  answers: [
    {
      key: "a",
      text: "creșterea vitezei curentului electric prin conductor"
    },
    {
      key: "b",
      text: "modificarea distribuției curentului în conductoare prin refularea acestuia pe marginea exterioară a conductorului"
    },
    {
      key: "c",
      text: "apariția unui supracurent datorită creșterii frecvenței"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Efectul pelicular constă în concentrarea curentului către zona exterioară a conductorului, mai ales la frecvențe ridicate."
},
{
  id: 13,
  image: "",
  question: "În cazul unei unde electromagnetice care se propagă într-un mediu dielectric (μ, ε), impedanța de undă este o mărime:",
  answers: [
    {
      key: "a",
      text: "pur reală"
    },
    {
      key: "b",
      text: "pur imaginară"
    },
    {
      key: "c",
      text: "zero"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Într-un mediu dielectric ideal, impedanța de undă este o mărime pur reală."
},
{
  id: 14,
  image: "14.jpg",
  question: "Vectorul din figură reprezintă:",
  answers: [
    {
      key: "a",
      text: "aria unei suprafețe ce închide un volum V"
    },
    {
      key: "b",
      text: "potențialul magnetic vector"
    },
    {
      key: "c",
      text: "o notație arbitrară a unei integrale de volum a vectorului J"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Vectorul din relația indicată reprezintă potențialul magnetic vector."
},
{
  id: 15,
  image: "",
  question: "Rezistența în curent alternativ:",
  answers: [
    {
      key: "a",
      text: "scade odată cu creșterea frecvenței"
    },
    {
      key: "b",
      text: "nu se modifică odată cu frecvența"
    },
    {
      key: "c",
      text: "crește odată cu creșterea frecvenței"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. În curent alternativ, din cauza efectului pelicular, rezistența efectivă a conductorului crește odată cu frecvența."
},
{
  id: 16,
  image: "16.jpg",
  question: "În reprezentarea alăturată, mărimile de câmp magnetic sunt cele reprezentate cu culoarea:",
  answers: [
    {
      key: "a",
      text: "albastră"
    },
    {
      key: "b",
      text: "roșie"
    },
    {
      key: "c",
      text: "nu există mărimi specifice de câmp magnetic în această reprezentare"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. În reprezentarea din figură, mărimile de câmp magnetic sunt marcate cu roșu."
},
{
  id: 17,
  image: "17.jpg",
  question: "Urmărind imaginile alăturate care reprezintă distribuția de curent la o anumită frecvență într-un conductor, în opinia dvs., în care dintre conductoare curentul are o frecvență mai mare?",
  answers: [
    {
      key: "a",
      text: "conductorul din stânga"
    },
    {
      key: "b",
      text: "conductorul din dreapta"
    },
    {
      key: "c",
      text: "frecvența este aceeași"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. La frecvențe mai mari, curentul este împins mai mult spre exteriorul conductorului, efectul pelicular fiind mai pronunțat."
},
{
  id: 18,
  image: "",
  question: "Pentru un semnal de frecvență f = 1GHz, lungimea de undă în vid este:",
  answers: [
    {
      key: "a",
      text: "1 km"
    },
    {
      key: "b",
      text: "1 m"
    },
    {
      key: "c",
      text: "0.3 m"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Lungimea de undă în vid se calculează cu relația λ = c / f. Pentru f = 1GHz, λ = 3·10⁸ / 10⁹ = 0.3 m."
},
{
  id: 19,
  image: "",
  question: "O undă de curent care se propagă pe o linie ajunge la finalul acesteia (bornele 2-2'). Dacă reflexia undei directe I conduce la o undă rezultantă spre sursă de valoare 2I, înseamnă că:",
  answers: [
    {
      key: "a",
      text: "impedanța de sarcină este zero (linia este în scurtcircuit)"
    },
    {
      key: "b",
      text: "impedanța de sarcină este egală cu impedanța caracteristică, deci linia este adaptată"
    },
    {
      key: "c",
      text: "impedanța de sarcină este infinită (linia este la mers în gol)"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. În cazul liniei în scurtcircuit, impedanța de sarcină este zero, iar reflexia curentului poate conduce la dublarea curentului rezultant."
},
{
  id: 20,
  image: "",
  question: "Impedanța unei unde electromagnetice plane în vid are valoarea:",
  answers: [
    {
      key: "a",
      text: "zero"
    },
    {
      key: "b",
      text: "377 Ohm"
    },
    {
      key: "c",
      text: "infinit"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Impedanța undei electromagnetice plane în vid este aproximativ 377 Ω."
},
{
  id: 21,
  image: "21.jpg",
  question: "Care din cele două seturi de soluții (E, H) presupun rezolvarea în prima instanță a ecuației diferențiale de ordinul 2 în raport cu H:",
  answers: [
    {
      key: "a",
      text: "primul set"
    },
    {
      key: "b",
      text: "al doilea set"
    },
    {
      key: "c",
      text: "niciunul"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Al doilea set presupune rezolvarea inițială în raport cu H, după care se determină câmpul E."
},
{
  id: 22,
  image: "22.jpg",
  question: "Este cunoscut ca modelul în care un voltmetru este montat într-un circuit în care există inducție electromagnetică influențează decisiv afișajul acestuia. Pentru montajul alăturat, indicația voltmetrului este:",
  answers: [
    {
      key: "a",
      text: "mai mare ca zero"
    },
    {
      key: "b",
      text: "mai mică ca zero"
    },
    {
      key: "c",
      text: "zero"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Pentru montajul indicat în figură, tensiunea măsurată de voltmetru este zero."
},
{
  id: 23,
  image: "23.jpg",
  question: "Expresia impedanței de undă din relația alăturată se referă la:",
  answers: [
    {
      key: "a",
      text: "unda electromagnetică în mediu conductor"
    },
    {
      key: "b",
      text: "unda electromagnetică în mediu dielectric"
    },
    {
      key: "c",
      text: "este impedanța caracteristică a unei linii de transmisie"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Expresia impedanței de undă din figură se referă la propagarea undei electromagnetice în mediu conductor."
},
{
  id: 24,
  image: "24.jpg",
  question: "În cazul liniilor de transmisie, mărimea Zc din formula alăturată definește:",
  answers: [
    {
      key: "a",
      text: "impedanța conductorului"
    },
    {
      key: "b",
      text: "impedanța caracteristică"
    },
    {
      key: "c",
      text: "este doar o mărime arbitrară de calcul"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Mărimea Zc definește impedanța caracteristică a liniei de transmisie."
},
{
  id: 25,
  image: "",
  question: "La frecvență industrială de 50 Hz, adâncimea de pătrundere în cupru (Cu) este de ordinul:",
  answers: [
    {
      key: "a",
      text: "1 m"
    },
    {
      key: "b",
      text: "1 cm"
    },
    {
      key: "c",
      text: "0.1 m"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. La frecvența de 50 Hz, adâncimea de pătrundere în cupru este de ordinul centimetrilor, aproximativ 1 cm."
},
{
  id: 26,
  image: "26.jpg",
  question: "Relația alăturată reprezintă:",
  answers: [
    {
      key: "a",
      text: "frecvența unei unde electromagnetice"
    },
    {
      key: "b",
      text: "viteza de deplasare a undei în mediu conductor"
    },
    {
      key: "c",
      text: "viteza de deplasare a undei în mediu dielectric"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Relația indicată reprezintă viteza de deplasare a undei electromagnetice într-un mediu dielectric."
},
{
  id: 27,
  image: "27.jpg",
  question: "În imaginea alăturată este vorba despre:",
  answers: [
    {
      key: "a",
      text: "propagarea undei directe de tensiune pe o linie"
    },
    {
      key: "b",
      text: "propagarea undei inverse de tensiune pe o linie"
    },
    {
      key: "c",
      text: "nu este vorba despre propagarea vreunui semnal"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Imaginea arată propagarea undei directe de tensiune pe o linie."
},
{
  id: 28,
  image: "28.jpg",
  question: "Operatorul matematic din figură se numește:",
  answers: [
    {
      key: "a",
      text: "nabla"
    },
    {
      key: "b",
      text: "delta"
    },
    {
      key: "c",
      text: "laplacean"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Operatorul din figură este operatorul laplacean, notat de obicei cu Δ sau ∇²."
},
{
  id: 29,
  image: "29.jpg",
  question: "O undă de tensiune care se propagă pe o linie ajunge la finalul acesteia (bornele 2-2'). Dacă reflexia undei directe U conduce la o undă rezultantă spre sursă de valoare 2U, înseamnă că:",
  answers: [
    {
      key: "a",
      text: "impedanța de sarcină este zero (linia este în scurtcircuit)"
    },
    {
      key: "b",
      text: "impedanța de sarcină este egală cu impedanța caracteristică, deci linia este adaptată"
    },
    {
      key: "c",
      text: "impedanța de sarcină este infinită (linia este la mers în gol)"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Este corect C, pentru că atunci când tensiunea rezultantă la capătul liniei devine 2U, înseamnă că unda reflectată se adună cu unda directă. Acest fenomen apare la mers în gol, unde impedanța de sarcină este infinită."
},
{
  id: 30,
  image: "30.jpg",
  question: "Vectorul din figură reprezintă:",
  answers: [
    {
      key: "a",
      text: "aria unei suprafețe ce închide un volum V"
    },
    {
      key: "b",
      text: "potențialul magnetic vector"
    },
    {
      key: "c",
      text: "o notație arbitrară a unei integrale de volum a vectorului J"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Vectorul din relația indicată reprezintă potențialul magnetic vector."
},
{
  id: 31,
  image: "31.jpg",
  question: "Setul de ecuații ale lui Maxwell din figură constituie punctul de start pentru:",
  answers: [
    {
      key: "a",
      text: "studiul undei electromagnetice în mediu conductor"
    },
    {
      key: "b",
      text: "studiul undei electromagnetice în mediu dielectric"
    },
    {
      key: "c",
      text: "studiul efectului pelicular"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Setul de ecuații Maxwell din figură constituie punctul de start pentru studiul undei electromagnetice în mediu dielectric."
},
{
  id: 32,
  image: "32.jpg",
  question: "Mărimea vectorială complexă S din relația alăturată se referă la:",
  answers: [
    {
      key: "a",
      text: "puterea aparentă într-un circuit electric"
    },
    {
      key: "b",
      text: "vectorul Poynting"
    },
    {
      key: "c",
      text: "suprafața de separație dintre două medii"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Mărimea vectorială complexă S este asociată vectorului Poynting, care descrie fluxul de energie electromagnetică."
},
{
  id: 33,
  image: "",
  question: "În cazul unei unde electromagnetice care se propagă într-un mediu dielectric (μ, ε), impedanța de undă este o mărime:",
  answers: [
    {
      key: "a",
      text: "pur reală"
    },
    {
      key: "b",
      text: "pur imaginară"
    },
    {
      key: "c",
      text: "zero"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Într-un mediu dielectric ideal, impedanța de undă este o mărime pur reală."
},
{
  id: 34,
  image: "",
  question: "Pentru un semnal de frecvență f = 1 GHz, lungimea de undă în vid este:",
  answers: [
    {
      key: "a",
      text: "1 km"
    },
    {
      key: "b",
      text: "1 mm"
    },
    {
      key: "c",
      text: "0.3 m"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Lungimea de undă în vid se calculează cu relația λ = c / f. Pentru f = 1 GHz, rezultă λ = 3·10⁸ / 10⁹ = 0.3 m."
},
{
  id: 35,
  image: "35.jpg",
  question: "Care din cele două seturi de soluții (E, H) presupun rezolvarea în prima instanță a ecuației diferențiale de ordinul 2 în raport cu H:",
  answers: [
    {
      key: "a",
      text: "primul set"
    },
    {
      key: "b",
      text: "al doilea set"
    },
    {
      key: "c",
      text: "niciunul"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Al doilea set presupune rezolvarea inițială în raport cu H, după care se determină câmpul E."
},
{
  id: 36,
  image: "36.jpg",
  question: "Operatorul matematic din figură se numește:",
  answers: [
    {
      key: "a",
      text: "nabla"
    },
    {
      key: "b",
      text: "delta"
    },
    {
      key: "c",
      text: "laplacean"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Operatorul din figură este operatorul laplacean, notat de obicei cu Δ sau ∇²."
},
{
  id: 37,
  image: "37.jpg",
  question: "Relația alăturată reprezintă:",
  answers: [
    {
      key: "a",
      text: "frecvența unei unde electromagnetice"
    },
    {
      key: "b",
      text: "viteza de deplasare a undei în mediu conductor"
    },
    {
      key: "c",
      text: "viteza de deplasare a undei în mediu dielectric"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Relația indicată reprezintă viteza de deplasare a undei electromagnetice într-un mediu dielectric."
},
{
  id: 38,
  image: "38.jpg",
  question: "Expresia impedanței de undă din relația alăturată se referă la:",
  answers: [
    {
      key: "a",
      text: "unda electromagnetică în mediu conductor"
    },
    {
      key: "b",
      text: "unda electromagnetică în mediu dielectric"
    },
    {
      key: "c",
      text: "este impedanța caracteristică a unei linii de transmisie"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Expresia impedanței de undă din figură se referă la propagarea undei electromagnetice în mediu conductor."
},
{
  id: 39,
  image: "39.jpg",
  question: "Prin litera λ (lambda) notăm:",
  answers: [
    {
      key: "a",
      text: "lungimea traseului unei unde electromagnetice între două antene"
    },
    {
      key: "b",
      text: "lungimea de undă"
    },
    {
      key: "c",
      text: "frecvența undei electromagnetice"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Litera λ (lambda) notează lungimea de undă."
},
{
  id: 40,
  image: "40.jpg",
  question: "O undă electromagnetică se propagă pe direcția axei OX în mediul dielectric (1) și ajunge la un punct de incidență cu mediul dielectric (2). Dacă Z1 > Z2, atunci:",
  answers: [
    {
      key: "a",
      text: "H2d < H0"
    },
    {
      key: "b",
      text: "H2d > H0"
    },
    {
      key: "c",
      text: "H2d = H0"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Conform variantei marcate în imagine, pentru Z1 > Z2 rezultă H2d > H0."
},
{
  id: 41,
  image: "41.jpg",
  question: "Este cunoscut ca modul în care un voltmetru este montat într-un circuit în care există inducție electromagnetică influențează decisiv afișajul acestuia. Pentru montajul alăturat, indicația voltmetrului este:",
  answers: [
    {
      key: "a",
      text: "mai mare ca zero"
    },
    {
      key: "b",
      text: "mai mică ca zero"
    },
    {
      key: "c",
      text: "zero"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Pentru montajul indicat în figură, indicația voltmetrului este mai mare ca zero."
},
{
  id: 42,
  image: "42.jpg",
  question: "În relația alăturată, se definește Z10 ca fiind:",
  answers: [
    {
      key: "a",
      text: "impedanța de mers în gol văzută la intrare pe linie"
    },
    {
      key: "b",
      text: "impedanța de mers în gol văzută la ieșire pe linie"
    },
    {
      key: "c",
      text: "impedanța lineică (pe unitate de lungime)"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Z10 reprezintă impedanța de mers în gol văzută la intrarea pe linie."
},
{
  id: 43,
  image: "43.jpg",
  question: "Relația alăturată reprezintă:",
  answers: [
    {
      key: "a",
      text: "lungimea de undă a unui semnal"
    },
    {
      key: "b",
      text: "constanta de atenuare"
    },
    {
      key: "c",
      text: "constanta de fază"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Relația β = 2π / λ definește constanta de fază."
},
{
  id: 44,
  image: "",
  question: "Impedanța undei electromagnetice plane în vid are valoarea:",
  answers: [
    {
      key: "a",
      text: "zero"
    },
    {
      key: "b",
      text: "377 Ohm"
    },
    {
      key: "c",
      text: "infinit"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Impedanța unei unde electromagnetice plane în vid este aproximativ 377 Ω."
},
{
  id: 45,
  image: "45.jpg",
  question: "Mărimea complexă γ (gamma) reprezintă:",
  answers: [
    {
      key: "a",
      text: "constanta de timp a unui semnal"
    },
    {
      key: "b",
      text: "constanta de atenuare"
    },
    {
      key: "c",
      text: "constanta de propagare"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Mărimea complexă γ reprezintă constanta de propagare, exprimată de obicei sub forma γ = α + jβ."
},
{
  id: 46,
  image: "46.jpg",
  question: "În reprezentarea alăturată, mărimile de câmp magnetic sunt cele reprezentate cu culoarea:",
  answers: [
    {
      key: "a",
      text: "albastră"
    },
    {
      key: "b",
      text: "roșie"
    },
    {
      key: "c",
      text: "nu există mărimi specifice de câmp magnetic în această reprezentare"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. În reprezentarea din figură, mărimile de câmp magnetic sunt marcate cu roșu."
},
{
  id: 47,
  image: "47.jpg",
  question: "Mărimea δ (delta) din relația alăturată se referă la:",
  answers: [
    {
      key: "a",
      text: "întrefierul unei mașini electrice"
    },
    {
      key: "b",
      text: "adâncimea de pătrundere a câmpului electromagnetic în spațiul conductor"
    },
    {
      key: "c",
      text: "o mărime adimensională fără semnificație fizică"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Mărimea δ reprezintă adâncimea de pătrundere a câmpului electromagnetic în conductor, cunoscută și ca adâncime de pătrundere sau skin depth."
},
{
  id: 48,
  image: "48.jpg",
  question: "În cazul liniilor de transmisie, mărimea Zc din formula alăturată definește:",
  answers: [
    {
      key: "a",
      text: "impedanța conductorului"
    },
    {
      key: "b",
      text: "impedanța caracteristică"
    },
    {
      key: "c",
      text: "este doar o mărime arbitrară de calcul"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Mărimea Zc definește impedanța caracteristică a liniei de transmisie."
},
{
  id: 49,
  image: "49.jpg",
  question: "Relația din figură se referă la:",
  answers: [
    {
      key: "a",
      text: "legea lui Ohm"
    },
    {
      key: "b",
      text: "teorema reciprocității"
    },
    {
      key: "c",
      text: "teorema energiei electromagnetice"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Relația indicată se referă la teorema energiei electromagnetice."
},
{
  id: 50,
  image: "50.jpg",
  question: "În imaginea alăturată este vorba despre:",
  answers: [
    {
      key: "a",
      text: "propagarea undei directe de tensiune pe o linie"
    },
    {
      key: "b",
      text: "propagarea undei inverse de tensiune pe o linie"
    },
    {
      key: "c",
      text: "nu este vorba despre propagarea vreunui semnal"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Imaginea arată propagarea undei directe de tensiune pe o linie."
},
{
  id: 51,
  image: "",
  question: "O undă de curent care se propagă pe o linie ajunge la finalul acesteia (bornele 2-2'). Dacă reflexia undei directe I conduce la o undă rezultantă spre sursă de valoare 2I, înseamnă că:",
  answers: [
    {
      key: "a",
      text: "impedanța de sarcină este zero (linia este în scurtcircuit)"
    },
    {
      key: "b",
      text: "impedanța de sarcină este egală cu impedanța caracteristică, deci linia este adaptată"
    },
    {
      key: "c",
      text: "impedanța de sarcină este infinită (linia este la mers în gol)"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Pentru cazul marcat în imagine, impedanța de sarcină este zero, deci linia este în scurtcircuit."
},
{
  id: 52,
  image: "",
  question: "La frecvența industrială de 50 Hz, adâncimea de pătrundere în cupru (Cu) este de ordinul:",
  answers: [
    {
      key: "a",
      text: "1 m"
    },
    {
      key: "b",
      text: "1 cm"
    },
    {
      key: "c",
      text: "0.1 mm"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. La frecvența de 50 Hz, adâncimea de pătrundere în cupru este de ordinul centimetrilor, aproximativ 1 cm."
},
{
  id: 53,
  image: "",
  question: "Efectul pelicular semnifică:",
  answers: [
    {
      key: "a",
      text: "creșterea vitezei curentului electric prin conductor"
    },
    {
      key: "b",
      text: "modificarea distribuției curentului în conductoare prin refularea acestuia pe marginea exterioară a conductorului"
    },
    {
      key: "c",
      text: "apariția unui supracurent datorită creșterii frecvenței"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. Efectul pelicular reprezintă tendința curentului alternativ de a se distribui mai mult spre suprafața conductorului."
},
{
  id: 54,
  image: "54.jpg",
  question: "În relația alăturată, mărimile Ec și ES reprezintă:",
  answers: [
    {
      key: "a",
      text: "expresii ale unor surse de tensiune dintr-un circuit"
    },
    {
      key: "b",
      text: "expresii ale potențialului electric"
    },
    {
      key: "c",
      text: "expresii ale intensității câmpului electric coulombian respectiv solenoidal"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Mărimile Ec și ES reprezintă componente ale intensității câmpului electric: componenta coulombiană și componenta solenoidală."
},
{
  id: 55,
  image: "55.jpg",
  question: "Urmărind imaginile alăturate care reprezintă distribuția de curent la o anumită frecvență într-un conductor, în opinia dvs., în care dintre conductoare curentul are o frecvență mai mare?",
  answers: [
    {
      key: "a",
      text: "conductorul din stânga"
    },
    {
      key: "b",
      text: "conductorul din dreapta"
    },
    {
      key: "c",
      text: "frecvența este aceeași"
    }
  ],
  correctAnswers: ["b"],
  explanation: "Răspunsul corect este B. În conductorul din dreapta efectul pelicular este mai pronunțat, ceea ce indică o frecvență mai mare."
},
{
  id: 56,
  image: "56.jpg",
  question: "Raportul lungimilor de undă în dielectric și conductor, ca de altfel și raportul vitezelor unei unde în cele două medii, este dependent de frecvență prin:",
  answers: [
    {
      key: "a",
      text: "f"
    },
    {
      key: "b",
      text: "1/f"
    },
    {
      key: "c",
      text: "1/√f"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C. Raportul lungimilor de undă și al vitezelor dintre dielectric și conductor depinde de frecvență prin factorul 1/√f."
},
{
  id: 57,
  image: "57.jpg",
  question: "Pentru imaginea alăturată, dacă semnalul de intrare pe linia de transmisie este cel albastru, funcție de timp, iar semnalul cu roșu este cel de ieșire de pe linie, putem spune că:",
  answers: [
    {
      key: "a",
      text: "este o linie Heaviside"
    },
    {
      key: "b",
      text: "există atenuare a semnalului pe linie"
    },
    {
      key: "c",
      text: "semnalul pe linie nu este atenuat"
    }
  ],
  correctAnswers: ["a"],
  explanation: "Răspunsul corect este A. Conform variantei marcate în imagine, situația prezentată corespunde unei linii Heaviside."
},
{
  id: 58,
  image: "",
  question: "Rezistența în curent alternativ:",
  answers: [
    {
      key: "a",
      text: "scade odată cu creșterea frecvenței"
    },
    {
      key: "b",
      text: "nu se modifică odată cu frecvența"
    },
    {
      key: "c",
      text: "crește odată cu creșterea frecvenței"
    }
  ],
  correctAnswers: ["c"],
  explanation: "Răspunsul corect este C, rezistenta scade/creste odata cu frecventa (direct proportional)."
}










];

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const scoreElement = document.getElementById("score");
const totalScoreElement = document.getElementById("totalScore");
const questionCounterElement = document.getElementById("questionCounter");
const progressFillElement = document.getElementById("progressFill");

const quizArea = document.getElementById("quizArea");
const resultArea = document.getElementById("resultArea");

const questionNumberElement = document.getElementById("questionNumber");
const questionTextElement = document.getElementById("questionText");
const questionImageElement = document.getElementById("questionImage");
const answersForm = document.getElementById("answersForm");
const feedbackElement = document.getElementById("feedback");

const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const finalScoreElement = document.getElementById("finalScore");

function startQuiz() {
  quizQuestions = shuffleQuestions(questions);
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  quizArea.classList.remove("hidden");
  resultArea.classList.add("hidden");

  updateScore();
  renderQuestion();
}

function shuffleQuestions(array) {
  const shuffledArray = [...array];

  for (let index = shuffledArray.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    const temporaryValue = shuffledArray[index];
    shuffledArray[index] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
}

function renderQuestion() {
  answered = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  questionNumberElement.textContent = currentQuestion.id;
  questionTextElement.textContent = currentQuestion.question;

  questionCounterElement.textContent = `Întrebarea ${questionNumber} / ${quizQuestions.length}`;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressFillElement.style.width = `${progressPercent}%`;

  feedbackElement.className = "feedback hidden";
  feedbackElement.innerHTML = "";

  checkBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");

  renderImage(currentQuestion);
  renderAnswers(currentQuestion);
  updateScore();
}

function renderImage(question) {
  if (question.image && question.image.trim() !== "") {
    questionImageElement.src = question.image;
    questionImageElement.alt = `Imagine pentru întrebarea ${question.id}`;
    questionImageElement.style.display = "block";

    questionImageElement.onerror = () => {
      questionImageElement.style.display = "none";
    };
  } else {
    questionImageElement.src = "";
    questionImageElement.style.display = "none";
  }
}

function renderAnswers(question) {
  answersForm.innerHTML = "";

  const shuffledAnswers = shuffleQuestions(question.answers);

  shuffledAnswers.forEach((answer, index) => {
    const displayedLetter = String.fromCharCode(65 + index);

    const option = document.createElement("label");
    option.className = "answer-option";
    option.dataset.key = answer.key;

    option.innerHTML = `
      <input type="checkbox" name="answer" value="${escapeHtml(answer.key)}">
      <span>
        <span class="answer-label">${displayedLetter}.</span>
        ${escapeHtml(answer.text)}
      </span>
    `;

    answersForm.appendChild(option);
  });
}
function checkAnswer() {
  if (answered) return;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedAnswers = getSelectedAnswers();

  if (selectedAnswers.length === 0) {
    feedbackElement.className = "feedback error";
    feedbackElement.innerHTML = "Te rog selectează cel puțin o variantă de răspuns.";
    return;
  }

  answered = true;

  const correctAnswers = normalizeAnswers(currentQuestion.correctAnswers);
  const selectedNormalized = normalizeAnswers(selectedAnswers);
  const isCorrect = areArraysEqual(selectedNormalized, correctAnswers);

  markAnswers(selectedNormalized, correctAnswers);

  if (isCorrect) {
    score++;
    feedbackElement.className = "feedback success";
    feedbackElement.innerHTML = `
      <strong>Corect! ✔️</strong><br>
      ${escapeHtml(currentQuestion.explanation || "Ai ales răspunsul corect.")}
    `;
  } else {
    feedbackElement.className = "feedback error";
    feedbackElement.innerHTML = `
      <strong>Greșit.</strong><br>
      Răspuns corect: <strong>${correctAnswers.map((item) => item.toUpperCase()).join(", ")}</strong><br>
      ${escapeHtml(currentQuestion.explanation || "Verifică explicația pentru această întrebare.")}
    `;
  }

  disableAnswers();
  updateScore();

  checkBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");

  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Vezi rezultatul";
  } else {
    nextBtn.textContent = "Următoarea";
  }
}

function getSelectedAnswers() {
  const checkedInputs = answersForm.querySelectorAll('input[name="answer"]:checked');
  return Array.from(checkedInputs).map((input) => input.value);
}

function markAnswers(selectedAnswers, correctAnswers) {
  const options = answersForm.querySelectorAll(".answer-option");

  options.forEach((option) => {
    const key = option.dataset.key;

    if (correctAnswers.includes(key)) {
      option.classList.add("correct");
    }

    if (selectedAnswers.includes(key) && !correctAnswers.includes(key)) {
      option.classList.add("wrong");
    }
  });
}

function disableAnswers() {
  const inputs = answersForm.querySelectorAll("input");

  inputs.forEach((input) => {
    input.disabled = true;
  });
}

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizArea.classList.add("hidden");
  resultArea.classList.remove("hidden");

  progressFillElement.style.width = "100%";

  const percentage = Math.round((score / quizQuestions.length) * 100);

  finalScoreElement.innerHTML = `
    Ai răspuns corect la <strong>${score}</strong> din <strong>${quizQuestions.length}</strong> întrebări.<br>
    Procentaj: <strong>${percentage}%</strong>
  `;

  updateScore();
}

function updateScore() {
  const totalQuestions = quizQuestions.length || questions.length;

  scoreElement.textContent = score;
  totalScoreElement.textContent = `Scor: ${score} / ${totalQuestions}`;
}

function normalizeAnswers(answers) {
  return [...answers].map((answer) => String(answer).toLowerCase()).sort();
}

function areArraysEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  return firstArray.every((value, index) => value === secondArray[index]);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);
retryBtn.addEventListener("click", startQuiz);

startQuiz();
