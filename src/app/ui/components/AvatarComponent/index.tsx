import React from 'react';
import './style.scss';

interface AvatarLogoutProps {
  handleEndSession: () => void;
}

const AvatarLogout = React.memo(({ handleEndSession }: AvatarLogoutProps) => {
  console.log('fui creado avatar')
  return (
    <div className="avatar-logout" role="button" aria-label="Cerrar sesión" onClick={handleEndSession} data-testid="avatar-logout-wrapper">
      <img
        src="avatar.webp"
        alt="Avatar de usuario - Cerrar sesión"
        onClick={handleEndSession}
        className="avatar"
        role="presentation"
        data-testid="avatar-logout-button"
      />
    </div>
  );
});

export default AvatarLogout;
