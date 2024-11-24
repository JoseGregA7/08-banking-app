import './style.scss';

const AvatarLogout = ({handleEndSession}:{handleEndSession:()=>void}) => {
    return (
        <div className='avatar-logout'>
            <img src="avatar.webp" alt="Avatar" onClick={handleEndSession} className="avatar" />
        </div>
    );
};

export default AvatarLogout;
