export default function PdfModal({ book, onClose }) {
  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal" onClick={e => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <div className={`pdf-modal-cover-chip accent-${book.accent}`}>
            {book.icon}
          </div>
          <div className="pdf-modal-info">
            <p className="pdf-modal-title">{book.title} — {book.classGroup}</p>
            <p className="pdf-modal-meta">{book.subject} · {book.pages} pages · {book.classLabel}</p>
          </div>
          <div className="pdf-modal-actions">
            <a
              className="pdf-modal-download"
              href={book.pdfUrl}
              download
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
            <button className="pdf-modal-close" onClick={onClose} aria-label="Close">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <iframe
          className="pdf-modal-iframe"
          src={book.pdfUrl}
          title={`${book.title} PDF Preview`}
        />
      </div>
    </div>
  );
}
