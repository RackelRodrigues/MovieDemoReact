export interface MediaDTO {
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  overview?: string;
  release_date: string;
  runtime?: number;
  genres?: string[];
  poster?: string;
  backdrop_path?: string;
  rating?: number;
  vote_count?: number;
  production_companies?: string[];
  country?: string;
  language?: string;
  poster_path?: string;
}
