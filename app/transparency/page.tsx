import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paaraddarshita — Sabhi Documents aur Financial Information',
  description: 'Shrimati Annapurna Devi Charitable Trust ke sabhi legal documents, 80G, 12A, CSR-1, annual reports aur financial statements yahan available hain.',
};

const legalDocs = [
  { icon: '🏛️', title: 'Trust Registration Certificate', detail: 'Rajasthan Public Trust Act ke antargat registered', status: 'Available', statusClass: 'bg-seva-green-50 text-seva-green-dark' },
  { icon: '💳', title: 'PAN Card', detail: 'Permanent Account Number — Income Tax Dept.', status: 'XXXXX1234X', statusClass: 'bg-seva-green-50 text-seva-green-dark' },
  { icon: '📋', title: '12A Certificate', detail: 'Income Tax Exemption Certificate — Sec. 12A', status: 'Certified', statusClass: 'bg-seva-green-50 text-seva-green-dark' },
  { icon: '💰', title: '80G Certificate', detail: 'Donor Tax Benefit Certificate — Sec. 80G', status: 'Approved', statusClass: 'bg-saffron-50 text-saffron-dark' },
  { icon: '🏢', title: 'CSR-1 Filing', detail: 'Filed with Ministry of Corporate Affairs (MCA)', status: 'Filed', statusClass: 'bg-seva-green-50 text-seva-green-dark' },
  { icon: '🇮🇳', title: 'DARPAN ID', detail: 'NGO Darpan Portal — Govt. of India', status: 'RJ/2020/XXXXX', statusClass: 'bg-seva-green-50 text-seva-green-dark' },
  { icon: '🌍', title: 'FCRA Registration', detail: 'Foreign Contribution Regulation Act', status: 'Application Pending', statusClass: 'bg-yellow-50 text-yellow-700' },
];

const financials = [
  { year: '2024–25', income: '₹X,XX,XXX', expenditure: '₹X,XX,XXX', program: 'XX%', status: 'CA Audited', docs: 'Annual Report PDF' },
  { year: '2023–24', income: '₹X,XX,XXX', expenditure: '₹X,XX,XXX', program: 'XX%', status: 'CA Audited', docs: 'Annual Report PDF' },
  { year: '2022–23', income: '₹X,XX,XXX', expenditure: '₹X,XX,XXX', program: 'XX%', status: 'CA Audited', docs: 'Annual Report PDF' },
];

const governance = [
  { role: 'Sansthaapaak & Managing Trustee', name: 'Sunita Swami', since: '2020' },
  { role: 'Trustee', name: '[Trustee Name 2]', since: '2020' },
  { role: 'Trustee', name: '[Trustee Name 3]', since: '2020' },
  { role: 'Chartered Accountant (Auditor)', name: '[CA Name]', since: '2021' },
];

export default function TransparencyPage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #1B5E3B 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-saffron-light mb-4">Poora Hisaab — Khuli Kitaab</p>
          <h1 className="heading-display text-white mb-4">Paaraddarshita</h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Aap humpar bharosa karte hain. Isliye hum aapke saamne sab kuch rakhte hain.
            Har document, har rupaye ka hisaab — yahan available hai.
          </p>
        </div>
      </section>

      {/* LEGAL DOCS */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Kanooni Manyata</p>
            <h2 className="heading-section">Registration aur Certificates</h2>
            <div className="gold-line" />
            <p className="text-muted max-w-lg mx-auto">
              Saari documents download karne ke liye neeche ke buttons use karein ya hamse
              directly sampark karein.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {legalDocs.map((d) => (
              <div key={d.title} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-seva-green-50 rounded-xl flex items-center justify-center text-2xl">
                    {d.icon}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${d.statusClass}`}>
                    {d.status}
                  </span>
                </div>
                <h3 className="heading-card text-sm mb-1">{d.title}</h3>
                <p className="text-muted text-xs mb-4">{d.detail}</p>
                <button className="text-saffron text-xs font-bold hover:underline flex items-center gap-1">
                  📄 Document Download Karen
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-saffron-50 border border-saffron-100 rounded-xl p-5 text-center">
            <p className="text-saffron-dark font-semibold text-sm">
              💡 Koi specific document chahiye? Directly contact karein:
            </p>
            <a
              href="https://wa.me/919352659727?text=Mujhe%20trust%20ka%20[document%20naam]%20chahiye."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 btn-primary text-sm px-6 py-2.5 inline-flex"
            >
              WhatsApp par Maangein
            </a>
          </div>
        </div>
      </section>

      {/* FINANCIAL SUMMARY */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Paisa Kahan Jaata Hai</p>
            <h2 className="heading-section">Financial Summary</h2>
            <div className="gold-line" />
          </div>

          {/* How funds are used */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { pct: '80%', label: 'Direct Program Kharcha', desc: 'Ann Daan, Gau Seva, Mahila workshops, Pakshi seva', color: 'bg-seva-green', textColor: 'text-white' },
              { pct: '12%', label: 'Operational Kharcha', desc: 'Staff, logistics, communication, office', color: 'bg-saffron', textColor: 'text-white' },
              { pct: '8%', label: 'Admin & Compliance', desc: 'CA audit, legal, documentation', color: 'bg-gold', textColor: 'text-white' },
            ].map((f) => (
              <div key={f.label} className={`${f.color} rounded-2xl p-7 text-center shadow-lg`}>
                <div className={`text-5xl font-black ${f.textColor} mb-2`}>{f.pct}</div>
                <div className={`font-bold ${f.textColor} mb-2`}>{f.label}</div>
                <div className={`text-sm ${f.textColor} opacity-75`}>{f.desc}</div>
              </div>
            ))}
          </div>

          {/* Year-wise table */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="p-6 border-b border-[#E5E0D8]">
              <h3 className="heading-card">Year-wise Financial Summary</h3>
              <p className="text-muted text-sm">CA-audited accounts. Detailed reports available on request.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-seva-green-50">
                  <tr>
                    {['Financial Year', 'Total Income', 'Total Expenditure', 'Program %', 'Audit Status', 'Report'].map((h) => (
                      <th key={h} className="text-left p-4 text-xs font-bold text-seva-green-dark uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {financials.map((f, i) => (
                    <tr key={f.year} className={i % 2 === 0 ? 'bg-white' : 'bg-off-white'}>
                      <td className="p-4 font-bold text-seva-green-dark text-sm">{f.year}</td>
                      <td className="p-4 text-sm text-body">{f.income}</td>
                      <td className="p-4 text-sm text-body">{f.expenditure}</td>
                      <td className="p-4">
                        <span className="tag">{f.program}</span>
                      </td>
                      <td className="p-4">
                        <span className="trust-badge text-xs">{f.status}</span>
                      </td>
                      <td className="p-4">
                        <button className="text-saffron text-xs font-bold hover:underline">
                          Download PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Zimmedari Ka Dhanccha</p>
            <h2 className="heading-section">Governance Structure</h2>
            <div className="gold-line" />
            <p className="text-muted max-w-lg mx-auto">
              Yeh sanstha sirf ek insaan par nahi chalti — ek poori board of trustees hai jo
              mil kar decisions lete hain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {governance.map((g) => (
              <div key={g.name} className="bg-white rounded-2xl p-5 shadow-card text-center">
                <div className="w-14 h-14 bg-seva-green-50 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div className="text-xs font-bold text-saffron uppercase tracking-wide mb-1">{g.role}</div>
                <div className="font-bold text-seva-green-dark">{g.name}</div>
                <div className="text-xs text-gray-400 mt-1">Since {g.since}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="py-16 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="heading-section text-center mb-10">Hamare Policies</h2>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: '🔒', title: 'Privacy Policy', desc: 'Aapki personal information safe hai aur hum use kabhi share nahi karte.' },
              { icon: '💝', title: 'Donation Policy', desc: 'Daan ko kaise use kiya jaata hai — poora process yahan hai.' },
              { icon: '🛡️', title: 'Child Protection Policy', desc: 'Hamare programs mein bachon ki suraksha sabse pehle.' },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="heading-card mb-2">{p.title}</h3>
                <p className="text-muted text-sm mb-4">{p.desc}</p>
                <button className="text-saffron text-xs font-bold hover:underline">
                  Policy Padhein →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
