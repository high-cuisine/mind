import { Banner } from './blocks/banner/banner'
import { About } from './blocks/about/about';
import { Explore } from './blocks/explore/explore'
import './App.css'
import { Indended } from './blocks/intended/intended';
import { Discover } from './blocks/discover/discover';
import { Header } from './blocks/header/header';
import { Contacts } from './blocks/contacts/contacts';

function App() {
  return (
    <>
      
      <div className={'mainContainer'}>
      <Header/>
        <Banner />
        <About></About>
        <Explore></Explore>
      </div>
      <Indended/>
      <div className={'downContainer'}>
        <Discover/>
        <Contacts/>
      </div>
    </>
  )
}

export default App
