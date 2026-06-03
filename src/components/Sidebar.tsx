import { Link, useRouterState } from '@tanstack/react-router'
import { User, FolderGit2, BookOpen, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface NavItem {
  to: string
  icon: LucideIcon
  label: string
}

const navItems: NavItem[] = [
  { to: '/about', icon: User, label: 'About' },
  { to: '/projects', icon: FolderGit2, label: 'Projects' },
  { to: '/blog', icon: BookOpen, label: 'Blog' },
  { to: '/contact', icon: Mail, label: 'Contact' },
]

export default function Sidebar() {
  const { location } = useRouterState()

  return (
    <nav
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: '60px',
        backgroundColor: 'var(--background)',
        borderRight: '3px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '1rem',
        gap: '4px',
        zIndex: 50,
      }}
    >
      {/* Monogram home link */}
      <div className="group" style={{ position: 'relative', marginBottom: '8px' }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            backgroundColor: 'var(--primary)',
            border: '2px solid var(--border)',
            boxShadow: '3px 3px 0 0 var(--border)',
            borderRadius: '4px',
            fontFamily: 'Archivo Black, sans-serif',
            fontSize: '0.85rem',
            color: 'var(--primary-foreground)',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            transition: 'box-shadow 0.1s, transform 0.1s',
          }}
          className="hover:shadow-none hover:translate-y-px"
        >
          GD
        </Link>
        <div
          style={{
            position: 'absolute',
            left: 'calc(100% + 10px)',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'var(--card)',
            border: '2px solid var(--border)',
            boxShadow: '4px 4px 0 0 var(--border)',
            padding: '5px 12px',
            whiteSpace: 'nowrap',
            fontFamily: 'Archivo Black, sans-serif',
            fontSize: '0.8rem',
            color: 'var(--foreground)',
            pointerEvents: 'none',
            zIndex: 100,
          }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-100"
        >
          Home
        </div>
      </div>

      {navItems.map(({ to, icon: Icon, label }) => {
        const isActive = location.pathname.startsWith(to)
        return (
          <div key={to} className="group" style={{ position: 'relative' }}>
            <Link
              to={to}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '6px',
                border: '2px solid transparent',
                backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                color: isActive ? 'var(--primary-foreground)' : 'var(--foreground)',
                transition: 'background-color 0.15s, border-color 0.15s',
              }}
              className={!isActive ? 'hover:bg-accent hover:border-border' : ''}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            </Link>

            {/* Flyout label */}
            <div
              style={{
                position: 'absolute',
                left: 'calc(100% + 10px)',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'var(--card)',
                border: '2px solid var(--border)',
                boxShadow: '4px 4px 0 0 var(--border)',
                padding: '5px 12px',
                whiteSpace: 'nowrap',
                fontFamily: 'Archivo Black, sans-serif',
                fontSize: '0.8rem',
                color: 'var(--foreground)',
                pointerEvents: 'none',
                zIndex: 100,
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-100"
            >
              {label}
            </div>
          </div>
        )
      })}
    </nav>
  )
}
