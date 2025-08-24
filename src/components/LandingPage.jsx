import React from 'react'

function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--mea-bg-gradient)',
      fontFamily: 'var(--mea-font-family)',
      textAlign: 'center',
      color: 'white'
    }}>
      <div style={{
        background: 'var(--mea-card-bg)',
        padding: '60px',
        borderRadius: '20px',
        color: 'var(--mea-black)',
        maxWidth: '800px',
        margin: '20px'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="/assets/logo.svg" 
            alt="Company Logo" 
            style={{ 
              height: '60px', 
              width: 'auto',
              marginBottom: '10px'
            }} 
          />
        </div>

        <h1 style={{
          fontSize: '3rem',
          marginBottom: '20px',
          color: 'var(--mea-red)',
          fontWeight: 'bold'
        }}>
          Hello World!
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '30px',
          color: 'var(--mea-green)',
          fontWeight: '600'
        }}>
          Welcome to your Power Pages SPA Template
        </p>
        <div style={{
          background: 'var(--mea-red)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '50px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}>
          <img 
            src="/assets/icons/star.svg" 
            alt="Star" 
            style={{ 
              width: '20px', 
              height: '20px',
              filter: 'invert(1)'
            }} 
          />
          Ready to Build Amazing Apps
        </div>
        
        <div style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: 'var(--mea-accent-bg)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid var(--mea-accent-border)'
          }}>
            <h3 style={{ 
              color: 'var(--mea-red)', 
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <img 
                src="/assets/icons/download.svg" 
                alt="Download" 
                style={{ 
                  width: '20px', 
                  height: '20px',
                  stroke: 'var(--mea-red)'
                }} 
              />
              Power Pages
            </h3>
            <p style={{ color: 'var(--mea-black)', fontSize: '0.9rem' }}>Deploy directly to Power Pages with GitHub Actions</p>
          </div>
          <div style={{
            background: 'var(--mea-accent-bg)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid var(--mea-accent-border)'
          }}>
            <h3 style={{ 
              color: 'var(--mea-red)', 
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <img 
                src="/assets/icons/lightning.svg" 
                alt="Lightning" 
                style={{ 
                  width: '20px', 
                  height: '20px',
                  stroke: 'var(--mea-red)'
                }} 
              />
              React & Vite
            </h3>
            <p style={{ color: 'var(--mea-black)', fontSize: '0.9rem' }}>Modern development stack with hot reload</p>
          </div>
          <div style={{
            background: 'var(--mea-accent-bg)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid var(--mea-accent-border)'
          }}>
            <h3 style={{ 
              color: 'var(--mea-red)', 
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <img 
                src="/assets/icons/check.svg" 
                alt="Check" 
                style={{ 
                  width: '20px', 
                  height: '20px',
                  stroke: 'var(--mea-red)'
                }} 
              />
              AI Ready
            </h3>
            <p style={{ color: 'var(--mea-black)', fontSize: '0.9rem' }}>Template includes AI agent for feature development</p>
          </div>
          <div style={{
            background: 'var(--mea-accent-bg)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid var(--mea-accent-border)'
          }}>
            <h3 style={{ 
              color: 'var(--mea-red)', 
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <img 
                src="/assets/icons/star.svg" 
                alt="Star" 
                style={{ 
                  width: '20px', 
                  height: '20px',
                  stroke: 'var(--mea-red)'
                }} 
              />
              Customizable
            </h3>
            <p style={{ color: 'var(--mea-black)', fontSize: '0.9rem' }}>Easy to modify and extend for your needs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage