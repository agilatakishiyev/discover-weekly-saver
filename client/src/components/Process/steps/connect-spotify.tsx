const CLIENT_ID = "b73e4bdbb9424cfb9c7624ab42ce70de";
const REDIRECT_URI = `http://localhost:3000/process/choose-plan`;

export const ConnectSpotify = () => {
  const handleRedirectToSpotify = () => {
    const searchParams = new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID,
      scope:
        "user-read-private user-read-email playlist-modify-public user-library-read playlist-read-private",
      redirect_uri: REDIRECT_URI,
    });
    window.location.href = `https://accounts.spotify.com/authorize?${searchParams}`;
  };

  return (
    <>
      <button onClick={handleRedirectToSpotify}>Connect spotify</button>
    </>
  );
};
