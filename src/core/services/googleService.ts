export const getGoogleProfile = async (token: string) => {
  const response = await fetch(
    "https://www.googleapis.com/userinfo/v2/me",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return response.json()
}