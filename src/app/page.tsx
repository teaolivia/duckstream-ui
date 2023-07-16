import { VIDEOS } from "./data/data"
import { FilterableContent } from './filterable-content/FilterableContent';

export default function Home() {
  return (
    <FilterableContent data={VIDEOS} titleText={'select one of the titles from the left'} thumbnailSrc={'https://upload.wikimedia.org/wikipedia/commons/2/27/Affiche_220_Le_vilain_petit_canard_Fr.jpg'} />
  )
}
