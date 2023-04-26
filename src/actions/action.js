export const LISTEME_EKLE = "LISTEME_EKLE";
export const LISTEMDEN_CIKAR = "LISTEMDEN_CIKAR";

export const listeEkle = (newFav) => ({
  type: LISTEME_EKLE,
  payload: newFav,
});

export const listeCıkar = (id) => ({
  type: LISTEMDEN_CIKAR,
  payload: id,
});
