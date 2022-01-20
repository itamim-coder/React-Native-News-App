import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bpl from './app/components/Bpl';
import BreakingNews from './app/components/BreakingNews';
import Card from './app/components/Card';
import CricketNews from './app/components/CricketNews';


import FootballNews from './app/components/FootballNews';
import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';

import data from './fakeData'

export default function App() {

  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech');
  const cricketNews = data.filter(item => item.category === 'political');
  const bplNews = data.filter(item => item.category === 'entertainment');
  return (

    
   <Screen>
     <SearchBar></SearchBar>
     <Card item={  {
      id: '1',
      title: "Does the Supreme Court Need More Justices?",
      desc: "2022 is a big year for supporters of Supreme Court reform. Roe v. Wade, the landmark case that gave women nationwide the right to have abortions, might be overturned, and the debate around changing",     
      thumbnail: "https://static01.nyt.com/images/2022/01/19/opinion/19argument-image-audioapp/19argument-image-audioapp-facebookJumbo-v2.jpg",
      category: 'breaking-news',
    }}></Card>      
     <BreakingNews data={breakingNews}></BreakingNews>
     <CricketNews data={cricketNews}></CricketNews>
     <FootballNews data={techNews}></FootballNews>
     <Bpl data={bplNews}></Bpl>
    
    
 
   </Screen>
  );
}


