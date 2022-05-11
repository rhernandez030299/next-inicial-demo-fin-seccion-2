import { FC } from "react";

type DarkLayoutProps = {
  children: React.ReactNode; // 👈️ added type for children
};

export const DarkLayout = ({ children }: DarkLayoutProps) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children } 
        </div>
    </div>
  );
};
