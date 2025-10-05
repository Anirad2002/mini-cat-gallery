export async function getCats(limit = 6) {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
  if (!response.ok) throw new Error("Błąd podczas pobierania danych z API 😿");
  return await response.json();
}