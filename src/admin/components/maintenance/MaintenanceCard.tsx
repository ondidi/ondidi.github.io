"use client";

import { useState } from "react";
import Link from "next/link";

interface MaintenanceMenuItem {
  name: string;
  href: string;
}

interface MaintenanceCardProps {
  title: string;
  description: string;
  progress: string;
  status: string;
  statusType: string;
  icon: string;
  menuItems?: MaintenanceMenuItem[];
}

export default function MaintenanceCard({
  title,
  description,
  progress,
  status,
  statusType,
  icon,
  menuItems = [],
}: MaintenanceCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <article className="maintenance-card">
      <div className={`maintenance-card-icon ${statusType}`}>
        <img
          src={`/img/icons/${icon}`}
          alt=""
        />
      </div>

      <div className="maintenance-card-content">
        <div className="maintenance-card-header">
          <h3>{title}</h3>

          <span className={`maintenance-status ${statusType}`}>
            {status}
          </span>
        </div>

        <p>{description}</p>

        <small>{progress}</small>
      </div>

      <button
        type="button"
        className="maintenance-menu-button"
        aria-label={`Opções de ${title}`}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ⋮
      </button>

      {menuOpen && menuItems.length > 0 && (
        <div className="maintenance-component-menu">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}