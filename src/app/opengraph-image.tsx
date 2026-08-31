import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Maggie Blank — Lowcountry Mortgage Advisor';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/maggie-blank-logo-transparent.png'), 'base64');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#F8F8F8',
          color: '#333333',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ position: 'absolute', width: 760, height: 760, right: -160, top: -200, borderRadius: '50%', background: '#DCE8E8' }} />
        <div style={{ position: 'absolute', width: 520, height: 520, right: 70, bottom: -280, borderRadius: '50%', background: '#E9DDC6' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px 88px', width: '72%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 42 }}>
            <div style={{ display: 'flex', width: 88, height: 88, alignItems: 'center', justifyContent: 'center', borderRadius: 24, background: '#FFFFFF', boxShadow: '0 12px 28px rgba(45, 62, 70, 0.14)' }}>
              <img src={`data:image/png;base64,${logo}`} style={{ width: 72, height: 72, objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 36, fontWeight: 700 }}>Maggie Blank</span>
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 17, letterSpacing: 4, color: '#526E7A', textTransform: 'uppercase' }}>Mortgage Advisor</span>
            </div>
          </div>
          <div style={{ display: 'flex', width: 86, height: 5, borderRadius: 99, background: '#C5A059', marginBottom: 24 }} />
          <span style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.08 }}>Strategic mortgage guidance for the Lowcountry.</span>
          <span style={{ marginTop: 24, fontFamily: 'Arial, sans-serif', fontSize: 25, lineHeight: 1.4, color: '#526E7A' }}>Thoughtful financing for physicians, homebuyers, and self-employed borrowers.</span>
        </div>
      </div>
    ),
    size,
  );
}
