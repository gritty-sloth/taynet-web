const CONTACTS = [
  { label: 'github', value: 'gritty-sloth', href: 'https://github.com/gritty-sloth' },
  { label: 'x', value: '@gritty_sloth', href: 'https://x.com/gritty_sloth' },
  { label: 'email', value: 'hey@taynet.dev', href: 'mailto:hey@taynet.dev' },
]

export default function Contact() {
  return (
    <footer
      id="contact"
      style={{
        background: '#070707',
        padding: '120px 24px 80px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1000px' }}>
        <span
          className="font-mono block"
          style={{ fontSize: '11px', color: '#c8a45c', marginBottom: '16px' }}
        >
          // contact
        </span>

        <h2
          className="font-sans"
          style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#e8e8e6',
            letterSpacing: '-0.03em',
            marginBottom: '32px',
          }}
        >
          say hi
        </h2>

        <div className="flex flex-col" style={{ gap: '12px' }}>
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="font-mono inline-block transition-colors duration-200 hover:text-[#c8a45c]"
              style={{ fontSize: '13px', color: '#6b6b6b' }}
            >
              {c.label}: {c.value}
            </a>
          ))}
        </div>

        <p
          className="font-mono"
          style={{
            fontSize: '10px',
            color: '#333',
            marginTop: '80px',
            textAlign: 'center',
          }}
        >
          built at zero cost.
        </p>
      </div>
    </footer>
  )
}
