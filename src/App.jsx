import { useState } from "react";

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["sheep", "Sheep"],
  ["rams", "Stud Rams"],
  ["ewes", "Breeding Ewes"],
  ["donkeys", "Donkeys"],
  ["jacks", "Stud Jacks"],
  ["jennies", "Jennies"],
  ["stock", "Available Stock"],
  ["contact", "Contact"],
];

const sheepFeatures = [
  "True traditional Valais Blacknose style",
  "Conformation-led breeding decisions",
  "Focus on bone, markings, and fleece",
  "Calm temperament and breeding value",
];

const donkeyFeatures = [
  "One of Australia’s largest studs",
  "Quality imported genetics",
  "Strong conformation and soundness",
  "Temperament and long-term consistency",
];

const rams = [
  { name: "Stud Ram 01", note: "Replace with your lead sire details.", status: "Placeholder" },
  { name: "Stud Ram 02", note: "Replace with your retained ram details.", status: "Placeholder" },
  { name: "Stud Ram 03", note: "Replace with your young ram prospect details.", status: "Placeholder" },
];

const ewes = [
  { name: "Breeding Ewe 01", note: "Replace with your foundation ewe details.", status: "Placeholder" },
  { name: "Breeding Ewe 02", note: "Replace with your feature ewe details.", status: "Placeholder" },
  { name: "Breeding Ewe 03", note: "Replace with your retained ewe details.", status: "Placeholder" },
];

const jacks = [
  {
    name: "HHAA BLACK 'n' BLUE (Bruise)",
    note: 'Import USA • 30½" Black w/Cross Jack • DOB: August 9th, 2008 • MDR #54530 • Microchip ID on file.',
    sire: 'Sire: Itsy Bitsy Front and Center, 31¼" Black w/Cross',
    dam: 'Dam: Sunset Acres Junebug, 32½" Black, NLP',
    status: "Current Jack",
  },
  {
    name: "TTW COWBOY'S KALAMAZOO (Zoo)",
    note: 'Import USA • 30 5/8" Black/White Spotted Jack • DOB: May 3rd, 2008 • MDR #55374 • ACOSA #SA2902 • Microchip ID on file.',
    sire: 'Sire: Short ASSet’s Cowboy, 31½" Dark Brown',
    dam: 'Dam: Arrow Creek Bunny, 32½" Masked Spotted',
    status: "Current Jack",
  },
  {
    name: "QUARTER MOON LAPTOP",
    note: 'Import USA • 29½" Jack • described on the current site as a standout herd sire with strong bone, width, balance, and a beautiful curly winter coat.',
    sire: 'Imported herd sire listed on current site',
    dam: 'Pedigree details not shown in the visible section opened',
    status: "Current Jack",
  },
  {
    name: "FEATHER RIDGE RED BARRON",
    note: 'Import USA • Immature Dark Red Jack • DOB: April 28th, 2023 • MDR #73925 • Microchip ID on file.',
    sire: 'Sire: Ms & Pa’s Red Pepper, 33¼" Red',
    dam: 'Dam: Feather Ridge’s Autum, 31½" Dark Red',
    status: "Current Jack",
  },
  {
    name: "HHAA HEZA BRICK HOUSE",
    note: 'Import USA • 28½" Dark Spotted • listed on the site as For Reference Only and described as tiny, very correct, and an outstanding-tempered gentleman.',
    sire: 'Reference sire profile on current site',
    dam: 'Reference pedigree continues on current site',
    status: "Reference Only",
  },
];

const jennies = [
  {
    name: "HHAA CH CHIME",
    note: 'Import USA • Excellence in Halter • 30¾" Black & White Spotted Jennet • DOB: 26/05/2013 • MDR #63898 • ACOSA #SA2822.',
    sire: 'Sire: HHAA Black n\' Blue (Bruise), 30½" Black w/Cross',
    dam: 'Dam: HHAA Ch Ching, 32¼" Dark Spotted',
    status: "Brood Jennet",
  },
  {
    name: "HHAA CH CHING",
    note: 'Import USA • 32¼" Dark Brown/Roan (near Black) & White Spotted Jennet • DOB: 20/09/2006 • MDR #47784 • ACOSA #SA2195.',
    sire: 'Sire: PGF Peppercorn Jack, 30½" Brown',
    dam: 'Dam: Windcrest Little Sierra, 33" Black/Roan & White Spot',
    status: "Brood Jennet",
  },
  {
    name: "D L MANGILE’S SWEET DARBY",
    note: 'Import USA • 32" Dark Spotted Jennet • DOB: 28/05/2020 • MDR #70641.',
    sire: 'Sire: Circle C Obsession, 32½" Black',
    dam: 'Dam: West Prairie Greta, 34" Black & White Spotted',
    status: "Brood Jennet",
  },
  {
    name: "QUARTER MOON PIN UP GIRL",
    note: 'Import USA • 30½" Dark Brown Jennet • DOB: 26/02/2010 • MDR #59922.',
    sire: 'Sire: LN Stuart Little, 29½" Black',
    dam: 'Dam: Quarter Moon Marti, 32¾" Dark Brown',
    status: "Brood Jennet",
  },
  {
    name: "WINTERWOOD MUSETTA",
    note: '32½" Dark Brown & White Spotted Jennet • DOB: 16/05/2012 • MDR #62736.',
    sire: 'Sire: Sheloy\'s Canadian Tracker, 32½" Dark Red/Brown',
    dam: 'Dam: Cyder\'s Just A Doll, 32½" Dark Brown & White Spotted',
    status: "Brood Jennet",
  },
  {
    name: "HHAA PAPER TYGER",
    note: 'Import USA • 32" Very Dark Brown Jennet w/NLP • DOB: 06/07/2010 • MDR #59914.',
    sire: 'Sire: Heiken\'s Ark Napoleon, 31½" Dark Tri-Colored Spot w/NLP',
    dam: 'Dam: Gladybrooke Glorianna, 31" Very Dark Brown',
    status: "Brood Jennet",
  },
  {
    name: "ECCLESTONE VALLEY KATERINA",
    note: 'Red Jennet • DOB: 08/08/2014 • MDR #65766 • height listed as still growing on the current site.',
    sire: 'Sire: Clovercrest Satchmo, 31¼"',
    dam: 'Dam: Joy\'s Kiss of Karina, 32"',
    status: "Brood Jennet",
  },
  {
    name: "MALAKAI LOOK MY WAY",
    note: 'Brown Jennet • DOB: 14/01/2014 • MDR #66624.',
    sire: 'Sire: N&Ds Lonestar Night Hawk, 29½" Brown',
    dam: 'Dam: Copperas Creek\'s Cupid',
    status: "Brood Jennet",
  },
  {
    name: "MALAKAI STARSTRUCK",
    note: 'Brown NLP Jennet • DOB: 29/11/2015 • MDR #66627.',
    sire: 'Sire: N Ds Lonestar Night Hawk, 29½" Brown',
    dam: 'Dam: Malakai Rhapsody, 32" Brown',
    status: "Brood Jennet",
  },
  {
    name: "DEE'S COBRA'S BLACK HAIRED RAVEN",
    note: 'Import USA • 31¾" Black Jennet w/NLP & Cross • DOB: 01/09/2012 • MDR #63030.',
    sire: 'Sire: Braying Acres Storm Trooper, 30½" Black w/NLP',
    dam: 'Dam details continue on the current site pedigree section',
    status: "Brood Jennet",
  },
  {
    name: "HHAA CODE VIOLATION",
    note: 'Import USA • 31¼" Dark Brown-Roan/White Spotted Jennet • DOB: 30/04/2012 • MDR pending on site.',
    sire: 'Sire: Big Woods Secret Code, 33½" Champion Dark Gray/White Spotted',
    dam: 'Dam: E. B. Brown Sugar, 34½" Brown',
    status: "Brood Jennet",
  },
  {
    name: "GRAWOOD SUNDAE ROSE",
    note: '29" Brown Jennet • DOB: 13/02/2011 • MDR #60924.',
    sire: 'Sire: Heiken\'s Arc Clint Mar, Brown Grey Dun',
    dam: 'Dam: Ass-pirin Acres Shania, 29½" Grey Dun',
    status: "Brood Jennet",
  },
  {
    name: "DONKEY RIDGE FARM REBELICIOUS",
    note: 'Import USA • Black & White Spotted Jennet • DOB: 13/05/2015 • height listed as still growing • MDR #65988.',
    sire: 'Sire: Circle C Main Event, 32½" Black',
    dam: 'Dam: Gardner\'s Chica, 32½" Dark Brown/White Spotted',
    status: "Brood Jennet",
  },
  {
    name: "BAINBRIDGE’S SIERRA MIST",
    note: 'Import USA • 31¾" Black & White Spotted Jennet • DOB: 13/04/2012 • MDR #66071.',
    sire: 'Sire: LN Iceno Trouble, 31" Very Dark Brown/White Spotted',
    dam: 'Dam pedigree shown on current site',
    status: "Brood Jennet",
  },
  {
    name: "FRONTIER LEGENDS SUMMER MOON",
    note: 'Import USA • 32½" Dark Brown/White Spotted Jennet • DOB: 23/03/2020 • MDR #71198 • ACOSA #SA3194.',
    sire: 'Sire: Frontier Legends Toucht\'Clouds, 30½" Dark Brown & White Spotted',
    dam: 'Dam: Frontier Gambler\'s Lady Luck, 32¼" Black',
    status: "Brood Jennet",
  },
  {
    name: "HHAA BUG JUICE",
    note: 'Import USA • 31½" Black/White Spotted Jennet • DOB: 08/05/2017 • MDR #68424 • ACOSA #SA3040.',
    sire: 'Sire: Donkette Korral Kryptonite, 30½" Black/White Spotted',
    dam: 'Dam: Sunset Acres Junebug, 32½" Black, NLP',
    status: "Brood Jennet",
  },
  {
    name: "HAWKWINDS BOLD PAPAYA",
    note: 'Import USA • Immature Brown/Gray & White Spotted Jennet • Height on 09/06/2023: 30¼"+ • DOB: 07/09/2020 • MDR #72183.',
    sire: 'Sire: Hawkwinds Bold Ruler, 30½" Dark Spotted',
    dam: 'Dam: Feather Ridge’s NT June, 31¾" Red',
    status: "Brood Jennet",
  },
  {
    name: "HAWKWINDS BOLD DANCER",
    note: 'Import USA • Immature Dark Brown Jennet • Height on 09/06/2023: 29½"+ • DOB: 23/04/2021 • MDR pending on site.',
    sire: 'Sire: Hawkwinds Bold Ruler, 30½" Dark Spotted',
    dam: 'Dam: Feather Ridges Cassie, 31¼" Red',
    status: "Brood Jennet",
  },
  {
    name: "HHAA KISS on the LIPs (Smooch)",
    note: 'Import USA • 32½" Black & White Spotted Jennet • DOB: 26/08/2017 • MDR #68427 • ACOSA #SA3042.',
    sire: 'Sire: TTW Cowboy’s Kalamazoo, 30 5/8" Black/White Spotted',
    dam: 'Dam: HHAA Paper Tyger, 32" Black w/NLP',
    status: "Brood Jennet",
  },
  {
    name: "MINIMINE LEILANI",
    note: '31½" Brown Jennet • DOB: 16/03/2015 • MDR #66111.',
    sire: 'Sire: N&D’s Lonestar Love Bandit, 29½" Brown/White Spotted',
    dam: 'Dam: Minimine Lilliana, 30½" Gray-Dun',
    status: "Brood Jennet",
  },
  {
    name: "FARMSTEAD’S MOLLY O’DAY",
    note: 'Import USA • Excellence in Halter • 32" Brown/White Spotted • DOB: 19/06/2012 • MDR #63621.',
    sire: 'Sire: WLDF Tin Roof Sunday, 32" Brown/White Spotted',
    dam: 'Dam: Golden Papallion’s Precious Peridot, 30¼" Dark Brown',
    status: "Brood Jennet",
  },
  {
    name: "LN OMD SHEEZ ALL BLING",
    note: 'Import USA • 32" Dark Brown/White Spotted • DOB: 07/01/2011 • DABSA #AMM/970/11 • MDR #62847.',
    sire: 'Sire: LN Proper View, 32" Dark Brown/White Spotted',
    dam: 'Dam: LN Dark Treasure, 31½" Black',
    status: "Brood Jennet",
  },
];

const stockItems = [
  {
    category: "Mediterranean Miniature Donkeys",
    title: "Elite Donkey Breeding Package",
    text: "Two pregnant jennies, both in foal to Micro Mini Heikens Arc Clint Mar, plus one unrelated micro red jack. A rare package built from elite, hand-selected bloodlines with a strong focus on size, quality, and consistency.",
    highlights: [
      "Two pregnant jennies",
      "Both in foal to Micro Mini Heikens Arc Clint Mar",
      "One unrelated micro red jack",
      "Proven, desirable genetics",
      "Stud priced • Serious enquiries only",
    ],
  },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: "#78716c" }}>{eyebrow}</p>
      <h2 style={{ marginTop: 12, fontSize: 42, lineHeight: 1.1, fontWeight: 600 }}>{title}</h2>
      {text ? <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.8, color: "#57534e" }}>{text}</p> : null}
    </div>
  );
}

function FeatureList({ items }) {
  return (
    <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
      {items.map((item) => (
        <div key={item} style={{ border: "1px solid #e7e5e4", background: "white", padding: 16, borderRadius: 18, fontSize: 14, color: "#44403c", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
          {item}
        </div>
      ))}
    </div>
  );
}

function AnimalCard({ item }) {
  return (
    <div style={{ overflow: "hidden", borderRadius: 28, border: "1px solid #e7e5e4", background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
      <div style={{ aspectRatio: "4 / 3", background: "linear-gradient(135deg,#ddd6ce,#f6f3ee)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24, color: "#78716c", fontSize: 14 }}>
        Add real animal photos here
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <h3 style={{ fontSize: 28, fontWeight: 600, margin: 0 }}>{item.name}</h3>
          <span style={{ borderRadius: 999, background: "#f5f5f4", padding: "6px 12px", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "#78716c" }}>
            {item.status}
          </span>
        </div>
        <p style={{ marginTop: 16, lineHeight: 1.8, color: "#57534e" }}>{item.note}</p>
        {item.sire ? <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: "#78716c" }}>{item.sire}</p> : null}
        {item.dam ? <p style={{ marginTop: 4, fontSize: 14, lineHeight: 1.6, color: "#78716c" }}>{item.dam}</p> : null}
        <button style={{ marginTop: 24, borderRadius: 999, border: "1px solid #d6d3d1", padding: "10px 16px", fontSize: 14, fontWeight: 500, color: "#44403c", background: "white", cursor: "pointer" }}>
          Enquire
        </button>
      </div>
    </div>
  );
}

function HomePage({ setActivePage }) {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(231,229,228,0.7)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top left, rgba(120,113,108,0.15), transparent 35%), radial-gradient(circle at bottom right, rgba(168,162,158,0.18), transparent 30%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", display: "grid", gap: 40, padding: "64px 24px 96px", gridTemplateColumns: "1.05fr 0.95fr" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ marginBottom: 16, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.4em", color: "#78716c" }}>Miners Rest, Victoria</p>
            <h1 style={{ maxWidth: 820, fontSize: 64, lineHeight: 1.02, fontWeight: 600, margin: 0 }}>
              Traditional Valais Blacknose sheep and one of Australia’s leading Mediterranean Miniature Donkey studs.
            </h1>
            <p style={{ marginTop: 24, maxWidth: 680, fontSize: 20, lineHeight: 1.8, color: "#57534e" }}>
              Malakai is a premium breeding program focused on conformation, true traditional type, quality bloodlines, and beautifully presented livestock bred with purpose.
            </p>
            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 16 }}>
              <button onClick={() => setActivePage("sheep")} style={{ borderRadius: 999, background: "#1c1917", padding: "12px 24px", fontSize: 14, fontWeight: 500, color: "white", border: 0, cursor: "pointer" }}>View Our Sheep</button>
              <button onClick={() => setActivePage("donkeys")} style={{ borderRadius: 999, background: "white", padding: "12px 24px", fontSize: 14, fontWeight: 500, color: "#1c1917", border: "1px solid #d6d3d1", cursor: "pointer" }}>View Our Donkeys</button>
            </div>
          </div>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ gridColumn: "1 / span 2", borderRadius: 32, background: "white", padding: 16, boxShadow: "0 12px 30px rgba(120,113,108,0.15)", overflow: "hidden" }}>
              <img src="/group-babies.webp" alt="Valais lambs at Malakai" style={{ width: "100%", height: "100%", minHeight: 420, objectFit: "cover", borderRadius: 26, display: "block" }} />
            </div>
            <div style={{ borderRadius: 32, background: "#e9e1d4", padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.3em", color: "#78716c" }}>Valais Focus</div>
              <div style={{ marginTop: 12, fontSize: 30, fontWeight: 600, lineHeight: 1.15 }}>Conformation, bone, fleece, markings, and true traditional type.</div>
            </div>
            <div style={{ borderRadius: 32, background: "#1c1917", color: "white", padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.3em", color: "#a8a29e" }}>Donkey Stud</div>
              <div style={{ marginTop: 12, fontSize: 30, fontWeight: 600, lineHeight: 1.15 }}>Imported genetics, strong type, and one of Australia’s largest studs.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ borderRadius: 36, background: "#1c1917", padding: 40, color: "white", boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}>
          <div style={{ display: "grid", gap: 32, gridTemplateColumns: "1.2fr 0.8fr", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.35em", color: "#a8a29e" }}>Featured Opportunity</p>
              <h2 style={{ marginTop: 12, fontSize: 48, lineHeight: 1.1, fontWeight: 600 }}>Elite Donkey Breeding Package</h2>
              <p style={{ marginTop: 20, maxWidth: 760, fontSize: 18, lineHeight: 1.8, color: "#d6d3d1" }}>
                Two pregnant jennies, both in foal to Micro Mini Heikens Arc Clint Mar, plus one unrelated micro red jack. A rare package built from elite, hand-selected bloodlines with a strong focus on size, quality, and consistency.
              </p>
              <div style={{ marginTop: 24, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                <div style={{ borderRadius: 18, background: "rgba(255,255,255,0.1)", padding: "12px 16px", fontSize: 14 }}>Two pregnant jennies</div>
                <div style={{ borderRadius: 18, background: "rgba(255,255,255,0.1)", padding: "12px 16px", fontSize: 14 }}>Both in foal to Micro Mini Heikens Arc Clint Mar</div>
                <div style={{ borderRadius: 18, background: "rgba(255,255,255,0.1)", padding: "12px 16px", fontSize: 14 }}>One unrelated micro red jack</div>
                <div style={{ borderRadius: 18, background: "rgba(255,255,255,0.1)", padding: "12px 16px", fontSize: 14 }}>Stud priced • Serious enquiries only</div>
              </div>
              <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 16 }}>
                <button onClick={() => setActivePage("stock")} style={{ borderRadius: 999, background: "white", padding: "12px 24px", fontSize: 14, fontWeight: 500, color: "#1c1917", border: 0, cursor: "pointer" }}>View Package</button>
                <button onClick={() => setActivePage("contact")} style={{ borderRadius: 999, background: "transparent", padding: "12px 24px", fontSize: 14, fontWeight: 500, color: "white", border: "1px solid rgba(255,255,255,0.3)", cursor: "pointer" }}>Enquire Now</button>
              </div>
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              <img src="/donkey-trio-1.jpg" alt="Breeding package donkey one" style={{ height: 176, width: "100%", objectFit: "cover", borderRadius: 24, display: "block" }} />
              <img src="/donkey-trio-2.jpg" alt="Breeding package donkey two" style={{ height: 176, width: "100%", objectFit: "cover", borderRadius: 24, display: "block" }} />
              <img src="/donkey-trio-3.jpg" alt="Breeding package donkey three" style={{ height: 176, width: "100%", objectFit: "cover", borderRadius: 24, display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gap: 40, gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ borderRadius: 32, background: "white", padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            <SectionTitle eyebrow="Valais Blacknose Sheep" title="Bred for traditional style and stud quality." text="Our sheep program focuses on correct conformation, strong bone, balanced markings, dense fleece, and the traditional Valais character that gives the breed its premium appeal." />
            <div style={{ marginTop: 32 }}><FeatureList items={sheepFeatures} /></div>
          </div>
          <div style={{ borderRadius: 32, background: "white", padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            <SectionTitle eyebrow="Mediterranean Miniature Donkeys" title="A large Australian stud built on imported genetics." text="Our donkey program is centered on soundness, temperament, conformation, and long-term quality, with bloodlines chosen to strengthen the future of the stud." />
            <div style={{ marginTop: 32 }}><FeatureList items={donkeyFeatures} /></div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProgramPage({ eyebrow, title, text, features, sectionIds, setActivePage }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ display: "grid", gap: 40, gridTemplateColumns: "1fr 0.9fr", alignItems: "center" }}>
        <div>
          <SectionTitle eyebrow={eyebrow} title={title} text={text} />
          <div style={{ marginTop: 32 }}><FeatureList items={features} /></div>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 12 }}>
            {sectionIds.map(([id, label]) => (
              <button key={id} onClick={() => setActivePage(id)} style={{ borderRadius: 999, border: "1px solid #d6d3d1", background: "white", padding: "10px 16px", fontSize: 14, fontWeight: 500, color: "#44403c", cursor: "pointer" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ borderRadius: 32, background: "linear-gradient(135deg,#d6d3d1,#f5f5f4)", padding: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <div style={{ aspectRatio: "4 / 3", borderRadius: 24, border: "1px solid rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.3)" }} />
        </div>
      </div>
    </section>
  );
}

function AnimalGridPage({ eyebrow, title, text, items }) {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
      <SectionTitle eyebrow={eyebrow} title={title} text={text} />
      <div style={{ marginTop: 48, display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {items.map((item) => <AnimalCard key={item.name} item={item} />)}
      </div>
    </section>
  );
}

function StockPage() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
      <SectionTitle eyebrow="Available Stock" title="Current and premium livestock opportunities." text="Select opportunities released from the Malakai program. Serious enquiries only." />
      <div style={{ marginTop: 48, display: "grid", gap: 32 }}>
        {stockItems.map((item) => (
          <div key={item.title} style={{ borderRadius: 32, background: "white", padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.3em", color: "#78716c" }}>{item.category}</div>
            <h3 style={{ marginTop: 12, fontSize: 36, fontWeight: 600 }}>{item.title}</h3>
            <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.8, color: "#57534e" }}>{item.text}</p>
            <ul style={{ marginTop: 24, paddingLeft: 20 }}>
              {item.highlights.map((h) => (
                <li key={h} style={{ marginBottom: 8, fontSize: 14, color: "#44403c" }}>{h}</li>
              ))}
            </ul>
            <div style={{ marginTop: 32 }}>
              <button style={{ borderRadius: 999, background: "#1c1917", padding: "12px 24px", fontSize: 14, fontWeight: 500, color: "white", border: 0, cursor: "pointer" }}>Enquire About This Package</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gap: 32, gridTemplateColumns: "1fr 0.9fr", borderRadius: 36, background: "#1c1917", padding: 32, color: "white", boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}>
        <div>
          <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.35em", color: "#a8a29e" }}>Contact</p>
          <h2 style={{ marginTop: 12, fontSize: 48, lineHeight: 1.1, fontWeight: 600 }}>Enquiries welcome for sheep, donkeys, and upcoming stock.</h2>
          <p style={{ marginTop: 24, maxWidth: 680, fontSize: 18, lineHeight: 1.8, color: "#d6d3d1" }}>Get in touch to discuss available animals, future breeding prospects, or to learn more about the Malakai breeding program.</p>
        </div>
        <div style={{ display: "grid", gap: 16 }}>
          <div style={{ borderRadius: 24, background: "rgba(255,255,255,0.05)", padding: 20 }}>17 Miners Rest Rd, Miners Rest VIC 3352</div>
          <div style={{ borderRadius: 24, background: "rgba(255,255,255,0.05)", padding: 20 }}>shane@malakai.com.au</div>
          <div style={{ borderRadius: 24, background: "rgba(255,255,255,0.05)", padding: 20 }}>0409 270 381</div>
        </div>
      </div>
    </section>
  );
}

export default function MalakaiFarmWebsite() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div style={{ minHeight: "100vh", background: "#f7f3ec", color: "#1c1917" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(231,229,228,0.7)", background: "rgba(247,243,236,0.95)", backdropFilter: "blur(10px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16, padding: "16px 24px" }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: "0.2em" }}>MALAKAI</div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.35em", color: "#78716c" }}>Valais Blacknose Sheep & Mediterranean Miniature Donkeys</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActivePage(id)}
                style={{
                  borderRadius: 999,
                  padding: "10px 16px",
                  fontSize: 14,
                  border: 0,
                  cursor: "pointer",
                  background: activePage === id ? "#1c1917" : "transparent",
                  color: activePage === id ? "white" : "#44403c",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {activePage === "home" && <HomePage setActivePage={setActivePage} />}
      {activePage === "about" && (
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <SectionTitle eyebrow="About Malakai" title="Two premium breeding programs, one clear standard." text="Malakai is based in Miners Rest, Victoria, and brings together traditional Valais Blacknose sheep and Mediterranean Miniature Donkeys under a clear focus on conformation, presentation, temperament, and long-term genetic improvement." />
        </section>
      )}
      {activePage === "sheep" && <ProgramPage eyebrow="Valais Blacknose Sheep" title="A dedicated program built around true traditional type." text="Our sheep program focuses on conformation, structure, strong bone, balanced markings, fleece quality, and the traditional Valais character that gives the breed its premium appeal." features={sheepFeatures} sectionIds={[["rams", "Stud Rams"], ["ewes", "Breeding Ewes"]]} setActivePage={setActivePage} />}
      {activePage === "rams" && <AnimalGridPage eyebrow="Stud Rams" title="Rams selected to move the flock forward." text="Replace these placeholders with your real Valais sires." items={rams} />}
      {activePage === "ewes" && <AnimalGridPage eyebrow="Breeding Ewes" title="Foundation females behind the strength of the flock." text="Replace these placeholders with your real Valais ewes." items={ewes} />}
      {activePage === "donkeys" && <ProgramPage eyebrow="Mediterranean Miniature Donkeys" title="One of Australia’s largest studs with imported genetic strength." text="Our donkey stud is built around quality imported bloodlines, conformation, soundness, temperament, and the consistency required for a respected long-term breeding program." features={donkeyFeatures} sectionIds={[["jacks", "Stud Jacks"], ["jennies", "Jennies"]]} setActivePage={setActivePage} />}
      {activePage === "jacks" && <AnimalGridPage eyebrow="Stud Jacks" title="Stud jacks from the current Malakai website." text="I rebuilt this page and added the current jacks listed on the live Malakai site, including the reference jack shown there." items={jacks} />}
      {activePage === "jennies" && <AnimalGridPage eyebrow="Jennies" title="Brood jennets from the current Malakai website." text="I rebuilt this page and loaded the brood jennets shown on the live Malakai site into the mockup." items={jennies} />}
      {activePage === "stock" && <StockPage />}
      {activePage === "contact" && <ContactPage />}

      <footer style={{ borderTop: "1px solid #e7e5e4", background: "rgba(255,255,255,0.6)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", padding: "32px 24px", fontSize: 14, color: "#78716c" }}>
          <div>Malakai • 17 Miners Rest Rd, Miners Rest VIC 3352</div>
          <div>Valais Blacknose Sheep • Mediterranean Miniature Donkeys</div>
        </div>
      </footer>
    </div>
  );
}
