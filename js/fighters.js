/* 
   INDIA: JOURNEY TO FREEDOM - 80TH INDEPENDENCE DAY
   FREEDOM FIGHTERS DATA & INTERACTIVE LOGIC (js/fighters.js)
*/

const fightersData = [
  {
    id: "gandhi",
    name: "Mahatma Gandhi",
    years: "1869 – 1948",
    birth: "2 October 1869",
    death: "30 January 1948",
    region: "Gujarat",
    role: "National Leader & Philosopher",
    mainContribution: "Pioneered Satyagraha (non-violent resistance) and led mass movements for complete independence.",
    categories: ["Leaders", "Political Leaders", "Social Reformers"],
    shortDescription: "The Father of the Nation, who mobilized millions through Satyagraha, non-violence, and civil disobedience against British rule.",
    longDescription: "Mohandas Karamchand Gandhi was the preeminent leader of the Indian independence movement. He employed non-violent resistance to lead India to independence and inspired movements for civil rights and freedom across the world.",
    whatDidTheyDo: "He transformed the Indian National Congress into a mass organization. He launched major nationwide campaigns that shook the foundations of the British Empire, advocating for self-rule, religious harmony, the abolition of untouchability, and rural economic self-reliance.",
    contribution: "Gandhi established the philosophy of Satyagraha (holding onto truth) as a powerful political tool. By organizing millions of ordinary citizens in peaceful protests, boycotts, and marches, he demonstrated that collective non-violent resistance could overcome military and administrative might.",
    movements: ["Non-Cooperation Movement (1920)", "Salt Satyagraha / Dandi March (1930)", "Quit India Movement (1942)"],
    events: ["Champaran Satyagraha (1917)", "Kheda Satyagraha (1918)", "Gandhi-Irwin Pact (1931)", "Round Table Conferences"],
    methods: ["Satyagraha (Truth Force)", "Ahimsa (Non-violence)", "Swadeshi (Local production)", "Civil Disobedience", "Fasting & Peaceful Marches"],
    challenges: ["Imprisoned multiple times for a cumulative total of over six years. Faced immense political opposition, physical attacks, and ultimately sacrificed his life when he was assassinated in 1948."],
    legacy: "Revered worldwide as a symbol of peace and moral courage. His birth anniversary, October 2, is observed globally as the International Day of Non-Violence.",
    timeline: [
      { year: "1869", event: "Born in Porbandar, Gujarat." },
      { year: "1893", event: "Traveled to South Africa, where he spent 21 years fighting racial discrimination using non-violent resistance." },
      { year: "1915", event: "Returned to India and joined the freedom struggle, establishing the Sabarmati Ashram." },
      { year: "1917", event: "Led the Champaran Satyagraha, his first major victory against British indigo planters." },
      { year: "1930", event: "Led the historic 240-mile Dandi March (Salt Satyagraha) to protest the British salt monopoly." },
      { year: "1942", event: "Launched the Quit India Movement, raising the slogan 'Do or Die'." },
      { year: "1947", event: "Fastened and worked to curb communal violence during the partition of India." }
    ],
    portrait: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "bose",
    name: "Subhas Chandra Bose",
    years: "1897 – 1945",
    birth: "23 January 1897",
    death: "18 August 1945 (Presumed)",
    region: "Bengal",
    role: "Military Leader & Revolutionary Statesman",
    mainContribution: "Revitalized the Indian National Army (INA / Azad Hind Fauj) to wage armed struggle against British rule from abroad.",
    categories: ["Leaders", "Revolutionaries", "Military/Armed Resistance", "Political Leaders"],
    shortDescription: "Affectionately called 'Netaji', he raised a military force of Indian volunteers to fight British imperial power during World War II.",
    longDescription: "Subhas Chandra Bose was an Indian nationalist leader whose defiant patriotism made him a hero in India. He was a twice-elected president of the Indian National Congress but broke away due to ideological differences to pursue active armed resistance.",
    whatDidTheyDo: "Netaji escaped British house arrest in India in 1941, traveled to Germany and Japan to seek support, and rebuilt the Indian National Army (Azad Hind Fauj). He established the Azad Hind Government (Provisional Government of Free India) in Singapore in 1943.",
    contribution: "He organized a disciplined military force of thousands of Indian soldiers and prisoners of war, launching military campaigns in the northeast frontiers of India (Imphal and Kohima). The INA trials in 1945 subsequently catalyzed mass nationalist uprisings across the country, particularly within the Royal Indian Navy.",
    movements: ["Congress Presidency (1938-1939)", "Forward Bloc Foundation (1939)", "INA Military Campaigns (1943-1945)"],
    events: ["Great Escape from Calcutta (1941)", "Establishment of Azad Hind Radio (1942)", "Proclamation of Free India (1943)"],
    methods: ["Armed struggle", "International alliances", "Radio broadcasts", "Military mobilization"],
    challenges: ["Faced repeated arrests, internal exile, surveillance, and eventual house arrest. Undertook a dangerous submarine voyage during WWII to reach Southeast Asia, and died in a mysterious plane crash in 1945."],
    legacy: "Famous for inspiring slogans like 'Jai Hind' and 'Give me blood, and I shall give you freedom!'. Highly celebrated for his uncompromising courage and dedication to absolute freedom.",
    timeline: [
      { year: "1897", event: "Born in Cuttack, Odisha (then Bengal Presidency)." },
      { year: "1920", event: "Passed the prestigious Indian Civil Services (ICS) exam in England but resigned to join the national movement." },
      { year: "1938", event: "Elected President of the Indian National Congress at Haripura." },
      { year: "1941", event: "Escaped from Calcutta in disguise, traveling through Afghanistan and Russia to reach Berlin." },
      { year: "1943", event: "Took control of the Indian National Army in Singapore, declaring the formation of Free India." },
      { year: "1944", event: "The INA advanced into Indian territory, hoisting the tricolour at Moirang, Manipur." }
    ],
    portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUyXvf30KFl15D0YsRpl23P_2MS4oAPaO0d-OEcx_xi10UNil_nHmlcv_7uPgtLvsY2NhSl8flU5HBBfhnBUhp1iqrZgl7oCkh0WMaRo&s=10",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "bhagat-singh",
    name: "Bhagat Singh",
    years: "1907 – 1931",
    birth: "28 September 1907",
    death: "23 March 1931",
    region: "Punjab",
    role: "Revolutionary Activist & Intellectual",
    mainContribution: "Inspired the Indian youth with his radical revolutionary actions and intellectual writings advocating socialism and independence.",
    categories: ["Revolutionaries", "Military/Armed Resistance"],
    shortDescription: "A charismatic young revolutionary who embraced martyrdom at age 23, popularizing the slogan 'Inquilab Zindabad' (Long Live the Revolution).",
    longDescription: "Bhagat Singh was a socialist revolutionary whose acts of dramatic violence against the British in India and execution at age 23 made him a legendary folk hero of the Indian independence movement.",
    whatDidTheyDo: "He founded the Naujawan Bharat Sabha and was a key leader of the Hindustan Socialist Republican Association (HSRA). He was involved in the assassination of police officer John Saunders to avenge the death of Lala Lajpat Rai, and bombed the Central Legislative Assembly to protest repressive bills.",
    contribution: "Singh shifted the focus of revolutionary activity from purely secret activities to public propaganda. During his trial and imprisonment, his extensive writings, hunger strikes, and courtroom speeches exposed British colonial exploitation, generating massive nationwide solidarity.",
    movements: ["Hindustan Socialist Republican Association", "Naujawan Bharat Sabha", "Assembly Bomb Case (1929)"],
    events: ["Lahore Conspiracy Case", "Lajpat Rai Protest (1928)", "Historic 116-day Prison Hunger Strike"],
    methods: ["Armed propaganda", "Intellectual writing & pamphlets", "Hunger strikes in prison", "Courtroom declarations"],
    challenges: ["Hunted by colonial police, imprisoned in harsh conditions, and executed by hanging alongside Sukhdev and Rajguru on 23 March 1931 at the Lahore Central Jail."],
    legacy: "Hailed as 'Shaheed' (Martyr) Bhagat Singh. His writings on socialism, atheism, and nationalism continue to inspire political discourse and youth activism.",
    timeline: [
      { year: "1907", event: "Born in Lyallpur district, Punjab (now Pakistan)." },
      { year: "1919", event: "Visited the Jallianwala Bagh massacre site at age 12, which deeply impacted his worldview." },
      { year: "1926", event: "Founded the Naujawan Bharat Sabha to mobilize youth, peasants, and workers." },
      { year: "1928", event: "Co-founded the HSRA. Avenged the death of Lala Lajpat Rai by assassinating Saunders." },
      { year: "1929", event: "Threw leaflets and non-lethal bombs in the Central Legislative Assembly, willingly courting arrest." },
      { year: "1931", event: "Executed by the British administration, sparking nationwide mourning and protests." }
    ],
    portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWldBGcaatviofrQvulOahMhIdPRR6J-as4TDVIXviTsXvBUWVPmsfaicOvOPbgSPV-0XeiahXkshyOqTLFAMrdN6tW57rWNAJS76Jw&s=10",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "patel",
    name: "Sardar Vallabhbhai Patel",
    years: "1875 – 1950",
    birth: "31 October 1875",
    death: "15 December 1950",
    region: "Gujarat",
    role: "Political Leader & Statesman",
    mainContribution: "Organized peasant Satyagrahas and successfully integrated over 560 princely states into the Indian Union after independence.",
    categories: ["Leaders", "Political Leaders", "Regional Leaders"],
    shortDescription: "Known as the 'Iron Man of India', he was a master organizer of the freedom movement and the architect of modern unified India.",
    longDescription: "Sardar Vallabhbhai Patel was an Indian barrister and statesman, a major leader of the Indian National Congress, and the first Deputy Prime Minister and Home Minister of independent India.",
    whatDidTheyDo: "He organized peasants from Kheda and Bardoli in successful non-violent resistance against high taxes. Post-independence, he managed the diplomatic and administrative integration of India's fragmented princely states.",
    contribution: "His leadership in the Bardoli Satyagraha earned him the title 'Sardar' (Chief). In 1947, through a masterclass in negotiation, persuasion, and firm statesmanship, he prevented the balkanization of India by convincing hundreds of independent princely states to join the union.",
    movements: ["Kheda Satyagraha (1918)", "Bardoli Satyagraha (1928)", "Integration of Princely States (1947-1949)"],
    events: ["Civil Disobedience Movement", "Quit India Movement", "Accession of Hyderabad and Junagadh"],
    methods: ["Peasant organizing", "Satyagraha", "Diplomatic negotiations", "Administrative statecraft"],
    challenges: ["Imprisoned multiple times. Faced monumental political friction during partition and the accession of states like Kashmir, Hyderabad, and Junagadh."],
    legacy: "Often called the 'Unifier of India' and the patron saint of India's civil services. The Statue of Unity, the world's tallest statue, commemorates his legacy.",
    timeline: [
      { year: "1875", event: "Born in Nadiad, Gujarat." },
      { year: "1917", event: "Elected as Sanitation Commissioner of Ahmedabad; met Mahatma Gandhi and joined the struggle." },
      { year: "1928", event: "Led the Bardoli Satyagraha, achieving tax relief and international acclaim for organizational skills." },
      { year: "1931", event: "Presided over the Karachi Session of the Congress, adopting resolutions on Fundamental Rights." },
      { year: "1947", event: "Became India's first Deputy Prime Minister and Home Minister; began integration of princely states." },
      { year: "1950", event: "Passed away in Bombay, leaving behind a unified nation." }
    ],
    portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVTp6aXh-qA9kfjUKEcgp1BZAN5L7Hi15OafCvKLkbOapii79zLjO3qSigajWmU0VICAPADcuqhZ_QHk81I8gjRjpFAIs4yq_BmmNMg&s=10",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "nehru",
    name: "Jawaharlal Nehru",
    years: "1889 – 1964",
    birth: "14 November 1889",
    death: "27 May 1964",
    region: "Uttar Pradesh",
    role: "Political Leader & Prime Minister",
    mainContribution: "Championed the demand for complete independence (Purna Swaraj) and built the secular, democratic institutions of modern India.",
    categories: ["Leaders", "Political Leaders"],
    shortDescription: "A central figure in the independence movement, he drafted crucial declarations and served as India's first Prime Minister.",
    longDescription: "Jawaharlal Nehru was an Indian anti-colonial nationalist, secular humanist, social democrat, and author who was a central figure in India during the middle third of the 20th century.",
    whatDidTheyDo: "He was a primary leader of the left wing of the Congress in the 1920s. He drafted the resolution demanding Complete Independence (Purna Swaraj) in 1929 and served as the Prime Minister of free India for 17 years.",
    contribution: "Nehru popularized the cause of Indian independence internationally. He wrote seminal works like 'The Discovery of India' in prison and delivered the iconic 'Tryst with Destiny' speech on the eve of independence, setting the democratic direction for the republic.",
    movements: ["Non-Cooperation Movement", "Civil Disobedience", "Purna Swaraj Declaration (1929)", "Quit India Movement"],
    events: ["Lahore Congress Session (1929)", "Bandung Conference (1955)", "Planning Commission setup"],
    methods: ["Political lobbying", "Intellectual framing", "International diplomacy", "Mass mobilization"],
    challenges: ["Imprisoned nine times by the British authorities, spending a total of 3,259 days in prison between 1921 and 1945."],
    legacy: "Celebrated in India as the builder of modern scientific institutions. His birthday, November 14, is celebrated as Children's Day (Bal Diwas).",
    timeline: [
      { year: "1889", event: "Born in Allahabad to renowned lawyer Motilal Nehru." },
      { year: "1912", event: "Returned to India after studying law at Harrow and Cambridge; joined the High Court." },
      { year: "1929", event: "Elected Congress President at the Lahore Session, hoisting the tricolour flag of independence." },
      { year: "1942", event: "Arrested during the Quit India Movement; wrote 'The Discovery of India' in Ahmednagar Fort." },
      { year: "1947", event: "Became India's first Prime Minister, delivering his famous 'Tryst with Destiny' speech." }
    ],
    portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8iUT1IGWFz2r563PegTpNI6CKwo1-CucYfehoZZxGhBtLjAUfsdF5Cm2oeP01McjLbIcrfJf_kJzIUvLTFbidctSvg1H0uxzN3KwXg&s=10",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "lakshmibai",
    name: "Rani Lakshmibai",
    years: "1828 – 1858",
    birth: "19 November 1828",
    death: "18 June 1858",
    region: "Uttar Pradesh",
    role: "Warrior Queen",
    mainContribution: "Led armed military resistance against the British East India Company during the Great Revolt of 1857.",
    categories: ["Women", "Military/Armed Resistance", "Regional Leaders"],
    shortDescription: "The Queen of Jhansi, who became one of the leading figures of the Rebellion of 1857 and a symbol of resistance to British rule.",
    longDescription: "Rani Lakshmibai, born Manikarnika, was the queen of the princely state of Jhansi in North India. When the British attempted to annex Jhansi under the unjust 'Doctrine of Lapse', she refused to surrender.",
    whatDidTheyDo: "She raised her own army, recruited volunteers, and successfully defended Jhansi against British siege in 1858. When Jhansi fell, she escaped, joined forces with other rebel leaders like Tatya Tope, and captured Gwalior Fort.",
    contribution: "Her fierce refusal to bow down to British annexation ('Meri Jhansi nahi dungi') and her valor in battlefield combat galvanized national consciousness, establishing a legendary prototype of armed resistance.",
    movements: ["Great Uprising of 1857 (First War of Independence)"],
    events: ["Defense of Jhansi (1858)", "Battle of Kotah-ki-Serai (1858)", "Capture of Gwalior Fort"],
    methods: ["Military warfare", "Fort defense", "Armed rebellion"],
    challenges: ["Faced the premature loss of her husband and infant son. Fought against overwhelming British artillery and died in battle in Gwalior at the age of 29."],
    legacy: "Immortalized in Indian folklore and literature (most notably Subhadra Kumari Chauhan's poem 'Jhansi Ki Rani') as the epitome of female courage and patriotism.",
    timeline: [
      { year: "1828", event: "Born in Varanasi into a Marathi Karhade Brahmin family." },
      { year: "1842", event: "Married Maharaja Gangadhar Rao of Jhansi, renaming her Lakshmibai." },
      { year: "1853", event: "Her husband passed away. The British rejected her adopted son's succession rights." },
      { year: "1857", event: "Jhansi was swept into the Great Mutiny; she assumed control of the administration." },
      { year: "1858", event: "Defended Jhansi Fort against British General Hugh Rose, escaped on horseback, and died fighting in Gwalior." }
    ],
    portrait: "https://t3.ftcdn.net/jpg/15/89/19/16/360_F_1589191698_sbMu6TT0nqsvxjwVrAeQze7mh3npVizC.jpg",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "tilak",
    name: "Bal Gangadhar Tilak",
    years: "1856 – 1920",
    birth: "23 July 1856",
    death: "1 August 1920",
    region: "Maharashtra",
    role: "Nationalist Leader & Journalist",
    mainContribution: "Advocated for 'Swaraj' (self-rule) as a fundamental right and transformed the elite freedom movement into a popular mass struggle.",
    categories: ["Leaders", "Political Leaders", "Regional Leaders", "Social Reformers"],
    shortDescription: "Known as 'Lokmanya' (accepted by the people), he coined the slogan: 'Swaraj is my birthright, and I shall have it!'.",
    longDescription: "Bal Gangadhar Tilak was an Indian nationalist, teacher, and an independence activist. He was the first leader of the Indian Independence Movement, widely respected as the 'Father of the Indian Unrest'.",
    whatDidTheyDo: "He founded and edited Marathi and English newspapers (*Kesari* and *Mahratta*) to critique British policies. He organized public festivals like Ganesh Utsav and Shivaji Jayanti to build cultural solidarity and national consciousness.",
    contribution: "Tilak mobilized the working class and middle classes. Alongside Lala Lajpat Rai and Bipin Chandra Pal, he formed the radical nationalist 'Lal-Bal-Pal' trio, demanding direct mass agitation, boycotts of British goods, and national education.",
    movements: ["Swadeshi Movement (1905)", "Home Rule League (1916)"],
    events: ["Split of Congress in Surat (1907)", "Lucknow Pact (1916)"],
    methods: ["Journalism & literature", "Boycott of foreign goods", "Cultural festivals mobilization", "National education"],
    challenges: ["Imprisoned multiple times, including a harsh 6-year exile to Mandalay Jail in Burma (Myanmar) for sedition, where he wrote the *Gita Rahasya*."],
    legacy: "Pioneered the path of radical nationalism and self-reliance, paving the way for Mahatma Gandhi's mass movements.",
    timeline: [
      { year: "1856", event: "Born in Chikhali, Maharashtra." },
      { year: "1881", event: "Founded newspapers Kesari (Marathi) and Mahratta (English) to expose colonial exploitation." },
      { year: "1893", event: "Transformed Ganesh Chaturthi into a public festival to bypass British bans on political assemblies." },
      { year: "1908", event: "Arrested for sedition; sentenced to six years in Mandalay prison." },
      { year: "1916", event: "Co-founded the All India Home Rule League, campaigning across the country for self-rule." },
      { year: "1920", event: "Passed away in Bombay, mourned by millions." }
    ],
    portrait: "https://cdn.britannica.com/21/275321-050-9DAE10E2/Lokmanya-Tilak-Also-Known-As-Bal-Gangadhar-Tilak-From-The-1900s-One-Of-India-Earliest-Freedom-Fighters.jpg",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "lajpat-rai",
    name: "Lala Lajpat Rai",
    years: "1865 – 1928",
    birth: "28 January 1865",
    death: "17 November 1928",
    region: "Punjab",
    role: "Political Leader & Journalist",
    mainContribution: "Led the Swadeshi Movement in Punjab, established major Swadeshi financial institutions, and protested against the Simon Commission.",
    categories: ["Leaders", "Political Leaders", "Social Reformers", "Regional Leaders"],
    shortDescription: "Known as the 'Punjab Kesari' (Lion of Punjab), he was a prominent leader of the extremist faction of the Congress.",
    longDescription: "Lala Lajpat Rai was an Indian author, politician, and freedom fighter. He played a pivotal role in the Indian Independence movement and founded Punjab National Bank and Lakshmi Insurance Company.",
    whatDidTheyDo: "He promoted Swadeshi industries and national education, founded the Servants of the People Society, and wrote extensive books detailing the economic exploitation of India by Britain.",
    contribution: "Rai mobilized north India into active political participation. He led the peaceful boycott of the all-British Simon Commission in Lahore in 1928, displaying extraordinary courage in the face of brutal police violence.",
    movements: ["Swadeshi Movement (1905)", "Non-Cooperation Movement", "Simon Commission Protests (1928)"],
    events: ["Surat Session (1907)", "Deputation to Britain (1914)", "Lahore Protest March (1928)"],
    methods: ["Mass rallies", "Economic Swadeshi", "Journalism & book writing", "Educational reforms"],
    challenges: ["Deported to Mandalay in 1907 without trial. Suffered fatal injuries during a brutal police lathi charge while leading the peaceful protest against the Simon Commission in 1928."],
    legacy: "His tragic death galvanized the youth of India, inspiring Bhagat Singh and the HSRA to avenge his martyrdom, accelerating revolutionary activism.",
    timeline: [
      { year: "1865", event: "Born in Dhudike, Punjab." },
      { year: "1894", event: "Co-founded the Punjab National Bank, the first joint-stock bank managed by Indians." },
      { year: "1905", event: "Joined Bipin Chandra Pal and Tilak to lead the Swadeshi Movement." },
      { year: "1920", event: "Elected President of the Indian National Congress at the Special Calcutta Session." },
      { year: "1928", event: "Led the historic Simon Commission protest in Lahore; succumbed to injuries inflicted by British police." }
    ],
    portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxuWEciCsSJQvdzAKuoFEEhTjaKEZhuVfdZDGeojihYAzGZZ1KY4BG8PkeoLAOaDZ6fOM70-XxrNLtItueSj6joxvfiLHtCb03JGtP2Wc&s=10",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "azad",
    name: "Chandrashekhar Azad",
    years: "1906 – 1931",
    birth: "23 July 1906",
    death: "27 February 1931",
    region: "Madhya Pradesh",
    role: "Revolutionary Military Commander",
    mainContribution: "Reorganized the revolutionary struggle under the HSRA and trained young revolutionaries like Bhagat Singh.",
    categories: ["Revolutionaries", "Military/Armed Resistance"],
    shortDescription: "A legendary revolutionary commander who vowed never to be captured alive by the British police and kept his promise.",
    longDescription: "Chandrashekhar Tiwari, popularly known as Azad (The Free), was an Indian revolutionary who reorganized the Hindustan Republican Association under its new name, Hindustan Socialist Republican Association.",
    whatDidTheyDo: "He participated in the Kakori Train Robbery (1925), the attempt to blow up the Viceroy's train (1929), and the Saunders shooting. He ran underground training camps for revolutionary cadres.",
    contribution: "Azad was the chief military strategist of the revolutionary movement in North India. He managed secret weapons networks and trained volunteers, serving as a mentor and protector to Bhagat Singh and Rajguru.",
    movements: ["Non-Cooperation Movement", "Hindustan Socialist Republican Association (HSRA)"],
    events: ["Kakori Conspiracy (1925)", "Saunders Retaliation (1928)", "Alfred Park Standout (1931)"],
    methods: ["Guerrilla warfare", "Underground networks", "Armed actions", "Decentralized cells"],
    challenges: ["Lived as an outlaw for years under constant threat. Hunted down by British police at Alfred Park in Allahabad, he fought single-handedly and shot himself with his final bullet to remain 'Azad' (free)."],
    legacy: "Celebrated as a symbol of absolute defiance. Alfred Park, where he made his last stand, has been renamed Chandrashekhar Azad Park.",
    timeline: [
      { year: "1906", event: "Born in Bhabhra village, Madhya Pradesh." },
      { year: "1921", event: "Joined the Non-Cooperation Movement at age 15; arrested and told the magistrate his name was 'Azad' (Free)." },
      { year: "1925", event: "Executed the Kakori train heist to secure funds for buying arms." },
      { year: "1928", event: "Reorganized the HRA into the HSRA along with Bhagat Singh, adopting socialist ideals." },
      { year: "1931", event: "Died defending himself against a large police force at Alfred Park, keeping his vow." }
    ],
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chandrasekhar_Azad.jpg/960px-Chandrasekhar_Azad.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "naidu",
    name: "Sarojini Naidu",
    years: "1879 – 1949",
    birth: "13 February 1879",
    death: "2 March 1949",
    region: "Telangana / Andhra Pradesh",
    role: "Political Leader & Poet",
    mainContribution: "Led crucial phases of the Salt Satyagraha and pioneered the participation of women in the political sphere.",
    categories: ["Women", "Leaders", "Political Leaders"],
    shortDescription: "Known as the 'Nightingale of India', she was a brilliant orator, a leading feminist, and the first Indian woman Congress President.",
    longDescription: "Sarojini Naidu was an Indian political activist, feminist, and poet. A proponent of civil rights, women's emancipation, and anti-imperialistic ideas, she was a major figure in India's struggle for independence.",
    whatDidTheyDo: "She traveled across India lecturing on women's rights and nationalism. She took charge of the Dharasana Satyagraha in 1930 after Gandhi's arrest and became the first woman Governor of an Indian state (Uttar Pradesh).",
    contribution: "Naidu brought women to the forefront of the freedom movement. She co-founded the Women's Indian Association (WIA) in 1917 and spoke at international conferences, presenting India's struggle for self-determination to the world.",
    movements: ["Home Rule Movement", "Non-Cooperation Movement", "Salt Satyagraha", "Dharasana Satyagraha (1930)"],
    events: ["President of Congress Session (1925)", "Second Round Table Conference (1931)", "Quit India Movement"],
    methods: ["Oratory & public lectures", "Poetry & literature", "Civil Disobedience", "Feminist organizing"],
    challenges: ["Faced multiple arrests and long imprisonments (most notably for 21 months during the Quit India Movement) which severely affected her health."],
    legacy: "Revered as one of India's early feminist icons. Her birth anniversary, February 13, is celebrated in India as National Women's Day.",
    timeline: [
      { year: "1879", event: "Born in Hyderabad in a Bengali family." },
      { year: "1905", event: "Joined the national movement following the Partition of Bengal; met Gopal Krishna Gokhale." },
      { year: "1925", event: "Elected President of the Indian National Congress at the Kanpur Session." },
      { year: "1930", event: "Led the massive non-violent march on the Dharasana Salt Works after Gandhi was jailed." },
      { year: "1947", event: "Appointed Governor of the United Provinces (now Uttar Pradesh), serving until her death in 1949." }
    ],
    portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkhOXlQbo1gHaXj_RjefT6fFKC4ySk-FSBfNEJEm2jEpi8nBBMtHub63wrumO-_DkEg1_QLn59FhARWjSzOayEMAy4AubvGgb3EyfuWCw&s=10",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "besant",
    name: "Annie Besant",
    years: "1847 – 1933",
    birth: "1 October 1847",
    death: "20 September 1933",
    region: "Tamil Nadu / United Kingdom",
    role: "Political Activist & Reformer",
    mainContribution: "Launched the Home Rule League in India to demand self-government and promoted education and social reforms.",
    categories: ["Women", "Leaders", "Political Leaders", "Social Reformers"],
    shortDescription: "A British-born supporter of Indian self-rule, she founded the Home Rule League and was elected President of the Congress.",
    longDescription: "Annie Besant was a British socialist, theosophist, women's rights activist, writer, orator, and supporter of both Irish and Indian self-rule. She made India her home in 1893.",
    whatDidTheyDo: "She co-founded the Central Hindu College at Benares (later Benares Hindu University) and launched the Home Rule League in 1916 to campaign for dominion status within the British Empire.",
    contribution: "Besant modernized the methods of political agitation in India by setting up local branches of the Home Rule League, organizing discussions, and circulating pamphlets. Her efforts significantly revitalized the Congress.",
    movements: ["Home Rule League (1916)", "Theosophical Society campaigns"],
    events: ["Congress Calcutta Session President (1917)", "Establishment of Central Hindu College (1898)"],
    methods: ["Political campaigns", "Educational institutionalization", "Journalism (*New India*)", "Public lectures"],
    challenges: ["Interned by the British government in 1917 for her political activities, which sparked widespread protests across India and forced her release."],
    legacy: "Acknowledged for building bridge institutions between Indian heritage and modern education, and for mobilizing women into the political sphere.",
    timeline: [
      { year: "1847", event: "Born in London, England." },
      { year: "1893", event: "Arrived in India to work for the Theosophical Society." },
      { year: "1916", event: "Launched the All India Home Rule League, traveling across the country to establish local units." },
      { year: "1917", event: "Imprisoned by the colonial government; elected President of the Indian National Congress upon release." },
      { year: "1933", event: "Passed away in Adyar, Madras (now Chennai)." }
    ],
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Annie_Besant_-_portrait.jpg/250px-Annie_Besant_-_portrait.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "ali",
    name: "Aruna Asaf Ali",
    years: "1909 – 1996",
    birth: "16 July 1909",
    death: "29 July 1996",
    region: "Haryana / Delhi",
    role: "Revolutionary Organizer",
    mainContribution: "Hoisted the tricolour at Gowalia Tank Ground during the Quit India Movement and managed underground networks.",
    categories: ["Women", "Revolutionaries", "Political Leaders"],
    shortDescription: "Remembered as the 'Grand Old Lady of the Independence Movement' for her heroic actions during the Quit India struggle.",
    longDescription: "Aruna Asaf Ali was an Indian educator, political activist, and publisher. An active participant in the Indian independence movement, she is widely remembered for hoisting the Indian National flag at Mumbai during the Quit India Movement.",
    whatDidTheyDo: "She defied the police to hoist the flag after the top Congress leadership was arrested, and then went underground to edit the monthly journal *Inquilab* and coordinate resistance.",
    contribution: "She was a key organizer of the underground resistance movement during WWII, setting up secret radios, collecting funds, and coordinating activities of the Congress Socialist Party.",
    movements: ["Salt Satyagraha", "Quit India Movement (1942)", "Congress Socialist Party campaigns"],
    events: ["Flag Hoisting at Gowalia Tank (1942)", "Underground Resistance Coordination"],
    methods: ["Underground networking", "Flag hoisting protests", "Publications and pamphlets", "Secret radio networks"],
    challenges: ["Imprisoned during the Salt Satyagraha. Evaded police capture for years while underground, despite a reward announced for her capture; her property was seized and sold by the police."],
    legacy: "Awarded the Bharat Ratna, India's highest civilian honor, in 1997. Remembered as an emblem of youthful defiance.",
    timeline: [
      { year: "1909", event: "Born in Kalka, Punjab (now Haryana) as Aruna Ganguly." },
      { year: "1930", event: "Participated in the Salt Satyagraha; arrested and imprisoned in Tihar Jail." },
      { year: "1942", event: "Hoisted the national flag on August 9, starting the Quit India Movement; went underground to avoid arrest." },
      { year: "1946", event: "Emerged from hiding after warrants against her were officially withdrawn." },
      { year: "1958", event: "Elected as Delhi's first female Mayor." }
    ],
    portrait: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7BBQNMBG8eblX7KzfRocDqHIUxqdvzIF5bwbXgQqjHzfDBlukWAFHC6veFbnTBXDg56j3jBy8Roz4Ktil_t7ClfURFMOW5h-kLKz07qD&s=10",
    portraitCredits: "Wikimedia Commons - Public Domain"
  },
  {
    id: "raju",
    name: "Alluri Sitarama Raju",
    years: "1897 – 1924",
    birth: "4 July 1897",
    death: "7 May 1924",
    region: "Andhra Pradesh",
    role: "Tribal Rebellion Leader",
    mainContribution: "Led the armed Rampa Rebellion (1922-1924) of tribal communities in the Eastern Ghats against oppressive forest laws.",
    categories: ["Revolutionaries", "Military/Armed Resistance", "Regional Leaders"],
    shortDescription: "A legendary tribal leader who waged guerrilla warfare against the British Raj to protect the rights of Adivasi communities.",
    longDescription: "Alluri Sitarama Raju was an Indian revolutionary who waged an armed campaign against British colonial rule in India. He mobilized the tribal people of the Visakhapatnam and Godavari districts to revolt.",
    whatDidTheyDo: "He organized tribal populations to resist the Madras Forest Act of 1882, which restricted their traditional shifting cultivation (*Podu*). He led raids on police stations to seize firearms for his fighters.",
    contribution: "Raju demonstrated the power of indigenous guerrilla tactics in dense forests. Under his leadership, the Rampa Rebellion held the British forces at bay for over two years, becoming a symbol of tribal resistance.",
    movements: ["Rampa Rebellion (1922-1924)"],
    events: ["Chintapalli Police Station Raid (1922)", "Battle of Peddaddapalem"],
    methods: ["Guerrilla warfare", "Traditional weapons combined with raided guns", "Forest tracking", "Adivasi mobilization"],
    challenges: ["Fought against heavily armed British Assam Rifles. Betrayed, captured, tied to a tree, and executed by British forces in 1924 at age 26."],
    legacy: "Revered in Andhra Pradesh with the title 'Manyam Veerudu' (Hero of the Jungles). Celebrated as a folk hero and a champion of tribal rights.",
    timeline: [
      { year: "1897", event: "Born in Pandrangi village, Visakhapatnam district, Andhra Pradesh." },
      { year: "1918", event: "Traveled widely, met revolutionaries, and settled in the Agency areas among the tribals." },
      { year: "1922", event: "Launched the Rampa Rebellion with a daring raid on the Chintapalli police station to secure ammunition." },
      { year: "1924", event: "Captured by British forces and shot dead, bringing an end to the historic rebellion." }
    ],
    portrait: "https://swarajya.gumlet.io/swarajya/2022-07/3061a48a-8b3a-487f-8a4e-fb5894b8e229/Alluri_Sitarama_Raju.png?q=25&auto=format,compress&format=webp",
    portraitCredits: "Wikimedia Commons - Government of India - Fair Use"
  },
  {
    id: "hazra",
    name: "Matangini Hazra",
    years: "1870 – 1942",
    birth: "19 October 1870",
    death: "29 September 1942",
    region: "Bengal",
    role: "Peasant Activist",
    mainContribution: "Participated in peasant protests and died holding the national flag high during the Quit India march in Tamluk.",
    categories: ["Women", "Regional Leaders"],
    shortDescription: "Affectionately called 'Gandhi Buri' (Old Lady Gandhi), she was a peasant woman who showed exceptional valor during the Quit India Movement.",
    longDescription: "Matangini Hazra was an Indian revolutionary who participated in the Indian independence movement until she was shot dead by the British Indian police in front of the Tamluk Police Station.",
    whatDidTheyDo: "She participated in the Civil Disobedience Movement, manufactured salt at Alinan, and was jailed for violating salt laws. In 1942, she led a massive procession of thousands of peasants to take over the Tamluk police station.",
    contribution: "Her martyrdom became a powerful symbol of rural women's participation. As she was shot multiple times by the British police, she kept marching forward, chanting 'Vande Mataram', keeping the Indian national flag flying high until her last breath.",
    movements: ["Civil Disobedience Movement", "Salt Satyagraha", "Quit India Movement (1942)"],
    events: ["Tamluk Police Station March (1942)"],
    methods: ["Peaceful marches", "Civil disobedience", "Flag bearing"],
    challenges: ["Born into extreme poverty, widowed early. Suffered social discrimination, police brutality, and was shot dead at the age of 72 while holding the national flag."],
    legacy: "The first statue of a woman revolutionary erected in Kolkata (Maidan) in independent India was of Matangini Hazra. Numerous schools and streets are named after her.",
    timeline: [
      { year: "1870", event: "Born into a poor peasant family in Hogla village, Tamluk, Bengal." },
      { year: "1905", event: "Became actively interested in nationalist ideas during the Partition of Bengal struggle." },
      { year: "1932", event: "Participated in the Salt Satyagraha march; arrested and sentenced to hard labor." },
      { year: "1942", event: "Led a crowd of 6,000 peasants to take over Tamluk police station; shot dead by British soldiers." }
    ],
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/%22Gandhi_Buri%22_Matangini_Hazra.jpg/500px-%22Gandhi_Buri%22_Matangini_Hazra.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    portraitCredits: "Wikimedia Commons - Public Domain"
  }
];

/* --- 6. PAGE LOGIC AND INTERACTIONS --- */

// Render Freedom Fighters Grid on freedom-fighters.html
function renderFightersGrid(data) {
  const grid = document.getElementById('fighters-grid');
  if (!grid) return;
  
  if (data.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: var(--spacing-xl); color: var(--text-muted);">
        <p style="font-size: 1.2rem;">No freedom fighters found matching your criteria.</p>
        <p style="margin-top: 10px;">Try adjusting your search terms or filter selection.</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = data.map(fighter => {
    // Generate beautiful inline fallback gradient color based on their ID
    const colors = [
      ['#ff9933', '#111827'],
      ['#138808', '#111827'],
      ['#d4af37', '#111827'],
      ['#0645ad', '#111827']
    ];
    const hash = fighter.id.charCodeAt(0) % colors.length;
    const fallbackGrad = `linear-gradient(135deg, ${colors[hash][0]} 0%, ${colors[hash][1]} 100%)`;
    
    return `
      <article class="card anim-slide-up" data-id="${fighter.id}">
        <div class="card-img-wrap">
          <img src="${fighter.portrait}" alt="Portrait of ${fighter.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="portrait-fallback" style="display:none; width:100%; height:100%; background: ${fallbackGrad}; justify-content:center; align-items:center; flex-direction:column; color:#fff; text-align:center; padding: 20px;">
            <div style="font-size: 3rem; font-family: var(--font-serif); font-weight:700; margin-bottom:10px;">
              ${fighter.name.split(' ').map(n => n[0]).join('')}
            </div>
            <p style="font-size:0.75rem; opacity:0.8; font-family: var(--font-serif); font-style:italic;">"${fighter.mainContribution.slice(0, 50)}..."</p>
          </div>
          <span class="card-tag">${fighter.region}</span>
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span>${fighter.years}</span>
            <span>${fighter.role}</span>
          </div>
          <h3 class="card-title">${fighter.name}</h3>
          <p class="card-subtitle">${fighter.categories.join(' • ')}</p>
          <p class="card-desc">${fighter.shortDescription}</p>
          <div class="card-footer">
            <a href="fighter.html?id=${fighter.id}" class="btn btn-secondary btn-sm" style="padding: 6px 12px; font-size: 0.85rem;">Read Full Story</a>
            <button class="arrow-link" onclick="copyQuote('${fighter.mainContribution.replace(/'/g, "\\'")}', '${fighter.name}')" title="Copy Key Contribution Quote" aria-label="Copy Contribution Quote">
              Quote <span>→</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Setup Search & Filter triggers on freedom-fighters.html
function initFightersDirectory() {
  const searchInput = document.getElementById('search-fighters');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  if (!document.getElementById('fighters-grid')) return;
  
  let activeFilter = 'All';
  let searchTerm = '';
  
  function filterAndRender() {
    const filtered = fightersData.filter(fighter => {
      const matchesSearch = fighter.name.toLowerCase().includes(searchTerm) || 
                            fighter.region.toLowerCase().includes(searchTerm) ||
                            fighter.role.toLowerCase().includes(searchTerm) ||
                            fighter.shortDescription.toLowerCase().includes(searchTerm);
      
      const matchesFilter = activeFilter === 'All' || 
                            fighter.categories.includes(activeFilter) ||
                            (activeFilter === 'Military/Armed Resistance' && fighter.categories.includes('Military/Armed Resistance'));
      
      return matchesSearch && matchesFilter;
    });
    renderFightersGrid(filtered);
  }
  
  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }
  
  // Filter button events
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      filterAndRender();
    });
  });
  
  // Initial render
  filterAndRender();
}

// Render dynamic fighter profile page for fighter.html
function initFighterProfile() {
  const profileContainer = document.getElementById('fighter-profile-container');
  if (!profileContainer) return;
  
  // Get query params
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  
  const fighter = fightersData.find(f => f.id === id);
  
  if (!fighter) {
    profileContainer.innerHTML = `
      <div style="text-align:center; padding: var(--spacing-xl) var(--spacing-md);">
        <h2>Profile Not Found</h2>
        <p style="color:var(--text-muted); margin-bottom:var(--spacing-md);">We couldn't find a record for the specified freedom fighter.</p>
        <a href="freedom-fighters.html" class="btn btn-primary">Return to Directory</a>
      </div>
    `;
    return;
  }
  
  // Update document title for SEO
  document.title = `${fighter.name} - India: Journey to Freedom`;
  
  // Set fallback gradient in case image fails
  const colors = [
    ['#ff9933', '#111827'],
    ['#138808', '#111827'],
    ['#d4af37', '#111827'],
    ['#0645ad', '#111827']
  ];
  const hash = fighter.id.charCodeAt(0) % colors.length;
  const fallbackGrad = `linear-gradient(135deg, ${colors[hash][0]} 0%, ${colors[hash][1]} 100%)`;
  
  profileContainer.innerHTML = `
    <!-- Hero Header -->
    <section class="fighter-header">
      <div class="fighter-header-container">
        <div style="position:relative;">
          <img class="fighter-large-img" src="${fighter.portrait}" alt="Portrait of ${fighter.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="portrait-fallback-large" style="display:none; width:320px; height:400px; background: ${fallbackGrad}; border-radius: var(--border-radius-lg); justify-content:center; align-items:center; flex-direction:column; color:#fff; text-align:center; padding: 30px; box-shadow: var(--box-shadow);">
            <div style="font-size: 5rem; font-family: var(--font-serif); font-weight:700; margin-bottom:20px;">
              ${fighter.name.split(' ').map(n => n[0]).join('')}
            </div>
            <p style="font-style:italic; font-family: var(--font-serif); font-size:1.1rem;">"${fighter.name}"</p>
          </div>
          <span style="display:block; text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:8px;">
            ${fighter.portraitCredits}
          </span>
        </div>
        <div class="fighter-header-info">
          <div class="fighter-dates">${fighter.years}</div>
          <h1 class="fighter-name">${fighter.name}</h1>
          <p style="font-size: 1.15rem; color:var(--saffron); font-weight:600; font-style:italic; margin-bottom: 20px;">
            ${fighter.role}
          </p>
          <div class="disclaimer-card" style="margin-bottom:0;">
            <span>★</span>
            <div>
              <strong>Key Contribution:</strong> ${fighter.mainContribution}
            </div>
          </div>
          
          <div class="fighter-meta-grid">
            <div class="fighter-meta-item">
              <span class="fighter-meta-label">Born</span>
              <span class="fighter-meta-val">${fighter.birth}</span>
            </div>
            <div class="fighter-meta-item">
              <span class="fighter-meta-label">Died</span>
              <span class="fighter-meta-val">${fighter.death}</span>
            </div>
            <div class="fighter-meta-item">
              <span class="fighter-meta-label">Region</span>
              <span class="fighter-meta-val">${fighter.region}</span>
            </div>
            <div class="fighter-meta-item">
              <span class="fighter-meta-label">Categories</span>
              <span class="fighter-meta-val">${fighter.categories.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Biography and Interactive Timeline -->
    <div class="section-container" style="padding: var(--spacing-lg) var(--spacing-md);">
      <div class="fighter-layout">
        
        <!-- Left Column: Biography Details -->
        <main>
          <article class="profile-section">
            <h2>Who Were They?</h2>
            <p>${fighter.longDescription}</p>
          </article>

          <article class="profile-section">
            <h2>What Did They Do?</h2>
            <p>${fighter.whatDidTheyDo}</p>
          </article>

          <article class="profile-section">
            <h2>How Did They Contribute to India's Freedom?</h2>
            <p>${fighter.contribution}</p>
          </article>

          <article class="profile-section">
            <h2>Methods of Resistance</h2>
            <ul>
              ${fighter.methods.map(m => `<li><strong>${m}</strong></li>`).join('')}
            </ul>
          </article>

          <article class="profile-section">
            <h2>Challenges and Sacrifices</h2>
            <ul>
              ${fighter.challenges.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </article>

          <article class="profile-section">
            <h2>Historical Legacy</h2>
            <p>${fighter.legacy}</p>
          </article>
        </main>
        
        <!-- Right Column: Sidebar Interactive Timeline -->
        <aside>
          <div class="glass-panel" style="background:var(--surface-primary); border: 1px solid var(--border-color); border-radius:var(--border-radius-md); padding:var(--spacing-md); position:sticky; top:100px; box-shadow: var(--box-shadow);">
            <h3 style="font-size: 1.3rem; color:var(--gold); border-bottom:1px solid var(--border-color); padding-bottom:10px; margin-bottom:var(--spacing-md); display:flex; align-items:center; gap:8px;">
              <span>⏳</span> Life Timeline
            </h3>
            <div class="profile-timeline-list" style="position:relative; padding-left:15px; border-left:1px solid var(--border-color);">
              ${fighter.timeline.map((item, idx) => `
                <div class="profile-timeline-item" style="margin-bottom:20px; position:relative;">
                  <div style="position:absolute; left:-20px; top:4px; width:10px; height:10px; border-radius:50%; background-color:var(--saffron); border:2px solid var(--bg-primary);"></div>
                  <div style="font-weight:700; color:var(--gold); font-size:0.95rem; margin-bottom:2px;">${item.year}</div>
                  <div style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">${item.event}</div>
                </div>
              `).join('')}
            </div>
            
            <!-- Share profile removed -->
          </div>
        </aside>
        
      </div>
    </div>
  `;
}

// Attach execution depending on context
document.addEventListener('DOMContentLoaded', () => {
  initFightersDirectory();
  initFighterProfile();
});
