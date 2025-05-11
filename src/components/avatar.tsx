import md5 from 'blueimp-md5';

const Avatar = ({email, size = 80}: { email: string, size?: number }) => {
    const hash = md5(email.trim().toLowerCase());
    const url = `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;

    return (
        <img
            src={url}
            alt="User Avatar"
            width={size}
            height={size}
            className="rounded-full"
        />
    );
};

export default Avatar;
