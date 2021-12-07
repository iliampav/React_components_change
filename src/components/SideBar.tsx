import { Button } from './Button';

interface SidebarContext {
  genreSelected:number;
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[];
  clickButton: Function;
}

export function SideBar(props: SidebarContext) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.clickButton(genre.id)}
            selected={props.genreSelected === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}