document.addEventListener('contextmenu', (e) => e.preventDefault());
     document.addEventListener('keydown', (e) => {
       if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')|| (e.ctrlKey && e.key==='U')) {
         e.preventDefault();
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    });

    const medicineData = {
        Paracetamol: {
            name: 'Paracetamol',
            tamilName: 'பாராசிடமால்',
            image: 'https://images.unsplash.com/photo-1587854692152-01b2a8b0e8f4?auto=format&fit=crop&w=900&q=80',
            use: 'Fever, headache, mild body pain',
            tamilUse: 'காய்ச்சல், தலைவலி, லேசான உடல் வலி',
            dosage: '500mg every 6-8 hours as directed',
            warning: 'Do not exceed daily limit. Avoid alcohol.',
            tamilWarning: 'ஒருநாள் அளவை மீறாதீர்கள். மதுபானம் தவிர்க்கவும்.',
            alternative: ['Crocin', 'Dolo 650', 'Calpol'],
            nearby: ['Pharma Hub', 'City Medicals', '24x7 Pharmacy']
        },
        Crocin: {
            name: 'Crocin',
            tamilName: 'க்ரோசின்',
            image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=900&q=80',
            use: 'Fever and pain relief',
            tamilUse: 'காய்ச்சல் மற்றும் வலி நிவாரணம்',
            dosage: 'As prescribed by the doctor',
            warning: 'Keep away from children. Check label before use.',
            tamilWarning: 'குழந்தைகளிடமிருந்து விலக்கி வையுங்கள். பயன்படுத்தும் முன் லேபலை சரிபார்க்கவும்.',
            alternative: ['Paracetamol', 'Dolo 650', 'Calpol'],
            nearby: ['Green Pharmacy', 'WellCare Medicals', 'Apollo Pharmacy']
        },
        Dolo: {
            name: 'Dolo 650',
            tamilName: 'டோலோ 650',
            image: 'https://images.unsplash.com/photo-1580281657527-47f249e8f2d1?auto=format&fit=crop&w=900&q=80',
            use: 'High fever and pain relief',
            tamilUse: 'அதிக காய்ச்சல் மற்றும் வலி நிவாரணம்',
            dosage: '650mg only if prescribed',
            warning: 'Do not take with other paracetamol products.',
            tamilWarning: 'மற்ற பாராசிடமால் மருந்துகளுடன் சேர்த்து எடுத்துக்கொள்ளாதீர்கள்.',
            alternative: ['Paracetamol', 'Crocin', 'Calpol'],
            nearby: ['MedPlus', 'Sri Krishna Medicals', 'Care Pharmacy']
        },
        Amoxicillin: {
            name: 'Amoxicillin',
            tamilName: 'அமோக்ஸிசில்லின்',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
            use: 'Bacterial infections',
            tamilUse: 'பாக்டீரியா தொற்றுகள்',
            dosage: 'Use only on medical advice',
            warning: 'Finish the full course. Not for viral infections.',
            tamilWarning: 'மருத்துவர் ஆலோசனையுடன் மட்டுமே. முழு கோர்ஸையும் முடிக்கவும்.',
            alternative: ['Augmentin', 'Azithromycin', 'Cefixime'],
            nearby: ['Rani Medicals', 'Health First Pharmacy', 'Town Drug House']
        },
        Azithromycin: {
            name: 'Azithromycin',
            tamilName: 'அசித்ரோமைசின்',
            image: 'https://images.unsplash.com/photo-1631549916768-4119b26f2c5f?auto=format&fit=crop&w=900&q=80',
            use: 'Respiratory and bacterial infections',
            tamilUse: 'சுவாச மற்றும் பாக்டீரியா தொற்றுகள்',
            dosage: 'Take after food if recommended',
            warning: 'Only use when prescribed by a doctor.',
            tamilWarning: 'மருத்துவர் பரிந்துரைத்தால் மட்டுமே பயன்படுத்தவும்.',
            alternative: ['Amoxicillin', 'Cefixime', 'Doxycycline'],
            nearby: ['Apollo Pharmacy', 'Med Point', 'City Care Medicals']
        },
        Cetirizine: {
            name: 'Cetirizine',
            tamilName: 'செட்டிரிசின்',
            image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=900&q=80',
            use: 'Allergy, sneezing, runny nose',
            tamilUse: 'ஆலர்ஜி, தும்மல், மூக்கு ஓட்டம்',
            dosage: 'Usually taken once daily',
            warning: 'May cause drowsiness. Avoid alcohol.',
            tamilWarning: 'தூக்கத்தன்மை ஏற்படலாம். மதுபானம் தவிர்க்கவும்.',
            alternative: ['Loratadine', 'Levocetirizine', 'Fexofenadine'],
            nearby: ['24x7 Pharmacy', 'WellCare Medicals', 'Green Pharmacy']
        }
    };

    const medicineKeywords = Object.keys(medicineData);
    const popularSearches = ['Paracetamol', 'Amoxicillin', 'Crocin', 'Dolo 650', 'Azithromycin'];
    let isTamil = true;
    let activeMedicine = null;

    const languageCopy = {
        ta: {
            title: 'மருந்து தேடல் / Medicine Search',
            subtitle: 'உங்கள் தேவைக்குச் சிறந்த மருந்துகளை கண்டுபிடியுங்கள்',
            description: 'Find medicines quickly and get the best results',
            medicineLabel: 'மருந்தின் பெயரை உள்ளிடவும்',
            medicinePlaceholder: 'Enter medicine name (e.g., Crocin, Paracetamol)',
            locationLabel: 'உங்கள் இருப்பிடத்தில் உள்ளிடவும் (விரும்பினால்)',
            locationPlaceholder: 'Enter your location (optional)',
            searchButton: 'தேடுக / Search Medicines',
            popularTitle: 'பிரபலமான தேடல்கள் / Popular Searches',
            featuresTitle: 'மேலும் அம்சங்கள் / More Features',
            altTitle: 'மாற்று மருந்துகள்',
            altSubtitle: 'Alternative Medicines',
            altHint: 'View alternative medicines',
            infoTitle: 'மருந்து விவரம்',
            infoSubtitle: 'Medicine Information',
            infoHint: 'Complete medicine details',
            reminderTitle: 'மருந்து நினைவூட்டல்',
            reminderSubtitle: 'Medicine Reminder',
            reminderHint: 'Set medicine reminders',
            storeTitle: 'அருகிலுள்ள கடைகள்',
            storeSubtitle: 'Nearby Stores',
            storeHint: 'Find nearby medical stores',
            safetyTitle: 'உங்கள் உடல்நலம் எங்கள் முன்னுரிமை',
            safetyLead: 'Your health is our priority',
            safetyBody: 'நம்பமான தகவல், சிறந்த சேவை | Trusted information, better care',
            trustOne: 'உங்கள் தேடல்கள் பாதுகாப்பாக இருக்கும்',
            trustTwo: 'சரியான மற்றும் நம்பகமான தகவல்',
            trustThree: 'Your health, our service',
            resultsTitle: 'தேடல் முடிவுகள் / Search Results',
            resultsHint: 'Search a medicine to see details, warnings, and safe-use guidance.',
            emptyText: 'Type a medicine name or tap one of the popular searches.',
            langBtn: 'தமிழ் / English'
        },
        en: {
            title: 'Medicine Search',
            subtitle: 'Find the right medicine for your needs',
            description: 'Search quickly and get the best matching results',
            medicineLabel: 'Enter medicine name',
            medicinePlaceholder: 'Enter medicine name (e.g., Crocin, Paracetamol)',
            locationLabel: 'Enter your location (optional)',
            locationPlaceholder: 'Enter your location (optional)',
            searchButton: 'Search Medicines',
            popularTitle: 'Popular Searches',
            featuresTitle: 'More Features',
            altTitle: 'Alternative Medicines',
            altSubtitle: 'Alternative Medicines',
            altHint: 'View alternative medicines',
            infoTitle: 'Medicine Information',
            infoSubtitle: 'Medicine Information',
            infoHint: 'Complete medicine details',
            reminderTitle: 'Medicine Reminder',
            reminderSubtitle: 'Medicine Reminder',
            reminderHint: 'Set medicine reminders',
            storeTitle: 'Nearby Stores',
            storeSubtitle: 'Nearby Stores',
            storeHint: 'Find nearby medical stores',
            safetyTitle: 'Your health is our priority',
            safetyLead: 'Trusted information, better care',
            safetyBody: 'Trusted information, better care',
            trustOne: 'Your searches are safe and secure',
            trustTwo: 'Accurate & reliable information',
            trustThree: 'Your health, our service',
            resultsTitle: 'Search Results',
            resultsHint: 'Search a medicine to see details, warnings, and safe-use guidance.',
            emptyText: 'Type a medicine name or tap one of the popular searches.',
            langBtn: 'English / தமிழ்'
        }
    };

    function applyLanguage() {
        const copy = isTamil ? languageCopy.ta : languageCopy.en;
        document.getElementById('title').textContent = copy.title;
        document.getElementById('heroSubtitle').textContent = copy.subtitle;
        document.getElementById('heroDescription').textContent = copy.description;
        document.getElementById('medicineLabel').textContent = copy.medicineLabel;
        document.getElementById('searchInput').placeholder = copy.medicinePlaceholder;
        document.getElementById('locationLabel').textContent = copy.locationLabel;
        document.getElementById('locationInput').placeholder = copy.locationPlaceholder;
        document.getElementById('searchBtnLabel').textContent = copy.searchButton;
        document.getElementById('popularTitle').textContent = copy.popularTitle;
        document.getElementById('featuresTitle').textContent = copy.featuresTitle;
        document.getElementById('altTitle').textContent = copy.altTitle;
        document.getElementById('altSubtitle').textContent = copy.altSubtitle;
        document.getElementById('altHint').textContent = copy.altHint;
        document.getElementById('infoTitle').textContent = copy.infoTitle;
        document.getElementById('infoSubtitle').textContent = copy.infoSubtitle;
        document.getElementById('infoHint').textContent = copy.infoHint;
        document.getElementById('reminderTitle').textContent = copy.reminderTitle;
        document.getElementById('reminderSubtitle').textContent = copy.reminderSubtitle;
        document.getElementById('reminderHint').textContent = copy.reminderHint;
        document.getElementById('storeTitle').textContent = copy.storeTitle;
        document.getElementById('storeSubtitle').textContent = copy.storeSubtitle;
        document.getElementById('storeHint').textContent = copy.storeHint;
        document.getElementById('safetyTitle').textContent = copy.safetyTitle;
        document.getElementById('safetyLead').textContent = copy.safetyLead;
        document.getElementById('safetyBody').textContent = copy.safetyBody;
        document.getElementById('trustOne').textContent = copy.trustOne;
        document.getElementById('trustTwo').textContent = copy.trustTwo;
        document.getElementById('trustThree').textContent = copy.trustThree;
        document.getElementById('resultsTitle').textContent = copy.resultsTitle;
        document.getElementById('resultsHint').textContent = copy.resultsHint;
        document.getElementById('emptyText').textContent = copy.emptyText;
        document.getElementById('langBtnLabel').textContent = copy.langBtn;
    }

    function initPopularSearches() {
        const row = document.getElementById('popularSearches');
        row.innerHTML = '';
        popularSearches.forEach((name) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'chip';
            button.textContent = name;
            button.addEventListener('click', () => usePopularSearch(name));
            row.appendChild(button);
        });
    }

    function clearSearchInput() {
        document.getElementById('searchInput').value = '';
        document.getElementById('suggestions').innerHTML = '';
        document.getElementById('suggestions').style.display = 'none';
        document.getElementById('searchInput').focus();
    }

    function normalize(value) {
        return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    }

    function findMedicine(query) {
        const normalizedQuery = normalize(query);
        if (!normalizedQuery) return null;

        return medicineKeywords.find((key) => {
            const item = medicineData[key];
            return normalize(key).includes(normalizedQuery) || normalize(item.tamilName || '').includes(normalizedQuery) || normalize(item.use).includes(normalizedQuery) || normalize(item.tamilUse || '').includes(normalizedQuery);
        }) || null;
    }

    function showSuggestions() {
        const searchInput = document.getElementById('searchInput').value.trim();
        const suggestionsDiv = document.getElementById('suggestions');
        suggestionsDiv.innerHTML = '';

        if (searchInput.length < 1) {
            suggestionsDiv.style.display = 'none';
            return;
        }

        const matches = medicineKeywords.filter((name) => normalize(name).includes(normalize(searchInput))).slice(0, 8);

        if (matches.length === 0) {
            suggestionsDiv.style.display = 'none';
            return;
        }

        matches.forEach((name) => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `<strong>${name}</strong><div>${medicineData[name].tamilName}</div>`;
            item.onclick = () => {
                document.getElementById('searchInput').value = name;
                suggestionsDiv.style.display = 'none';
            };
            suggestionsDiv.appendChild(item);
        });

        suggestionsDiv.style.display = 'block';
    }

    function renderResultCard(medicineKey) {
        const medicine = medicineData[medicineKey];
        activeMedicine = medicineKey;
        const location = document.getElementById('locationInput').value.trim();
        const outputDiv = document.getElementById('output');
        const storeList = (medicine.nearby || []).map((store) => `<li>${store}${location ? ` - ${location}` : ''}</li>`).join('');

        outputDiv.className = 'output';
        outputDiv.innerHTML = `
            <article class="medicine-result">
                <img src="${medicine.image}" alt="${medicine.name}">
                <div>
                    <div class="result-tag"><i class="fa-solid fa-pills"></i> ${medicine.name} | ${medicine.tamilName}</div>
                    <h3>${medicine.name}</h3>
                    <p>${medicine.use} | ${medicine.tamilUse}</p>
                    <div class="result-meta">
                        <div class="secondary-card">
                            <h4>${isTamil ? 'பயன்பாடு' : 'Use'}</h4>
                            <p>${isTamil ? medicine.tamilUse : medicine.use}</p>
                        </div>
                        <div class="secondary-card">
                            <h4>${isTamil ? 'அளவு' : 'Dosage'}</h4>
                            <p>${medicine.dosage}</p>
                        </div>
                        <div class="secondary-grid">
                            <div class="secondary-card">
                                <h4>${isTamil ? 'எச்சரிக்கை' : 'Warning'}</h4>
                                <p>${isTamil ? medicine.tamilWarning : medicine.warning}</p>
                            </div>
                            <div class="secondary-card">
                                <h4>${isTamil ? 'கிடைக்கக்கூடிய அருகிலுள்ள கடைகள்' : 'Nearby Stores'}</h4>
                                <ul class="result-list">${storeList}</ul>
                            </div>
                        </div>
                        <div class="secondary-card">
                            <h4>${isTamil ? 'மாற்று மருந்துகள்' : 'Alternative Medicines'}</h4>
                            <p>${medicine.alternative.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    function searchMedicine() {
        const outputDiv = document.getElementById('output');
        const searchInput = document.getElementById('searchInput').value.trim();
        const locationInput = document.getElementById('locationInput').value.trim();
        const suggestionsDiv = document.getElementById('suggestions');

        document.getElementById('loadingSpinner').classList.add('active');
        suggestionsDiv.style.display = 'none';

        setTimeout(() => {
            const medicineKey = findMedicine(searchInput);
            document.getElementById('loadingSpinner').classList.remove('active');

            if (!medicineKey) {
                outputDiv.className = 'output empty-state';
                outputDiv.innerHTML = `
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <p>${isTamil ? 'மருந்து கிடைக்கவில்லை. வேறு பெயர் முயற்சிக்கவும்.' : 'Medicine not found. Please try another name.'}</p>
                    ${locationInput ? `<small>${isTamil ? 'இருப்பிடம்' : 'Location'}: ${locationInput}</small>` : ''}
                `;
                return;
            }

            renderResultCard(medicineKey);
        }, 650);
    }

    function usePopularSearch(name) {
        document.getElementById('searchInput').value = name;
        searchMedicine();
    }

    function showMedicineInfo() {
        const medicineKey = activeMedicine || findMedicine(document.getElementById('searchInput').value.trim()) || 'Paracetamol';
        const medicine = medicineData[medicineKey];
        document.getElementById('output').className = 'output';
        document.getElementById('output').innerHTML = `
            <article class="medicine-result">
                <img src="${medicine.image}" alt="${medicine.name}">
                <div>
                    <div class="result-tag"><i class="fa-solid fa-circle-info"></i> ${medicine.name}</div>
                    <h3>${isTamil ? 'மருந்து தகவல்' : 'Medicine Information'}</h3>
                    <div class="result-meta">
                        <div class="secondary-card"><h4>${isTamil ? 'எப்படி பயன்படுத்துவது' : 'How to use'}</h4><p>${medicine.dosage}</p></div>
                        <div class="secondary-card"><h4>${isTamil ? 'நன்மை' : 'Benefit'}</h4><p>${isTamil ? medicine.tamilUse : medicine.use}</p></div>
                        <div class="secondary-card"><h4>${isTamil ? 'கவனம்' : 'Caution'}</h4><p>${isTamil ? medicine.tamilWarning : medicine.warning}</p></div>
                    </div>
                </div>
            </article>
        `;
    }

    function showAlternativeMedicines() {
        const medicineKey = activeMedicine || findMedicine(document.getElementById('searchInput').value.trim()) || 'Paracetamol';
        const medicine = medicineData[medicineKey];
        document.getElementById('output').className = 'output';
        document.getElementById('output').innerHTML = `
            <article class="medicine-result">
                <img src="${medicine.image}" alt="${medicine.name}">
                <div>
                    <div class="result-tag"><i class="fa-solid fa-prescription-bottle-medical"></i> ${isTamil ? 'மாற்று மருந்துகள்' : 'Alternative Medicines'}</div>
                    <h3>${medicine.name}</h3>
                    <div class="result-meta">
                        <div class="secondary-card">
                            <h4>${isTamil ? 'மாற்றுப் பட்டியல்' : 'Alternative list'}</h4>
                            <p>${medicine.alternative.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    function setMedicineReminder() {
        const medicineName = document.getElementById('searchInput').value.trim() || (activeMedicine || 'Paracetamol');
        const reminderMessage = isTamil
            ? `${medicineName} மருந்துக்கான நினைவூட்டல் உருவாக்கப்பட்டது. 6 மணி நேரத்தில் மீண்டும் பார்க்கவும்.`
            : `Reminder created for ${medicineName}. Check again in 6 hours.`;
        alert(reminderMessage);
    }

    function showNearbyStores() {
        const medicineKey = activeMedicine || findMedicine(document.getElementById('searchInput').value.trim()) || 'Paracetamol';
        const medicine = medicineData[medicineKey];
        const location = document.getElementById('locationInput').value.trim();
        const stores = (medicine.nearby || []).map((store) => `<li>${store}${location ? ` - ${location}` : ''}</li>`).join('');

        document.getElementById('output').className = 'output';
        document.getElementById('output').innerHTML = `
            <article class="medicine-result">
                <img src="${medicine.image}" alt="${medicine.name}">
                <div>
                    <div class="result-tag"><i class="fa-solid fa-store"></i> ${isTamil ? 'அருகிலுள்ள கடைகள்' : 'Nearby Stores'}</div>
                    <h3>${medicine.name}</h3>
                    <div class="secondary-card">
                        <h4>${isTamil ? 'கடை பட்டியல்' : 'Store list'}</h4>
                        <ul class="result-list">${stores}</ul>
                    </div>
                </div>
            </article>
        `;
    }

    function useCurrentLocation() {
        if (!navigator.geolocation) {
            alert(isTamil ? 'உங்கள் உலாவியில் location ஆதரவு இல்லை.' : 'Location is not supported in your browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            () => {
                document.getElementById('locationInput').value = isTamil ? 'Current Location' : 'Current Location';
            },
            () => {
                alert(isTamil ? 'Location பெற முடியவில்லை. கைமுறையாக உள்ளிடவும்.' : 'Unable to get location. Please type it manually.');
            },
            { timeout: 7000 }
        );
    }

    function toggleLanguage() {
        isTamil = !isTamil;
        applyLanguage();
        if (document.getElementById('searchInput').value.trim()) {
            const medicineKey = findMedicine(document.getElementById('searchInput').value.trim());
            if (medicineKey) {
                renderResultCard(medicineKey);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        initPopularSearches();
        applyLanguage();
        document.getElementById('searchInput').focus();
    });
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/19/Tetrahydrozoline_-_molecular_structure.svg",
            "advantages": "Reduces redness and irritation in the eyes | கண்களின் சிவப்பினை மற்றும் எரிச்சலை குறைக்கிறது",
            "disadvantages": "May cause rebound redness if overused | அதிகமாக பயன்படுத்தினால் மீண்டும் சிவப்பு ஏற்படும்",
            "prevention": "Use only for short periods | குறுகிய காலத்திற்கு மட்டுமே பயன்படுத்தவும்",
            "warning": "Avoid in individuals with glaucoma or eye conditions | குளோக்கோமா அல்லது கண் பிரச்சனைகள் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Antihistamine Eye Drops | ஆல்‌ர்ஜி கண் டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Antihistamine_eye_drop_bottle.jpg",
            "advantages": "Relieves itching, redness, and watery eyes due to allergies | ஆல்‌ர்ஜி காரணமாக கண்களின் எரிச்சல், சிவப்பு மற்றும் நீர் ஓட்டத்தை குறைக்கிறது",
            "disadvantages": "Can cause dry eyes or mild irritation | உலர்ந்த கண்கள் அல்லது மென்மையான எரிச்சலை ஏற்படுத்தலாம்",
            "prevention": "Use as directed and avoid overuse | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும், அதிகமாக பயன்படுத்தாதீர்கள்",
            "warning": "Avoid in children under 2 years | 2 வயதுக்கு குறைந்த குழந்தைகளுக்கு தவிர்க்கவும்"
        },
        "Ear Drops (for Earwax Removal) | காதுக்கான டிராப்ஸ் (காதுக்கு முடுக்கு நீக்குதல்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/da/Ear_wax_removal_drop_bottle.jpg",
            "advantages": "Helps soften earwax for easy removal | காதுக்கான முடுக்கை மென்மையாக செய்ய உதவுகிறது, எளிதில் நீக்கமாகிறது",
            "disadvantages": "Excessive use may irritate the ear canal | அதிகமாக பயன்படுத்துவதால் காதின் குழாயை எரிச்சலுறுத்தலாம்",
            "prevention": "Use as needed, avoid overuse | தேவையானபோது பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Avoid use if you have a perforated eardrum or ear infection | காதின் திருப்பு அல்லது காதில் தொற்று இருந்தால் பயன்படுத்த வேண்டாம்"
        },
        "Decongestant Nasal Drops (for blocked nose) | மூக்கு முடுக்கு திறக்கும் டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Phenylephrine_chemical_structure.svg",
            "advantages": "Relieves nasal congestion and promotes easier breathing | மூக்கு முடுக்கை திறந்து, எளிதில் மூச்சு விட உதவுகிறது",
            "disadvantages": "May cause nasal irritation, dryness, or rebound congestion | மூக்கில் எரிச்சல், உலர்த்தல், அல்லது மீண்டும் முடுக்கு ஏற்படலாம்",
            "prevention": "Use only for short periods (3 days max) | குறுகிய காலத்திற்கு மட்டுமே பயன்படுத்தவும் (3 நாட்கள் அதிகமாக அல்ல)",
            "warning": "Avoid in individuals with high blood pressure, heart disease, or thyroid problems | உயர் ரத்த அழுத்தம், இதய நோய் அல்லது தைராய்டு பிரச்சனைகள் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Otic Analgesic Ear Drops | காதின் வலி நிவாரண டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Otic_analgesic_drops.jpg",
            "advantages": "Provides temporary relief from ear pain and inflammation | காது வலி மற்றும் வீக்கத்திலிருந்து தற்காலிக நிவாரணம் அளிக்கிறது",
            "disadvantages": "May cause ear irritation or allergic reaction | காதில் எரிச்சல் அல்லது அலர்ஜி எதிரொலிகள் ஏற்படும்",
            "prevention": "Use as directed, do not overuse | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Avoid in individuals with ear infections or damaged eardrum | காதில் தொற்றுகள் அல்லது காயம் ஏற்பட்ட காதுகளுக்கு பயன்படுத்தக்கூடாது"
        },
        "Lubricating Eye Drops | திரேப்பாக்கும் கண் டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Lubricating_eyes_drops.jpg",
            "advantages": "Helps with dry eyes, irritation, and enhances comfort | உலர்ந்த கண்கள், எரிச்சல் மற்றும் வசதியை மேம்படுத்த உதவுகிறது",
            "disadvantages": "Can cause blurred vision temporarily | தற்காலிகமாக கண்ணோட்டம் மங்கல் ஏற்படும்",
            "prevention": "Use as needed, avoid contact with hands or unclean surfaces | தேவையானபோது பயன்படுத்தவும், கைகள் அல்லது மாசு செய்யப்பட்ட மேற்பரப்புகள் தவிர்க்கவும்",
            "warning": "Avoid if you have an eye infection or open wounds | கண் தொற்றுகள் அல்லது திறந்த 상த்திரப்புகளுக்கு பயன்படுத்த வேண்டாம்"
        },
        "Antibiotic Ear Drops | ஒவ்வாமை எதிர்ப்பு காது டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/98/Ear_infection_antibiotic_ear_drops.jpg",
            "advantages": "Treats ear infections and reduces bacterial growth | காது தொற்றுகளுக்கு சிகிச்சை அளித்து, பாலூட்டித் தொற்றுக்களை குறைக்கிறது",
            "disadvantages": "May cause allergic reaction or irritation | அலர்ஜி எதிரொலிகள் அல்லது எரிச்சலை ஏற்படுத்தலாம்",
            "prevention": "Follow dosage instructions and avoid contamination | அளவு வழிமுறைகளை பின்பற்றவும், மாசுபாட்டை தவிர்க்கவும்",
            "warning": "Do not use if the eardrum is ruptured | காதின் திருப்பு கெட்டுவிட்டால் பயன்படுத்தக்கூடாது"
        }
        
        ,
        
        "Band-Aids | பாண்டு": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Plaster-Bandage.jpg",
            "advantages": "Helps cover small cuts, abrasions, and blisters, promotes healing | சிறிய கதிர்கள், சேதங்கள் மற்றும் கட்டிகளைக் காப்பாற்றி, குணப்படுத்த உதவுகிறது",
            "disadvantages": "May cause skin irritation or allergic reactions | தோல் எரிச்சல் அல்லது அலர்ஜி எதிரொலிகள் ஏற்படலாம்",
            "prevention": "Clean the wound before applying, change regularly | பறவை மறைக்கப்படாமலான வியாதிகளுக்கு சரியான பராமரிப்புடன் மாற்றவும்",
            "warning": "Do not use on deep or infected wounds | ஆழமான அல்லது தொற்றுபட்ட 상처களில் பயன்படுத்தக்கூடாது"
        },
        "Antiseptic Creams | அண்டிசெப்டிக் கிரீம்கள்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Antiseptic_cream.jpg",
            "advantages": "Helps prevent infection in minor cuts and abrasions | சிறிய கதிர்கள் மற்றும் சேதங்களில் தொற்றைத் தவிர்க்க உதவுகிறது",
            "disadvantages": "Can cause skin irritation or allergic reactions | தோல் எரிச்சல் அல்லது அலர்ஜி எதிரொலிகள் ஏற்படலாம்",
            "prevention": "Apply a thin layer, avoid overuse | ஒரு சில அடுக்குகளுடன், அதிகபட்சம் பயன்பாட்டை தவிர்க்கவும்",
            "warning": "Do not use on large open wounds or deep cuts | பெரிதான திறந்த 상துக்கள் அல்லது ஆழமான குத்துகளில் பயன்படுத்த வேண்டாம்"
        },
        "Hydrocortisone Cream | ஹைட்ரோகார்டிசோன் கிரீம்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Hydrocortisone_chemical_structure.svg",
            "advantages": "Reduces inflammation, itching, and swelling from minor skin irritation | சிறிய தோல் எரிச்சல், காய்ச்சல் மற்றும் வீக்கத்தை குறைக்கிறது",
            "disadvantages": "Excessive use may cause thinning of skin | அதிகமாக பயன்படுத்தும் போது தோல் மெல்லியதாக அமைகின்றது",
            "prevention": "Use sparingly, apply to affected areas only | பரிந்துரைக்கப்பட்ட அளவில் மட்டுமே பயன்படுத்தவும்",
            "warning": "Avoid long-term use on large areas of skin | பெரிய பரப்புகளில் நீண்டகாலம் பயன்படுத்த வேண்டாம்"
        },
        "Antiseptic Wipes | அண்டிசெப்டிக் வைப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Antiseptic_wipes.jpg",
            "advantages": "Convenient for cleaning wounds, cuts, and hands | 상துக்கள், கதிர்கள் மற்றும் கைகளை சுத்தப்படுத்துவதற்கு எளிமையானது",
            "disadvantages": "May cause dryness or irritation if overused | அதிகமாக பயன்படுத்தினால் உலர்வு அல்லது எரிச்சல் ஏற்படும்",
            "prevention": "Use as directed, avoid excessive use | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Not for use on deep wounds or burns | ஆழமான 상துக்கள் அல்லது எரிச்சல்களில் பயன்படுத்தக் கூடாது"
        },
        "Burn Gel | எரிச்சல் ஜெல்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Burn_gel.jpg",
            "advantages": "Provides soothing relief from minor burns and sunburns | சிறிய எரிகை மற்றும் பருளிய எரிவுகளிலிருந்து நிவாரணத்தை தருகிறது",
            "disadvantages": "May cause skin irritation or allergic reaction | தோல் எரிச்சல் அல்லது அலர்ஜி எதிரொலிகள் ஏற்படலாம்",
            "prevention": "Apply to clean skin and avoid using on large burns | தூய்மையான தோலுக்கு பயன்படுத்தவும், பெரிய எரியினை தவிர்க்கவும்",
            "warning": "Do not use on open or severe burns | திறந்த அல்லது கடுமையான எரிகைகளில் பயன்படுத்தக்கூடாது"
        },
        "Gauze Pads | கௌஸ் பேட்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Gauze_pads.jpg",
            "advantages": "Used to cover and absorb blood from cuts, wounds, or injuries | கதிர்கள், 상துக்கள் அல்லது காயங்களிலிருந்து இரத்தத்தை மூடுவதற்கும் உறிஞ்சுவதற்கும் பயன்படுகிறது",
            "disadvantages": "Can stick to the wound if not used with appropriate ointment | சரியான மருந்து சேர்க்கப்படாவிட்டால் 상துக்களில் சிக்கலாம்",
            "prevention": "Apply with antiseptic or ointment to prevent sticking | அண்டிசெப்டிக் அல்லது கிரீமுடன் சேர்க்கவும்",
            "warning": "Change regularly to avoid infection or sticking | தொற்றுகள் அல்லது சிக்கல் தடுக்கும் வழியில் மாறுதல் செய்யவும்"
        },
        "Thermometer | வெப்பநிலை அளவிலி": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/Rectal_thermometer.png",
            "advantages": "Helps measure body temperature to detect fever | உடல் வெப்பத்தை அளக்க உதவுகிறது, காய்ச்சலை கண்டறிய உதவுகிறது",
            "disadvantages": "May provide inaccurate readings if not used properly | சரியான முறையில் பயன்படுத்தாவிட்டால் தவறான மதிப்பீடு வழங்கும்",
            "prevention": "Ensure proper use, follow manufacturer guidelines | சரியான முறையில் பயன்படுத்தவும், உற்பத்தியாளர் வழிமுறைகளை பின்பற்றவும்",
            "warning": "Do not use broken thermometers or mercury-based models | முறியடிக்கப்பட்ட வெப்பநிலை அளவிலிகள் அல்லது மர்கூரி அடிப்படையிலான மாடல்களை பயன்படுத்த வேண்டாம்"
        },
        "Cold Pack | குளிர் பேக்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/28/Cold_packs.jpg",
            "advantages": "Reduces swelling, pain, and inflammation from injuries | காயங்களிலிருந்து வீக்கம், வலி மற்றும் வீக்கத்தை குறைக்கிறது",
            "disadvantages": "May cause frostbite or skin irritation if applied for too long | அதிக நேரம் பயன்படுத்தினால் ஜலனிலி அல்லது தோல் எரிச்சலை ஏற்படுத்தலாம்",
            "prevention": "Use for 15-20 minutes at a time, avoid direct skin contact | 15-20 நிமிடங்களுக்கு மட்டும் பயன்படுத்தவும், நேரடியாக தோலுக்கு தொடர்பு வேண்டாம்",
            "warning": "Do not apply directly to bare skin for extended periods | நீண்ட நேரத்திற்கு நேரடியாக தோலுக்கு பயன்படுத்தாதீர்கள்"
        },
        "First-Aid Tape | முதல் உதவி டேப்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/First-aid_tape.jpg",
            "advantages": "Helps secure bandages and gauze in place | பாண்டுகள் மற்றும் கௌஸ் பேட்ஸ்களை உறுதிப்படுத்த உதவுகிறது",
            "disadvantages": "Can cause skin irritation if too tight | மிகக் குறுக்கமான பயன்படுத்தியால் தோல் எரிச்சல் ஏற்படலாம்",
            "prevention": "Ensure it is not wrapped too tightly around wounds | காயங்களின் சுற்றிலும் மிகக் குறுக்கமாக கட்டாதீர்கள்",
            "warning": "Avoid using on sensitive skin areas | சேதமடைந்த அல்லது குறைந்த தோல் பகுதிகளில் பயன்படுத்த தவிர்க்கவும்"
        }
        
        ,
        
        "Dimenhydrinate (Dramamine) | டைமென்பிரிடினேட் (டிராமமின்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dimenhydrinate.svg",
            "advantages": "Helps prevent and treat motion sickness, nausea, and vomiting | பயண நோய்வயப்புக்கு தடுப்பு மற்றும் களங்கம், வாந்தி மற்றும் வியர்க்கல் குணமாக்குகிறது",
            "disadvantages": "May cause drowsiness, dry mouth, or blurred vision | தூக்கம், உலர்ந்த வாயும், அல்லது மங்கலான கண்ணோட்டம் ஏற்படும்",
            "prevention": "Take 30 minutes before travel, avoid alcohol | பயணத்திற்கு 30 நிமிடங்களுக்கு முன்பு எடுத்துக்கொள்ளவும், மது தவிர்க்கவும்",
            "warning": "Avoid if you have glaucoma or difficulty urinating | குளோக்கோமா அல்லது சிறுநீரின் கஷ்டம் இருந்தால் தவிர்க்கவும்"
        },
        "Meclizine (Bonine) | மெக்லிசின் (பொனின்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meclizine.svg",
            "advantages": "Effective for preventing nausea, dizziness, and vomiting from motion sickness | பயண நோய் காரணமாக களங்கம், சுழற்சி மற்றும் வாந்தி தடுக்கும்",
            "disadvantages": "May cause dry mouth, drowsiness, and dizziness | உலர்ந்த வாயும், தூக்கம் மற்றும் சுழற்சி ஏற்படும்",
            "prevention": "Take 1 hour before travel, avoid alcohol | பயணத்திற்கு 1 மணிநேரம் முன் எடுத்துக்கொள்ளவும், மது தவிர்க்கவும்",
            "warning": "Not for children under 12 years | 12 வயதுக்குள்ள குழந்தைகளுக்கு பயன்படுத்தக்கூடாது"
        },
        "Scopolamine Patches | ஸ்கோபொலமின் படிகங்கள்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Scopolamine_chemical_structure.svg",
            "advantages": "Prevents and treats nausea, vomiting, and dizziness associated with motion sickness | பயண நோயினால் ஏற்படும் களங்கம், வாந்தி மற்றும் சுழற்சியை தடுக்கும்",
            "disadvantages": "Can cause dry mouth, blurred vision, and drowsiness | உலர்ந்த வாயும், மங்கலான கண்ணோட்டம், மற்றும் தூக்கம் ஏற்படும்",
            "prevention": "Apply patch behind ear 4 hours before travel, replace every 3 days | பயணத்திற்கு 4 மணிநேரம் முன் காது பின்னால் படிகத்தை பயன்படுத்தவும், 3 நாட்களுக்கு ஒரு முறை மாற்றவும்",
            "warning": "Avoid use if you have glaucoma or certain heart conditions | குளோக்கோமா அல்லது சில இதய பிரச்சனைகள் இருந்தால் பயன்படுத்த வேண்டாம்"
        },
        "Ginger Supplements | இஞ்சி செரிமானம்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Ginger_root.jpg",
            "advantages": "Natural remedy for preventing nausea and vomiting from motion sickness | பயண நோயில் இருந்து களங்கம் மற்றும் வாந்தியை தவிர்க்க இயற்கை மருந்து",
            "disadvantages": "May cause heartburn or digestive upset in some people | சிலருக்கு மார்பு எரிச்சல் அல்லது செரிமான இடர்பாடு ஏற்படும்",
            "prevention": "Take before or during travel as directed | பயணத்திற்கு முன்பாக அல்லது பயணத்தின் போது பரிந்துரைக்கப்பட்டபடி எடுத்துக்கொள்ளவும்",
            "warning": "Not for people with gallstones or on blood-thinning medications | புற்றுநோய்கள் உள்ளவர்கள் அல்லது இரத்தம் சிறிது தடுப்பில் இருக்கும் மருந்துகள் பயன்படுகிறவர்களுக்கு தவிர்க்கவும்"
        },
        "Anti-Diarrheal (Loperamide) | அழுக்கு விரட்டும் மருந்து (லோபெரமைடு)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Loperamide_chemical_structure.svg",
            "advantages": "Effective in controlling diarrhea and reducing the frequency of bowel movements | உடல் தொற்று மற்றும் கழிப்பறை மேலாண்மையை குறைக்கும்",
            "disadvantages": "May cause constipation, dizziness, or abdominal discomfort | மலச்சிக்கல், சுழற்சி அல்லது வயிற்றில் வலி ஏற்படும்",
            "prevention": "Use only when needed, do not overuse | தேவையான போது மட்டுமே பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Do not use if you have a fever or blood in your stools | காய்ச்சல் அல்லது கழிப்பறையில் இரத்தம் இருந்தால் பயன்படுத்த வேண்டாம்"
        },
        "Probiotics | ப்ரோபயோடிக்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Probiotic_capsules.jpg",
            "advantages": "Supports digestive health and may help prevent travel-related digestive issues | செரிமான ஆரோக்கியத்தை ஆதரிக்கும் மற்றும் பயணத்துடன் தொடர்புடைய செரிமான பிரச்சனைகளைத் தவிர்க்க உதவும்",
            "disadvantages": "May cause mild bloating or gas in some people | சிலருக்கு சிறிது குடலிலுள்ள வீக்கம் அல்லது வாயுவை ஏற்படுத்தலாம்",
            "prevention": "Take daily before and during travel to maintain gut health | செரிமான ஆரோக்கியத்தை பராமரிக்க தினசரி எடுத்துக்கொள்ளவும்",
            "warning": "Consult a doctor before use if you have a weakened immune system | சுருங்கிய எதிர்ப்பு முறையை கொண்டிருக்கும் மனிதர்கள் பயன்பாட்டிற்கு முன் மருத்துவரிடம் ஆலோசனை பெற வேண்டும்"
        },
        "Electrolyte Replenishment (Oral Rehydration Salts) | எலக்ட்ரோலைட் மீளச்செலுத்துதல் (முகமாக நீர்ம பராமரிப்பு உப்பு)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Oral_rehydration_salts.jpg",
            "advantages": "Helps restore electrolytes and fluids lost due to diarrhea, vomiting, or dehydration | உடல் தொற்று, வாந்தி அல்லது நீரிழிவு காரணமாக இழக்கப்பட்ட எலக்ட்ரோலைட்டுகளையும் திரவங்களையும் மீட்டெடுக்க உதவுகிறது",
            "disadvantages": "Excessive use may lead to an electrolyte imbalance | அதிக பயன்படுத்தினால் எலக்ட்ரோலைட் சமன்வயப்புக்கு காரணமாக அமைகிறது",
            "prevention": "Use as directed and hydrate regularly | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும் மற்றும் நேரடியாக நீர்மம் தரவும்",
            "warning": "Not for use if you have kidney problems or heart disease | சிறுநீரகம் பிரச்சனைகள் அல்லது இதய நோய் இருந்தால் தவிர்க்கவும்"
        }
    };        

    let isTamil = true;

    function showSuggestions() {
        let searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
        let suggestionsDiv = document.getElementById("suggestions");
        suggestionsDiv.innerHTML = "";

        if (searchInput.length < 1) {
            suggestionsDiv.style.display = "none";
            return;
        }

        let matches = Object.keys(medicineData).filter(med => med.toLowerCase().includes(searchInput));

        if (matches.length === 0) {
            suggestionsDiv.style.display = "none";
            return;
        }

        matches.forEach(med => {
            let div = document.createElement("div");
            div.classList.add("suggestion-item");
            div.textContent = med;
            div.onclick = () => {
                document.getElementById("searchInput").value = med;
                suggestionsDiv.style.display = "none";
            };
            suggestionsDiv.appendChild(div);
        });

        suggestionsDiv.style.display = "block";
    }

    function searchMedicine() {
        document.getElementById("loadingSpinner").classList.add("active");
        document.getElementById("suggestions").style.display = "none";
        let searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "";

        let resultHTML = "";
        let medicineKey = Object.keys(medicineData).find(med => med.toLowerCase().includes(searchInput));

        if (medicineKey) {
            let data = medicineData[medicineKey];
            resultHTML += `<h3>${isTamil ? 'மருந்து விவரங்கள்' : 'Medicine Details'}</h3>
                <h2>${medicineData.name}</h2>    
                <img src="${data.image}" alt="Medicine Image">
                <p><strong>${isTamil ? 'peyar' : 'Name'}:</strong> ${data}</p>
                <p><strong>${isTamil ? 'நன்மைகள்' : 'Advantages'}:</strong> ${data.advantages}</p>
                <p><strong>${isTamil ? 'தவறுகள்' : 'Disadvantages'}:</strong> ${data.disadvantages}</p>
                <p><strong>${isTamil ? 'எச்சரிக்கை' : 'Warning'}:</strong> ${data.warning}</p>`;
        } else {
            resultHTML = `<p style='color:red;'>${isTamil ? 'மருந்து கிடைக்கவில்லை. வேறு முயற்சி செய்யவும்' : 'Medicine not found. Please try another.'}</p>`;
        }

        setTimeout(() => {
            document.getElementById("loadingSpinner").classList.remove("active");
            outputDiv.innerHTML = resultHTML;
        }, 1000);
    }

    function toggleLanguage() {
        isTamil = !isTamil;
        document.getElementById("title").textContent = isTamil ? 'மருந்து தேடல் / Medicine Search' : 'Medicine Search';
        document.getElementById("searchInput").placeholder = isTamil ? "மருந்தின் பெயரை உள்ளிடவும்" : "Enter medicine name";
        document.getElementById("problemInput").placeholder = isTamil ? "உங்கள் பிரச்சனை (விரும்பினால்)" : "Enter your problem (optional)";
        document.getElementById("searchBtn").textContent = isTamil ? "தேடுக" : "Search";
        document.getElementById("langBtn").textContent = isTamil ? "மொழியை மாற்றவும்" : "Change Language";
    }
