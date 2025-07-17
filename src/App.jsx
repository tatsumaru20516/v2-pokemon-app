import { useEffect, useState } from 'react';
import './App.css'
import { fetchPokemonData } from './utils/pokemon';
import Card from './components/Card/Card';

function App() {

  // 詳細なポケモンデータを格納するステート
  const [pokemonData, setPokemonData] = useState([]);

  // 初期URLを設定
  const initialUrl = `https://pokeapi.co/api/v2/pokemon`;

  // ここでfetchPokemonDataを呼び出してデータを取得することができます。
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData(initialUrl); //dataはJSON
      // console.log(data); // デバッグ用
      loadPokemon(data.results); // 詳細なポケモンデータの配列をpokemonDataに保存
    };
    fetchData();
  }, []);

  // // デバッグ
  // useEffect(() => {
  //   console.log(pokemonData); // pokemonDataの内容を確認
  // }, [pokemonData]);

  // 引数：results配列[{name,url},{〃}...]　戻り値：全ポケモン配列[1匹の詳細, 2匹目の詳細, ...]
  const loadPokemon = async (allPokemonData) => {
    const pokemonDataArray = await Promise.all(
      allPokemonData.map(pokemon => {
        let pokemonJson = fetchPokemonData(pokemon.url);
        return pokemonJson;
      })
    );
    setPokemonData(pokemonDataArray); // ポケモンデータをステートに保存
  };
  // ここでポケモンデータを処理するロジックを追加できます
  // console.log(allPokemonData); // デバッグ用

  return (
    <>
      <div className='App'>
        {/* ポケモンカードの表示 */}
        <div className="pokemonCardContainer">
          {pokemonData.map((pokemon, index) => {
            return <Card key={index} pokemon={pokemon} />
          })}
        </div>
      </div>
    </>
  )
}

export default App