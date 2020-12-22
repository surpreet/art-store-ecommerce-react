import React from 'react'

export default function Footer() {
	const phoneNumber = '431-555-5556';
	
	return (
      <footer className="page-footer">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <a href="mailto:yalda_art@store.com">yalda_art@store.com</a>
          </li>
  				<li><a href={`"tel:+01-${phoneNumber}"`}>{phoneNumber}</a></li>
        </ul>
      </footer>
    )
}
