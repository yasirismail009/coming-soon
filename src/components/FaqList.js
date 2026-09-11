export default function FaqList({ faqs, title = 'FAQ' }) {
  if (!faqs?.length) return null;

  return (
    <section className="mb-8">
      <h2 className="km-h2">{title}</h2>
      <div className="space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question} className="km-card px-[1.5rem] py-[1.5rem]">
            <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
            <p className="leading-relaxed text-[var(--km-muted)]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
