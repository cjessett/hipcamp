import React from 'react';

export default function DropDown({ onClick }) {
  return <span style={{ cursor: 'pointer' }} onClick={onClick} role="img" aria-label="dropdown">&#x25BC;</span>;
}