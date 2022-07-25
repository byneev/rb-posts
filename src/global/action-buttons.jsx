export default function ActionButton({ onClick, children, css = '' }) {
  return (
    <button onClick={onClick} className={css}>
      {children}
    </button>
  )
}