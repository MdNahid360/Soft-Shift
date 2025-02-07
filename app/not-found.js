import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='notfound-body'>
  <div className="noise" />
  <div className="overlay" />
  <div className="terminal">
    <h1>
      Error <span className="errorcode">404</span>
    </h1>
    <p className="output">
      The page you are looking for might have been removed, had its name changed
      or is temporarily unavailable.
    </p>
    <p className="output">
      Please try to <span>Reload</span> or{" "}
      <Link className='link text-red-700' href="/">return to the homepage</Link>.
    </p>
    <p className="output">Good luck.</p>
  </div>
    </div>
  )
}