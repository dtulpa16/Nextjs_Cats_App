export interface Cat {
    id: number;
    name: string;
    breed: string;
    age: number;
    temperament: string;
    moralAlignment: string;
    imageUrl: string;
}
export type CatListProps = {
    cats: Cat[];
}

export type CatDetailsPageProps = {
    params: {
      id: string
    }
  }
  
export type CatProps = {
    cat: Cat
}