// pokeAPIのURLを受け取り、アクセスしてJSONで返す。

// 全てのポケモンデータをJSONオブジェクトで返す関数
export async function fetchPokemonData(url) {
	const response = await fetch(url);
	const data = response.json();
	return data;
}
