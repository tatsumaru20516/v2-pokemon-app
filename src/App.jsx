import { useEffect, useState } from 'react';
import './App.css'
import { fetchPokemonData } from './utils/pokemon';

function App() {

  // ポケモンデータを格納するステート
  const [pokemonData, setPokemonData] = useState([]);

  // 全ポケモンデータを格納する配列
  const [allPokemonData, setAllPokemonData] = useState([]);

  // 初期URLを設定
  const initialUrl = `https://pokeapi.co/api/v2/pokemon`;

  // ここでfetchPokemonDataを呼び出してデータを取得することができます。
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData(initialUrl); //dataはJSON
      console.log(data); // デバッグ用
    };
    fetchData();
  }, []);

  // resultsから1匹分のポケモンデータを取得するloadPokemon関数


  return (
    <>
      <h1>Hello, World!</h1>
    </>
  )
}

export default App
