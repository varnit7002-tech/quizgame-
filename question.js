const quizData = [
    
    {
        question: "What is the capital of France?",
        options: ["Paris", "Madrid", "Rome", "Berlin"],
        answer: 0,
        difficulty: "easy"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3,
        difficulty: "easy"
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "What is H2O commonly called?",
        options: ["Salt", "Water", "Oxygen", "Hydrogen"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "What is 12 × 12?",
        options: ["124", "144", "154", "164"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which gas do humans need for respiration?",
        options: ["Oxygen", "Helium", "Carbon dioxide", "Hydrogen"],
        answer: 0,
        difficulty: "easy"
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which is the largest planet in our Solar System?",
        options: ["Saturn", "Jupiter", "Neptune", "Earth"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which organ pumps blood around the body?",
        options: ["Lungs", "Brain", "Heart", "Liver"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Ringgit"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Horse", "Cheetah", "Lion", "Greyhound"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "How many days are in a leap year?",
        options: ["364", "365", "366", "367"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Van Gogh", "Picasso", "Monet"],
        answer: 0,
        difficulty: "easy"
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which continent is the largest?",
        options: ["Africa", "Asia", "Europe", "North America"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "How many players are on a football team on the field?",
        options: ["9", "10", "11", "12"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["50°C", "75°C", "100°C", "150°C"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which country is famous for the pyramids of Giza?",
        options: ["Egypt", "Greece", "Mexico", "Peru"],
        answer: 0,
        difficulty: "easy"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which instrument measures temperature?",
        options: ["Barometer", "Thermometer", "Compass", "Altimeter"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Gd", "Go"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which planet is famous for its prominent rings?",
        options: ["Mars", "Saturn", "Venus", "Mercury"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "How many hours are in a day?",
        options: ["12", "18", "24", "36"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which ocean lies between Africa and Australia?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which vitamin is commonly produced in skin through sunlight exposure?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: 3,
        difficulty: "easy"
    },
    {
        question: "How many colors are traditionally listed in a rainbow?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "What is the largest internal organ in the human body?",
        options: ["Heart", "Liver", "Lung", "Kidney"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Mercury", "Copper", "Aluminium"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which country is shaped roughly like a boot?",
        options: ["Spain", "Italy", "Greece", "Portugal"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "What is the nearest star to Earth?",
        options: ["Sirius", "Polaris", "The Sun", "Alpha Centauri"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which part of a plant usually absorbs water from soil?",
        options: ["Flower", "Leaf", "Root", "Fruit"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "How many degrees are in a right angle?",
        options: ["45", "90", "180", "360"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which is the largest desert by total area?",
        options: ["Sahara", "Gobi", "Antarctic Desert", "Arabian Desert"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which blood cells help fight infections?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "What is the freezing point of water at standard pressure?",
        options: ["0°C", "10°C", "32°C", "100°C"],
        answer: 0,
        difficulty: "easy"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "How many bones are in an adult human body approximately?",
        options: ["106", "206", "306", "406"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which is the longest river in India by length within India?",
        options: ["Yamuna", "Ganga", "Narmada", "Godavari"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Milan", "Venice", "Rome", "Naples"],
        answer: 2,
        difficulty: "easy"
    },
    {
        question: "Which animal is the largest living land animal?",
        options: ["Giraffe", "African elephant", "Rhino", "Hippo"],
        answer: 1,
        difficulty: "easy"
    },

    // =========================
    // MEDIUM QUESTIONS
    // =========================

    {
        question: "What is the capital of Kazakhstan?",
        options: ["Almaty", "Astana", "Bishkek", "Tashkent"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which element has the atomic number 6?",
        options: ["Oxygen", "Carbon", "Nitrogen", "Boron"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "What is the approximate speed of light in vacuum?",
        options: ["3 × 10^6 m/s", "3 × 10^7 m/s", "3 × 10^8 m/s", "3 × 10^9 m/s"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "Which scientist formulated the three laws of motion?",
        options: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Johannes Kepler"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which country has the most time zones when overseas territories are included?",
        options: ["Russia", "United States", "France", "China"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "What is the SI unit of electric resistance?",
        options: ["Volt", "Watt", "Ohm", "Ampere"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "Which layer of Earth is liquid and mainly composed of iron and nickel?",
        options: ["Crust", "Mantle", "Outer core", "Inner core"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "What is the largest bone in the human body?",
        options: ["Tibia", "Femur", "Humerus", "Radius"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which empire was ruled by Mansa Musa?",
        options: ["Mali Empire", "Ottoman Empire", "Roman Empire", "Mughal Empire"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "What is the process by which plants release water vapor?",
        options: ["Respiration", "Transpiration", "Germination", "Fermentation"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which planet has the shortest day in the Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "What is the study of earthquakes called?",
        options: ["Seismology", "Meteorology", "Ecology", "Geology"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "Which treaty formally ended World War I between Germany and the Allied powers?",
        options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Vienna", "Treaty of Tordesillas"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "What is the largest moon of Saturn?",
        options: ["Europa", "Titan", "Ganymede", "Triton"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which Indian mathematician is famous for his work on number theory and infinite series?",
        options: ["Aryabhata", "Srinivasa Ramanujan", "Bhaskara II", "C. V. Raman"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "What is the value of pi to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which country was formerly known as Persia?",
        options: ["Iraq", "Iran", "Syria", "Jordan"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which blood type is often called the universal red-cell donor?",
        options: ["AB+", "O−", "A−", "O+"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which Indian city is known as the Pink City?",
        options: ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "What is the smallest country in the world by area?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which programming language was created by Guido van Rossum?",
        options: ["Java", "Python", "Ruby", "C++"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "What is the pH of a neutral solution at 25°C?",
        options: ["0", "5", "7", "14"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "Which planet rotates on its side with an axial tilt of about 98 degrees?",
        options: ["Neptune", "Uranus", "Saturn", "Venus"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which ancient civilization developed cuneiform writing?",
        options: ["Sumerians", "Romans", "Vikings", "Aztecs"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "What is the hardest tissue in the human body?",
        options: ["Bone", "Dentin", "Tooth enamel", "Cartilage"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "Which ocean current helps warm Western Europe?",
        options: ["California Current", "Gulf Stream", "Humboldt Current", "Labrador Current"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which Indian classical dance originated in Kerala?",
        options: ["Kathakali", "Kathak", "Odissi", "Manipuri"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "NaOH", "CaCl2"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "Which mathematician is associated with the theorem a² + b² = c²?",
        options: ["Euclid", "Pythagoras", "Archimedes", "Fermat"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which country has the city of Marrakech?",
        options: ["Morocco", "Algeria", "Tunisia", "Egypt"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "What is the primary function of red blood cells?",
        options: ["Fight infection", "Clot blood", "Carry oxygen", "Produce hormones"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Barometer", "Hygrometer", "Anemometer", "Seismometer"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "Who wrote the novel 1984?",
        options: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "J. R. R. Tolkien"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "Which planet has the Great Red Spot?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "Which metal has the chemical symbol Fe?",
        options: ["Fluorine", "Iron", "Fermium", "Francium"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "What is the approximate value of Avogadro's constant?",
        options: ["6.02 × 10^23", "6.02 × 10^12", "9.81 × 10^23", "3.00 × 10^8"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "Which branch of biology studies fungi?",
        options: ["Botany", "Mycology", "Zoology", "Ecology"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which Mughal emperor commissioned the Taj Mahal?",
        options: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "What is the largest gland in the human body?",
        options: ["Pancreas", "Thyroid", "Liver", "Pituitary"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "Which particle has a negative electric charge?",
        options: ["Proton", "Neutron", "Electron", "Photon"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "What is the main function of mitochondria?",
        options: ["Store DNA only", "Produce cellular energy", "Make antibodies", "Digest food outside cells"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which desert covers much of northern Africa?",
        options: ["Kalahari", "Sahara", "Atacama", "Gobi"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which Indian state has the largest area?",
        options: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["S", "So", "Na", "Sd"],
        answer: 2,
        difficulty: "medium"
    },
    {
        question: "Which planet has a day longer than its year?",
        options: ["Mars", "Venus", "Earth", "Jupiter"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which ancient city was buried by Mount Vesuvius in 79 CE?",
        options: ["Pompeii", "Athens", "Sparta", "Carthage"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "What is the study of weather and atmosphere called?",
        options: ["Astronomy", "Meteorology", "Geology", "Oceanography"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which country is home to the ancient city of Petra?",
        options: ["Jordan", "Lebanon", "Israel", "Turkey"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "What is the largest artery in the human body?",
        options: ["Carotid artery", "Aorta", "Femoral artery", "Pulmonary artery"],
        answer: 1,
        difficulty: "medium"
    },
    {
        question: "Which scientist proposed the theory of evolution by natural selection?",
        options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"],
        answer: 0,
        difficulty: "medium"
    },

    // =========================
    // HARD QUESTIONS
    // =========================

    {
        question: "Which element has the highest melting point among the following?",
        options: ["Iron", "Tungsten", "Copper", "Titanium"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "What is the Chandrasekhar limit approximately?",
        options: ["0.14 solar masses", "1.4 solar masses", "14 solar masses", "140 solar masses"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which theorem states that every continuous function on a closed interval attains both a maximum and a minimum?",
        options: ["Intermediate Value Theorem", "Extreme Value Theorem", "Mean Value Theorem", "Fundamental Theorem of Calculus"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which ancient Greek scholar calculated an approximation of Earth's circumference using shadows?",
        options: ["Euclid", "Eratosthenes", "Archimedes", "Aristarchus"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which particle mediates the electromagnetic force?",
        options: ["Gluon", "Photon", "W boson", "Higgs boson"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which element has the highest atomic number among naturally occurring elements?",
        options: ["Uranium", "Plutonium", "Thorium", "Radium"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "In computing, what does ACID describe in database transactions?",
        options: [
            "Atomicity, Consistency, Isolation, Durability",
            "Access, Control, Integrity, Data",
            "Accuracy, Compression, Indexing, Distribution",
            "Authentication, Caching, Isolation, Delivery"
        ],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which sorting algorithm is based on partitioning and has an average-case time complexity of O(n log n)?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Counting sort"],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which number is irrational?",
        options: ["0.125", "22/7", "√2", "0.333..."],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which treaty divided newly discovered lands outside Europe between Spain and Portugal in 1494?",
        options: ["Treaty of Utrecht", "Treaty of Tordesillas", "Treaty of Westphalia", "Treaty of Zaragoza"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which physicist introduced the concept of quantized energy to explain blackbody radiation?",
        options: ["Max Planck", "Niels Bohr", "Erwin Schrödinger", "Paul Dirac"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "What is the approximate escape velocity from Earth's surface?",
        options: ["1.12 km/s", "11.2 km/s", "112 km/s", "1120 km/s"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which moon is known for its subsurface ocean and geysers of water ice?",
        options: ["Enceladus", "Io", "Callisto", "Titan"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which famous problem asks whether every even integer greater than 2 can be expressed as the sum of two primes?",
        options: ["Riemann Hypothesis", "Goldbach's Conjecture", "Poincare Conjecture", "Collatz Conjecture"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which dynasty built many of the major temples at Khajuraho?",
        options: ["Chola", "Chandela", "Pallava", "Gupta"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which programming concept allows a function to call itself?",
        options: ["Inheritance", "Recursion", "Polymorphism", "Encapsulation"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "What is the oxidation state of sulfur in H₂SO₄?",
        options: ["+2", "+4", "+6", "-2"],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which law states that entropy of an isolated system never decreases?",
        options: ["Zeroth law", "First law", "Second law", "Third law"],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which star is the brightest star in the night sky as seen from Earth?",
        options: ["Canopus", "Sirius", "Vega", "Betelgeuse"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which country was the first to grant women the right to vote nationally?",
        options: ["United Kingdom", "New Zealand", "United States", "Australia"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "What is the determinant of an identity matrix?",
        options: ["0", "1", "The dimension", "It depends on the dimension"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
        options: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Superior vena cava"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which enzyme unwinds the DNA double helix during replication?",
        options: ["DNA polymerase", "Ligase", "Helicase", "Primase"],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which philosopher wrote The Republic?",
        options: ["Aristotle", "Plato", "Socrates", "Epicurus"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which phenomenon causes distant galaxies to appear shifted toward longer wavelengths?",
        options: ["Gravitational lensing", "Cosmological redshift", "Doppler cooling", "Aberration"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which country contains the geographic region of Transylvania?",
        options: ["Romania", "Bulgaria", "Hungary", "Serbia"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which theorem connects a differentiable function's derivative to its average rate of change over an interval?",
        options: ["Rolle's theorem", "Mean Value Theorem", "Bayes' theorem", "Binomial theorem"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which gas law states that pressure is inversely proportional to volume at constant temperature?",
        options: ["Charles's law", "Boyle's law", "Avogadro's law", "Dalton's law"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which ancient Indian text is associated with rules for arithmetic involving zero and negative numbers?",
        options: ["Brahmasphutasiddhanta", "Arthashastra", "Natya Shastra", "Charaka Samhita"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which element is named after the planet Uranus?",
        options: ["Uranium", "Neptunium", "Plutonium", "Polonium"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "In graph theory, a connected graph with no cycles is called what?",
        options: ["Tree", "Clique", "DAG", "Multigraph"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which economist wrote The Wealth of Nations?",
        options: ["John Maynard Keynes", "Adam Smith", "David Ricardo", "Thomas Malthus"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which type of electromagnetic radiation has the shortest wavelength?",
        options: ["Ultraviolet", "X-rays", "Gamma rays", "Microwaves"],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which theorem states that every integer greater than 1 has a unique prime factorization?",
        options: [
            "Fundamental Theorem of Arithmetic",
            "Fermat's Last Theorem",
            "Chinese Remainder Theorem",
            "Euclid's Lemma"
        ],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which molecule carries genetic information from DNA to ribosomes for protein synthesis?",
        options: ["tRNA", "mRNA", "rRNA", "ATP"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which Roman emperor is traditionally associated with the Edict of Milan in 313 CE?",
        options: ["Augustus", "Constantine I", "Nero", "Trajan"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which planet has the highest average surface temperature in the Solar System?",
        options: ["Mercury", "Venus", "Mars", "Earth"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which sequence begins 0, 1, 1, 2, 3, 5, 8...?",
        options: ["Lucas sequence", "Fibonacci sequence", "Harmonic sequence", "Catalan sequence"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which Indian classical music system is traditionally associated with North India?",
        options: ["Carnatic", "Hindustani", "Dhrupad only", "Odissi"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which enzyme converts RNA information into a DNA copy in retroviruses?",
        options: ["DNA ligase", "Reverse transcriptase", "RNA polymerase", "Helicase"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "What is the approximate value of the golden ratio?",
        options: ["1.414", "1.618", "2.236", "2.718"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which amendment lowered India's voting age from 21 to 18?",
        options: ["42nd", "44th", "61st", "73rd"],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which logical connective is true only when both inputs are true?",
        options: ["OR", "XOR", "AND", "NOR"],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which physicist formulated the uncertainty principle?",
        options: ["Werner Heisenberg", "Max Born", "Wolfgang Pauli", "Enrico Fermi"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which vitamin deficiency causes scurvy?",
        options: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
        answer: 2,
        difficulty: "hard"
    },
    {
        question: "Which ancient civilization used a base-60 numerical system?",
        options: ["Babylonians", "Romans", "Egyptians", "Maya"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which sorting algorithm guarantees O(n log n) worst-case time and uses divide and conquer?",
        options: ["Quick sort", "Merge sort", "Bubble sort", "Selection sort"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which theorem describes how conditional probabilities can be used to update beliefs from evidence?",
        options: ["Bayes' theorem", "Pythagorean theorem", "Green's theorem", "Noether's theorem"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which fundamental particle is the force carrier of the strong nuclear interaction?",
        options: ["Photon", "Gluon", "Electron", "Muon"],
        answer: 1,
        difficulty: "hard"
    },
    {
        question: "Which country borders both the Caspian Sea and the Persian Gulf?",
        options: ["Iran", "Iraq", "Azerbaijan", "Turkmenistan"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which theorem states that a continuous function taking values of opposite signs at two points must have a zero between them?",
        options: ["Intermediate Value Theorem", "Extreme Value Theorem", "Mean Value Theorem", "Fermat's theorem"],
        answer: 0,
        difficulty: "hard"
    },
    {
        question: "Which SI base unit measures luminous intensity?",
        options: ["Lux", "Lumen", "Candela", "Watt"],
        answer: 2,
        difficulty: "hard"
    },

    // Additional questions
    {
        question: "Which Indian river is known as the 'Sorrow of Bihar' because of its flooding?",
        options: ["Kosi", "Son", "Narmada", "Tapti"],
        answer: 0,
        difficulty: "medium"
    },
    {
        question: "Which layer of the atmosphere contains most of Earth's weather?",
        options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
        answer: 1,
        difficulty: "easy"
    },
    {
        question: "Which number is the only even prime number?",
        options: ["0", "1", "2", "4"],
        answer: 2,
        difficulty: "easy"
    }

];